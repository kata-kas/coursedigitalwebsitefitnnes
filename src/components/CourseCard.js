import "../App.css";
import { Card, Modal, Button, Col } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import Instr from "../assets/instr.mp4";
import Banner2 from "../assets/banner2.png";
import MyForm from "../components/Form";

function CourseCard() {
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Curs "Fitness pentru un stil de viață sănătos"
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MyForm />
        </Modal.Body>
      </Modal>
    );
  }
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="full">
      <Card
        style={{
          width: "auto",
          backgroundColor: "rgb(29, 29, 29)",
          color: " #CA2000",
          borderColor: "#CA2000",
        }}
      >
        <Card.Body>
          <video preload="none" controls poster={Banner2} id="bun-venit">
            <source src={Instr} type="video/mp4" />
          </video>
          <Card.Title
            style={{
              textAlign: "left",
              fontFamily: "Raleway",
              margin: "1rem",
            }}
          >
            <strong> Curs "Fitness pentru un stil de viață sănătos"</strong>
          </Card.Title>
          <Card.Text
            style={{
              textAlign: "left",
              lineHeight: "20px",
              margin: "1rem",
              fontWeight: "bold",
            }}
          >
            03 Februarie 2021
            <br />
            30 zile
            <br />
            200 RON
            <br />
            <br />
            <Link
              to="/curs-fitness-pentru-incepatori"
              style={{
                textDecoration: "none",
                color: " white",
                fontFamily: "Raleway",
                fontSize: "20px",
              }}
            >
              Detalii
            </Link>
          </Card.Text>
          <div>
            <div style={{ justifyContent: "center", textAlign: "center" }}>
              <Button
                as={Col}
                style={{
                  color: "white",
                  fontFamily: "Raleway",
                  fontSize: "20px",
                  fontWeight: 900,
                  backgroundColor: "#CA2000",
                  border: "none",
                  width: "20rem",
                }}
                onClick={() => setModalShow(true)}
              >
                Mă înscriu acum
              </Button>
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CourseCard;
