import React from "react";
import { Form } from "react-bootstrap";
import { withRouter } from "react-router";

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <Form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/xleozwqd"
        method="POST"
      >
        <Form.Label>Nume Prenume</Form.Label>
        <Form.Control
          name="name"
          type="text"
          placeholder="Popescu Ion"
          required
        />
        <Form.Label>Adresa Email</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="popescu.ion@gmail.com"
        />
        <Form.Label>Număr de telefon</Form.Label>
        <Form.Control name="phonenumber" type="tel" />
        <Form.Check
          type="checkbox"
          label="Sunt de acord cu termenii și condițiile "
          required
        />
        <br />
        {status === "SUCCESS" ? (
          this.props.history.push("/plata")
        ) : (
          <button
            style={{
              backgroundColor: "#CA2000",
              border: "none",
              padding: "1rem",
              fontFamily: "Raleway",
              fontWeight: 900,
              color: "white",
              borderRadius: 2,
            }}
          >
            Trimite
          </button>
        )}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </Form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
export default withRouter(MyForm);
