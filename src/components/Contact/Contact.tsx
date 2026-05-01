import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import ContactBackground from "./components/ContactBackground";
import ContactForm from "./components/ContactForm";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError(false);

    const form = event.currentTarget;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      .then((result) => {
        console.log("メール送信成功:", result.text);
        setSuccess(true);
        form.reset();
      })
      .catch((error) => {
        console.error("メール送信エラー:", error.text);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="body-container relative flex items-center justify-center min-h-screen">
      <ContactBackground />
      <ContactForm
        error={error}
        loading={loading}
        onSubmit={handleSubmit}
        success={success}
      />
    </div>
  );
};

export default Contact;
