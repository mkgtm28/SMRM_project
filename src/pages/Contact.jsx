import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";
import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Contact form:", formData);

    alert("Thank you! Your message has been received.");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">

      {/* ========================= HEADER ========================= */}
      <section className="contact-header">
        <span className="section-label">
          <span></span>
          Contact Us
        </span>

        <h1>
          Let's Start a
          <br />
          <span>Conversation.</span>
        </h1>

        <p>
          Have a project, idea, or question? We'd love to hear from you.
          Send us a message and let's create something great together.
        </p>
      </section>

      {/* ========================= CONTACT CONTENT ========================= */}
      <section className="contact-content">

        {/* ========================= LEFT ========================= */}
        <div className="contact-info">

          <h2>Get in touch</h2>

          <p className="contact-description">
            We're always happy to discuss new projects, creative ideas,
            or opportunities to be part of your vision.
          </p>

          {/* EMAIL */}
          <div className="contact-item">
            <div className="contact-icon">
              <Mail size={20} />
            </div>

            <div className="contact-item-content">
              <span>Email</span>
              <a href="mailto:hello@smrm.com">
                hello@smrm.com
              </a>
            </div>
          </div>

          {/* PHONE */}
          <div className="contact-item">
            <div className="contact-icon">
              <Phone size={20} />
            </div>

            <div className="contact-item-content">
              <span>Phone</span>
              <a href="tel:+910000000000">
                +91 00000 00000
              </a>
            </div>
          </div>

          {/* LOCATION */}
          <div className="contact-item">
            <div className="contact-icon">
              <MapPin size={20} />
            </div>

            <div className="contact-item-content">
              <span>Location</span>
              <p>India</p>
            </div>
          </div>

        </div>

        {/* ========================= RIGHT - FORM ========================= */}
        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <h2>Send a message</h2>

          <div className="form-row">

            {/* NAME */}
            <div className="form-group">
              <label htmlFor="name">
                Your Name
              </label>

              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            {/* EMAIL */}
            <div className="form-group">
              <label htmlFor="email">
                Email Address
              </label>

              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

          </div>

          {/* MESSAGE */}
          <div className="form-group">
            <label htmlFor="message">
              Your Message
            </label>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              required
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="send-btn"
          >
            <Send size={18} />
            Send Message
          </button>

        </form>

      </section>
    </div>
  );
}

export default Contact;