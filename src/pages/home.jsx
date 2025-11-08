import React from "react";
import PromoCard from "../components/promoCard";
import PricingPage from "./pricing";
import styles from"../styles/home.module.css"; 
import SupportPage from "./support";
import HeaderText from "../components/headerText";
import { theme } from "../theme";

export default function HomePage() {
  return (
    <div className={styles.homeContainer}>
      <HeaderText/>
      <PromoCard/>
      <PricingPage/>
      <SupportPage/>
    </div>
  );
}
