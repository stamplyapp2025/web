import React from "react";
import styles from "../styles/privacy.module.css";

const PrivacyPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Privacy Policy</h1>
      <p className={styles.updated}>Last updated: November 2025</p>

      <section className={styles.section}>
        <h2>1. Introduction</h2>
        <p>
          At <strong>WinStamp</strong>, we value your privacy and are committed
          to protecting your personal information. This Privacy Policy explains
          how we collect, use, and safeguard your data when you use our website
          and services.
        </p>
      </section>

      <section className={styles.section}>
        <h2>2. Information We Collect</h2>
        <p>
          We may collect information you provide directly, such as your name,
          email address, and payment details when subscribing to our services.
          Additionally, we automatically gather data like IP addresses, browser
          type, and usage patterns to improve your experience.
        </p>
      </section>

      <section className={styles.section}>
        <h2>3. How We Use Your Information</h2>
        <ul>
          <li>To provide, personalize, and improve our services.</li>
          <li>To process payments and manage subscriptions.</li>
          <li>To communicate updates, offers, and important notices.</li>
          <li>To ensure platform security and prevent fraudulent activity.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>4. Data Security</h2>
        <p>
          We implement strong security measures, including encryption and access
          controls, to safeguard your personal information. However, no online
          system is completely secure, and we cannot guarantee absolute
          protection.
        </p>
      </section>

      <section className={styles.section}>
        <h2>5. Your Rights</h2>
        <p>
          You may request access, correction, or deletion of your personal data
          at any time. To exercise these rights, please contact us using the
          information below.
        </p>
      </section>

      <section className={styles.section}>
        <h2>6. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy or our data
          practices, contact us at:  
          <strong> support@winstamp.com</strong>
        </p>
      </section>
    </div>
  );
};

export default PrivacyPage;
