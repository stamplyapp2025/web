import React from "react";
import styles from "../styles/pricing.module.css";

const PricingPage = () => {
  const plans = [
    {
      name: "Pay as you go",
      priceLabel: "1 DKK per customer",
      description: "Only pay for customers who collect at least one stamp.",
      features: [
        "No monthly fee",
        "Unlimited stamp cards",
        "Email support",
        "Cancel anytime",
      ],
      highlight: true,
    },
    {
      name: "Starter Cap",
      priceLabel: "Max 99 DKK/month",
      description:
        "Perfect for small shops. Pay 1 DKK per active customer, but never more than 99 DKK.",
      features: [
        "Everything in Pay as you go",
        "Cost protection (monthly cap)",
        "Basic analytics",
      ],
      highlight: false,
    },
    {
      name: "Business Cap",
      priceLabel: "Max 199 DKK/month",
      description:
        "For busy cafés or salons. Same 1 DKK per customer with a higher usage cap.",
      features: [
        "Everything in Starter Cap",
        "Priority support",
        "Advanced analytics",
      ],
      highlight: false,
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Simple, Fair Pricing</h1>
      <p className={styles.subtitle}>
        You pay <strong>1 DKK per customer</strong> who collects a stamp. That's it.
      </p>

      <div className={styles.plans}>
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`${styles.card} ${
              plan.highlight ? styles.highlightCard : ""
            }`}
          >
            <h2 className={styles.planName}>{plan.name}</h2>

            <p className={styles.priceLabel}>{plan.priceLabel}</p>
            <p className={styles.description}>{plan.description}</p>

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
              Start Free Trial
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
