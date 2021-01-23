import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card, Button, Modal, Col } from "react-bootstrap";
import coursecardimg from "../assets/cardcourse.png";
import MyForm from "../components/Form";

import React from "react";
import ReactPlayer from "react-player";
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

function CursFpi() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div
      style={{
        backgroundColor: "rgb(29, 29, 29)",
        border: "solid 1px transparent",
      }}
    >
      <Header />
      <Card
        style={{
          width: "auto",
          marginLeft: "10rem",
          marginRight: "10rem",
          marginTop: "10rem",
          marginBottom: "10rem",
          backgroundColor: "rgb(29, 29, 29)",
          borderColor: "#CA2000",
        }}
      >
        <Card.Img
          variant="top"
          src={coursecardimg}
          alt="Curs Fittnes pentru un stil de viață sănătos"
          style={{ width: "100%", height: "80%" }}
        />
        <Card.Title
          style={{
            textAlign: "center",
            fontFamily: "Raleway",
            marginTop: "1rem",
            color: "#CA2000",
            fontWeight: 900,
          }}
        >
          <h1>Curs "Fitness pentru un stil de viață sănătos"</h1>
        </Card.Title>
        <Card.Text
          style={{
            textAlign: "left",
            fontFamily: "Raleway",
            marginTop: "1%",
          }}
        >
          <div style={{ margin: "5%", color: "white" }}>
            <p>
              💪🏻 NOSS Lifestyle un concept care promovează un stil de viață
              sănătos și echilibrat!
            </p>

            <p>
              🎓 Mai mult, echipa : NOSS Lifestyle a pregătit un curs care vine
              în sprijinul dumneavoastră.
            </p>

            <p>
              📝 Cursul cuprinde informații despre nutriție și exerciții fizice.
              În concluzie dacă doriți să scăpați de kilogramele în plus acum
              este momentul.
            </p>
          </div>
          <div style={{ margin: "auto" }}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=NdaTY4ZoIzI"
              loop="true"
              playing="true"
              width="100%"
              height="400px"
            />
          </div>
          <div style={{ margin: "10%", color: "white" }}>
            <h2 style={{ color: "#CA2000", fontWeight: 900 }}>
              Care este structura cursului? 🗺️
            </h2>
            <br />
            <p>
              Cursul va avea loc în grupul nostru oficial, pe aplicația
              Telegram. Astfel vei face parte din comunitatea NOSS, iar evoluția
              ta către un stil de viață mai sănătos va fi mai ușoară{" "}
            </p>
            <p>
              Cursul este împărțit pe o perioada de 4 săptămâni, în lecții
              separate, exercițiile propuse la fiecare lecție vor fi în format
              video, executate de către antrenorul oficial NOSS, Laurențiu
              Spătaru.
            </p>
            <p>
              La finalul acestui curs vei primi o diplomă de absolvire și vei
              face parte din comunitatea NOSS Premium, care are acces la noile
              noastre cursuri înainte celorlalți.
            </p>
            <p>
              Că să începi această călătorie alături de noi, apasă butonul de
              mai jos!
            </p>
          </div>
        </Card.Text>
        <Card.Body>
          <div>
            <Button
              as={Col}
              style={{
                color: "white",
                fontFamily: "Raleway",
                fontSize: "20px",
                fontWeight: 900,
                backgroundColor: "#CA2000",
                border: "none",
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
        </Card.Body>
      </Card>
      <Footer />
    </div>
  );
}

export default CursFpi;
