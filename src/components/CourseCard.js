import "../App.css";
import { Card } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

function CourseCard() {
  return (
    <div className="full">
      <Card
        style={{
          width: "auto",
          backgroundColor: "rgb(29, 29, 29)",
          color: " #CA2000",
        }}
      >
        <Card.Body>
          <video
            preload="none"
            controls
            poster="https://evc59.pcloud.com/dpZ7Bq0C7ZAUeeskZUpv7ZZ4SkuG7Z3VZZfs0ZXZtE73tCnQawytSWn436IjFhTC3Pyy/th-2084030952-955x708.png"
            id="bun-venit"
          >
            <source
              src="https://storage.googleapis.com/kreativio/Instructiuni.mp4"
              type="video/mp4"
            />
          </video>
          <Card.Title
            style={{ textAlign: "left", fontFamily: "Raleway", margin: "10%" }}
          >
            <strong> Curs "Fitness pentru un stil de viață sănătos"</strong>
          </Card.Title>
          <Card.Text
            style={{
              textAlign: "left",
              lineHeight: "20px",
              margin: "10%",
              fontWeight: "bold",
            }}
          >
            18 Ianuarie 2021
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
                color: " #CA2000",
                fontFamily: "Raleway",
                fontSize: "20px",
              }}
            >
              Detalii
            </Link>
          </Card.Text>
          <div>
            <Link to="/inscriere">
              <div
                style={{
                  bottom: "2%",
                  left: "50%",
                  transform: "translate( -50%, 0%)",
                  width: "150px",
                  height: "50px",
                  fontSize: "18px",
                  fontWeight: "900",
                  textTransform: "uppercase",
                  textAlign: "center",
                  backgroundColor: "#CA2000",
                  color: "white",
                  padding: "1%",
                  borderRadius: "1%",
                  position: "absolute",
                }}
              >
                Înscrie-te
              </div>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CourseCard;
