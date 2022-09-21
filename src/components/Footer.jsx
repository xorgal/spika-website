import React from "react";
import styles from "../style";
import { Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col w-full `}></div>
      <Typography className={`${styles.paragraph}`} sx={{ fontSize: "18px", fontFamily: "poppins" }}>
        © 2022{" "}
        <Link
          className={`${styles.paragraph}`}
          href="mailto:hello@spika.app"
          underline="none"
          target="_blank"
          sx={{ color: "white" }}
        >
          Spika
        </Link>
        . All rights reserved.
      </Typography>
    </section>
  );
};
export default Footer;
