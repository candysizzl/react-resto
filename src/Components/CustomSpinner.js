import React from "react";
import Spinner from "react-bootstrap/Spinner";

const CustomSpinner = ({ show }) => {
  return (
    <div className={`overlay ${show ? "show" : ""}`}>
      <div className="spinner-container">
        <Spinner animation="border" variant="success" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </div>
  );
};

export default CustomSpinner;
