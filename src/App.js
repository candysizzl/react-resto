import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Cards from "./Components/Cards";
import ListAndForm from "./Components/ListAndForm";
import CustomSpinner from "./Components/CustomSpinner";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { Button } from "react-bootstrap";

const App = () => {
  const [loading, setLoading] = useState(false);
  const value = collection(db, "restuarant");
  const [data, setData] = useState([]);

  const getData = async () => {
    setLoading(true);
    const userData = await getDocs(value);
    if (userData) {
      setLoading(false);
    }
    setData(userData?.docs?.map((doc) => ({ ...doc.data(), id: doc?.id })));
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <CustomSpinner show={loading} />
      <div className="landing-page">
        <Navbar expand="lg" className="bglightblue stickyheader">
          <Container>
            <Navbar.Brand className="text-white">Admin Menu</Navbar.Brand>
            <div>
              <Button href="#add" className="me-2 btn btn-secondary btn-sm">
                Add New Menu
              </Button>
              <Button href="#view" className="btn btn-secondary btn-sm">
                View Menu
              </Button>
            </div>
          </Container>
        </Navbar>

        {/* Hero Section */}
        <Cards />

        {/* Table/List Section/Form Section */}
        <section className="">
          <ListAndForm getData={getData} data={data} />
        </section>

        {/* Responsive Footer */}
        <footer className="footer bglightblue stickyfooter">
          <Container>
            <Row>
              <Col xs={12}>
                {/* Add footer content here, such as copyright information, links, etc. */}
                <p className="text-white my-5 mx-auto">
                  &copy; Copyright 2024 ~ Theresa James
                </p>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    </>
  );
};

export default App;
