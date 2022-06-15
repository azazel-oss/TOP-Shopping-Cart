import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <main>
      <section className="contact-card">
        <a href="https://www.github.com/azazel-oss" className="contact-field">
          <FontAwesomeIcon icon={faGithub} className="contact-brand-icon" />
          <div className="contact-brandname">Github</div>
        </a>
        <a href="https://www.twitter.com" className="contact-field">
          <FontAwesomeIcon icon={faTwitter} className="contact-brand-icon" />
          <div className="contact-brandname">Twitter</div>
        </a>
        <a href="https://www.facebook.com" className="contact-field">
          <FontAwesomeIcon icon={faFacebook} className="contact-brand-icon" />
          <div className="contact-brandname">Facebook</div>
        </a>
        <a href="https://www.instagram.com" className="contact-field">
          <FontAwesomeIcon icon={faInstagram} className="contact-brand-icon" />
          <div className="contact-brandname">Instagram</div>
        </a>
      </section>
    </main>
  );
};

export default Contact;
