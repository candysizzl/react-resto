import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const List = ({ data = [], onDelete, onEdit }) => {
  const sizeConverter = (size = 1) => {
    switch (size) {
      case 1:
        return "Large";
      case 2:
        return "Medium";
      case 3:
        return "Small";

      default:
        return "Large";
    }
  };

  return (
    <Container className="pb-5 table-responsive">
      <Row className="justify-content-center">
        <Col xs={12}>
          <h2 className="my-3">Menu List</h2>
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Category</th>
                <th scope="col">Name</th>
                <th scope="col">Size</th>
                <th scope="col">Price</th>
                <th scope="col">Cost</th>
                <th scope="col">Stock</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((row) => (
                <tr key={row.id}>
                  <td>{row.category}</td>
                  <td>{row.name}</td>
                  <td>{sizeConverter(Number(row.size))}</td>
                  <td>{row.price}</td>
                  <td>{row.cost}</td>
                  <td>{row.totalstock}</td>
                  <td>
                    <Button
                      variant="success"
                      className="me-2 btn btn-secondary btn-sm"
                      onClick={() => onEdit(row)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      className="btn btn-secondary btn-sm"
                      onClick={() => onDelete(row.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  );
};

export default List;
