import React from "react";
import styles from "../style";
import { logo } from "../assets";
import { socialMedia } from "../constants";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div>{/* <img src={logo} alt="spika" className="w-[266px] h-[72px] object-contain" /> */}</div>
      </div>
    </section>
  );
};

export default Footer;
