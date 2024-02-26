import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { toast } from "react-toastify";
import CustomSpinner from "./CustomSpinner";
import List from "./List";
import RestuarantForm from "./RestuarantForm";

const initialValues = {
  name: "",
  category: "",
  price: "",
  cost: "",
  totalstock: "",
  size: 0, // default value for size dropdown
  id: "",
};

const ListAndForm = ({ getData = () => {}, data = [] }) => {
  const value = collection(db, "restuarant");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialValues);
  const [validated, setValidated] = useState(false);

  const handleChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAfterSuccess = (isEdit = false) => {
    toast.success(isEdit ? "Record Updated" : "New Record Added!");
    getData();
    setFormData(initialValues);
    setValidated(false);
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      e.stopPropagation();
    } else {
      setLoading(true);
      if (formData?.id) {
        const taskDocRef = doc(db, "restuarant", formData?.id);
        try {
          await updateDoc(taskDocRef, formData).then(() => {
            handleAfterSuccess(true);
          });
        } catch (err) {
          alert(err);
          setLoading(false);
        }
      } else {
        await addDoc(value, { ...formData }).then((reponse) => {
          handleAfterSuccess();
        });
      }
    }
  };
  const onDelete = async (id) => {
    const taskDocRef = doc(db, "restuarant", id);
    setLoading(true);
    try {
      await deleteDoc(taskDocRef).then(() => {
        toast.success("Record delted!");
        setLoading(false);
        getData();
      });
    } catch (err) {
      alert(err);
      toast.error("error");
      setLoading(false);
    }
  };
  const onEdit = (row) => {
    setFormData({ ...row });
  };
  return (
    <>
      <CustomSpinner show={loading} />
      <Container className="pb-3" id="add">
        <Row className="justify-content-center p-3">
          <Col xs={12} md={8} lg={6}>
            <h2 className="my-2">
              {!formData?.id
                ? "Add New Restuarant Menu"
                : "Update Restuarant Menu"}
            </h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <RestuarantForm handleChange={handleChange} formData={formData} />
            </Form>
          </Col>
        </Row>
      </Container>

      <div className="bglite" id="view">
        <List data={data} onDelete={onDelete} onEdit={onEdit} />
      </div>
    </>
  );
};

export default ListAndForm;
