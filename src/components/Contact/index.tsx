import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./styles.css";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const counterRef = useRef<HTMLParagraphElement>(null);
  const counter = counterRef.current;

  message.length > 490
    ? counter?.classList.add("danger")
    : counter?.classList.remove("danger");

  function validateField(
    event: FormEvent<HTMLInputElement> | FormEvent<HTMLTextAreaElement>,
    message: string
  ) {
    (event.target as HTMLInputElement).setCustomValidity(message);
  }

  function sendEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    const emailJSPromise = emailjs.send(
      "service_ocr2jlg",
      "template_ulo127h",
      templateParams,
      "2Z-qehelWyfUHH4hj"
    );

    const sendEmailPromise = new Promise((resolve) =>
      setTimeout(() => {
        resolve(
          emailJSPromise.then(() => {
            setName("");
            setEmail("");
            setMessage("");
          })
        );
      }, 3000)
    );

    toast.promise(sendEmailPromise, {
      pending: "Carregando mensagem",
      success: "Mensagem enviada! 👌",
      error: "Algo deu errado! 🤯",
    });
  }

  return (
    <div data-aos="fade-in" className="contact" id="contact">
      <div className="contact-container">
        <h1 className="contact-title">Tem interesse em trabalhar comigo?</h1>
        <p className="contact-paragraph">
          Me mande uma mensagem através do formulário abaixo! Mas se preferir,
          eu também estou presente no LinkedIn e no Whatsapp listados no rodapé.
        </p>
        <form onSubmit={sendEmail}>
          <label htmlFor="name">
            <input
              type="text"
              id="name"
              placeholder="Nome"
              onInvalid={(e) => validateField(e, "Insira o seu nome")}
              onInput={(e) => validateField(e, "")}
              title="Insira o seu nome"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </label>
          <label htmlFor="email">
            <input
              type="email"
              id="email"
              placeholder="Email"
              onInvalid={(e) => validateField(e, "Insira um e-mail válido")}
              onInput={(e) => validateField(e, "")}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              title="Insira um e-mail válido"
              required
            />
          </label>
          <label htmlFor="message">
            <textarea
              id="message"
              cols={30}
              rows={10}
              maxLength={500}
              placeholder="Mensagem"
              onInvalid={(e) => validateField(e, "Escreva a sua mensagem")}
              onInput={(e) => validateField(e, "")}
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              title="Escreva a sua mensagem"
              required
            />
            <p className="chars-counter" ref={counterRef}>
              {message.length}/500
            </p>
          </label>
          <button className="email-button" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
