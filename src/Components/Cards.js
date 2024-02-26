import burger from "../images/Burger2x.png";
import drinks from "../images/drinks.png";
import fries from "../images/fries.jpeg";

import { Col, Container, Row } from "react-bootstrap";

const Cards = () => {
  return (
    <>
      <section className="hero bglite">
        <Container>
          <Row className="justify-content-">
            <Col xs={12} md={8} lg={6}>
              <h1 className="my-3 ">
                Welcome, Admin! 
              </h1>
            </Col>
          </Row>
        </Container>
        <Row className="justify-content-center m-0 py-3">
          <Col xs={12} md={8} lg={6}>
            <div className="card-group">
              <div className="card m-2 p-3">
                <img
                  className="card-img-top"
                  src={burger}
                  alt="Card alts cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Burgers</h5>
                  <p className="card-text">
                  High quality beef medium to well with cheese and bacon on a multigrain bun.
                  </p>
                  <p className="card-text">
                    <small className="text-muted"></small>
                  </p>
                </div>
              </div>
              <div className="card m-2 p-3">
                <img
                  className="card-img-top"
                  src={drinks}
                  alt="Card alts cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Refreshers</h5>
                  <p className="card-text">
                  Unique blend of Mango, Pineapple, Guyabano, and Orange flavor makes it hard to resist.
                  </p>
                  <p className="card-text">
                    <small className="text-muted"></small>
                  </p>
                </div>
              </div>
              <div className="card m-2 p-3">
                <img
                  className="card-img-top"
                  src={fries}
                  alt="Card alts cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Sides</h5>
                  <p className="card-text">
                  From fries of all sizes and everything in between, we always brings a fresh cup of delight best shared together.
                  </p>
                  <p className="card-text">
                    <small className="text-muted"></small>
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default Cards;
