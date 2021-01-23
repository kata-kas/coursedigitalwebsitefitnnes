import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MyFormContact from "../components/ContactForm";
function Contact() {
  return (
    <div
      style={{
        backgroundColor: "rgb(29, 29, 29)",
        width: "100%",
      }}
    >
      <Header />
      <div style={{ padding: "10rem" }}>
        <MyFormContact />
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
