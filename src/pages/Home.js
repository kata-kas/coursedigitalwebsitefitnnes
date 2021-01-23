import "../App.css";
import Benefits from "../components/Benefits";
import Header from "../components/Header";
import CourseCard from "../components/CourseCard";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import Hero from "../assets/Hero.mp4";
import Banner from "../assets/banner.jpg";
import Banner2 from "../assets/banner2.png";
import Bv from "../assets/bv.mp4";

function Home() {
  const [allowVideo, setAllowVideo] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  useEffect(() => {
    setAllowVideo(true);
  }, []);

  const videoLoaded = () => {
    setIsVideoLoaded(true);
  };
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <motion.div>
      <div className="App">
        <div>
          {allowVideo && (
            <video
              muted
              loop
              autoPlay
              playsInline
              onCanPlayThrough={videoLoaded}
              poster={Banner}
              className={`${isVideoLoaded ? "show" : "hide"}`}
              id="background-video"
            >
              <source src={Hero} type="video/mp4" />
            </video>
          )}
        </div>
        <div className="Container" style={{ height: "100vh" }}>
          <Header />
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 5 }}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate( -50%, -50%)",
              fontSize: "70px",
              fontWeight: "800",
              lineHeight: "1.3em",
              color: "#CA2000",
              width: "70%",
              padding: "0.5%",
              textAlign: "center",
            }}
          >
            NOSS te ajută să fii în formă maximă!
            <br />
            <br />
          </motion.div>
          <div>
            <Link
              to="/despre-noi"
              className="Btn"
              style={{ textDecoration: "none" }}
            >
              AFLĂ CUM!
            </Link>
          </div>
        </div>
      </div>
      <Benefits />
      <div className="videostore">
        {allowVideo && (
          <video
            controls
            autoPlay
            playsInline
            onCanPlayThrough={videoLoaded}
            className={`${isVideoLoaded ? "show" : "hide"}`}
            poster={Banner2}
            id="bun-venit"
          >
            <source src={Bv} type="video/mp4" />
          </video>
        )}
      </div>
      <CourseCard />
      <Footer />
      <script
        id="CookieDeclaration"
        src="https://consent.cookiebot.com/98f96dbb-884d-4981-bd1e-59204bc2e36a/cd.js"
        type="text/javascript"
        async
      ></script>
    </motion.div>
  );
}

export default Home;
