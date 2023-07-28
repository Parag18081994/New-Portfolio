import React from "react";
import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_wsac4zb",
        "template_h0r0wp7",
        formRef.current,
        "L8cRD1NL9g6OqbZLX"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              9657876007
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />{" "}
              @paragnaik94@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              123 Bradman Drive, Airport Road, Adelaide,Australia
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique sunt nihil cupiditate unde excepturi hic repellat,
              doloremque, sit ut provident repellendus illum reiciendis vel
              facere laudantium, iure aperiam nisi quasi.
            </b>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
            obcaecati accusantium, officiis officia temporibus quae sit harum?
            Delectus expedita earum fugit maiores voluptas excepturi nulla
            doloremque, illo quidem, quas facilis.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              id=""
              cols="30"
              rows="5"
              placeholder="Message"
              name="message"
            />
            <div className="btn-container">
              <button>Submit</button>
            </div>

            <div className="c-message">
              {done && "Thank we will contact you"}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
