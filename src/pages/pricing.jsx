import React from "react";
import styles from "../styles/pricing.module.css";

const PricingPage = () => {
  const plans = [
    {
      name: "Basic",
      price: 149,
      features: ["Essential tools", "Email support", "Access to updates"],
      highlight: false,
    },
    {
      name: "Premium",
      price: 189,
      features: [
        "Everything in Basic",
        "Priority support",
        "Advanced analytics",
      ],
      highlight: true, // highlighted (middle plan)
    },
    {
      name: "Pro",
      price: 209,
      features: [
        "Everything in Premium",
        "Team collaboration tools",
        "Unlimited projects",
      ],
      highlight: false,
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Choose Your Plan</h1>
      <p className={styles.subtitle}>All plans include 3 months free trial</p>

      <div className={styles.plans}>
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`${styles.card} ${
              plan.highlight ? styles.highlightCard : ""
            }`}
          >
            <h2 className={styles.planName}>{plan.name}</h2>
            <p className={styles.price}>
              <span className={styles.currency}>DKK</span>
              {plan.price}
              <span className={styles.period}>/month</span>
            </p>
            <ul className={styles.features}>
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button
              className={
                plan.highlight ? styles.primaryButton : styles.secondaryButton
              }
            >
              Start 3 months Free Trial
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
