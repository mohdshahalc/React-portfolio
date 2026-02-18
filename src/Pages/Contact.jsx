import { useState } from "react";
import ScrollReveal from '../Components/ScrollReveal';

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // success or error message
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("❌ " + data.message);
      }

    } catch (error) {
      setStatus("❌ Server error. Please try again.");
    }

    setLoading(false);
  };



  return (
    <div className="page" style={{ textAlign: 'center' }}>
      <h1 className="animate-load-up">Get In Touch</h1>
      <ScrollReveal width="100%">
        <p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: 'var(--text-light)' }}>
          Have a project in mind or just want to say hi? Feel free to send me a message!
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.2} width="100%">
        <form onSubmit={handleSubmit} className="contact-form" style={{ textAlign: 'left' }}>
          <input
            type="text"
            name="name"
            value={form.name}
            placeholder="Your Name"
            onChange={handleChange}
            required
            autoComplete="off"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            placeholder="Your Email"
            onChange={handleChange}
            required
            autoComplete="off"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <div className={`status-message ${status.includes("successfully") ? "status-success" : "status-error"}`}>
              {status}
            </div>
          )}

          <div style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
            <p style={{ marginBottom: '0.5rem', color: '#a3a3a3', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Or email me directly</p>
            <a href="mailto:shahal.c077@gmail.com" style={{
              color: '#ffffff',
              fontSize: '1.1rem',
              fontWeight: '500',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              opacity: 0.9
            }}
              onMouseOver={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.textShadow = '0 0 10px rgba(255,255,255,0.5)'; }}
              onMouseOut={(e) => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.textShadow = 'none'; }}
            >
              shahal.c077@gmail.com
            </a>
          </div>
        </form>
      </ScrollReveal>


    </div>
  );
};

export default Contact;
