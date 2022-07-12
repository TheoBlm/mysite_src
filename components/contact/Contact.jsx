import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0797m5j",
        "template_60r1s4e",
        form.current,
        "COdswzt9oqPi9aoSb"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h2>Me contacter</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>bloume.theo@live.fr</h5>
            <a
              href="mailto:bloume.theo@live.fr"
              target="_blank"
              rel="noreferrer"
            >
              Envoyer un message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+0123456789</h5>
            <a
              href="https://api.whatsapp.com/send?phone=33698399193"
              target="_blank"
              rel="noreferrer"
            >
              Envoyer un message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Votre Nom Complet"
            required
          />
          <input type="email" name="email" placeholder="Votre Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Votre Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Envoyer votre message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
