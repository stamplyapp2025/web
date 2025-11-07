import React, { useState } from "react";
import styles from "../styles/support.module.css";
import http from "../http/http";
import errorMessage from "../http/httpMessage"

const SupportPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try{
      const res = await http.post(`/v1/support`, form);
      if(res.data.success){
        alert(res.data.message);
      }
    }
    catch(err){
      const msg = errorMessage(err);
      alert(msg);
    }
    finally{
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className={styles.container}>
      <section className={styles.intro}>
        <h1>We’re Here to Help</h1>
        <p>
          Need help with your account, billing, or features?  
          Our support team is available 24/7 to assist you.
        </p>
      </section>

      <section className={styles.formSection}>
        <h2>Contact Support</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className={styles.submitButton}>
            Submit Ticket
          </button>
        </form>
      </section>

      <section className={styles.faq}>
        <h2>Frequently Asked Questions</h2>
        <div className={styles.faqItem}>
          <h3>How do I start my 7-day free trial?</h3>
          <p>
            Simply choose any plan on our Pricing page and click “Start Free Trial.”
            No charges will be made until your trial period ends.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>Can I change or cancel my plan?</h3>
          <p>
            Yes. You can upgrade, downgrade, or cancel your subscription anytime
            from your account settings.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>How can I contact support directly?</h3>
          <p>
            You can reach us at <strong>stamplyapp2025@gmail.com</strong> or by submitting
            the form above. We typically respond within 24 hours.
          </p>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;
