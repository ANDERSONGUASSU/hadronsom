// frontend/src/components/ContactForm.js

import React from "react";

const ContactForm = () => (
  <form action="forms/contact.php" method="post" className="space-y-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input
        type="text"
        name="name"
        className="form-control p-3 border rounded"
        placeholder="Seu nome"
        required
        autoComplete="name"
      />
      <input
        type="email"
        className="form-control p-3 border rounded"
        name="email"
        placeholder="Seu E-mail"
        required
        autoComplete="email"
      />
    </div>
    <input
      type="text"
      className="form-control p-3 border rounded col-span-2 w-full"
      name="subject"
      placeholder="Assunto"
      required
    />
    <textarea
      className="form-control p-3 border rounded w-full"
      name="message"
      rows="6"
      placeholder="Mensagem"
      required
    ></textarea>
    <div className="text-center">
      <div className="loading">Loading</div>
      <div className="error-message"></div>
      <div className="sent-message">Sua mensagem foi enviada. Obrigado!</div>
      <button type="submit" className="btn btn-primary text-base-100 py-2 px-4 rounded">
        Enviar Mensagem
      </button>
    </div>
  </form>
);

export default ContactForm;
