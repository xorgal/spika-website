import React from "react";
import { wallet } from "../assets";
import styles from "../style";
import { Button, Box, Link, Typography } from "@mui/material";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            Welcome to
            <br /> Spika web wallet
          </h1>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Manage digital assets and access decentralized applications on Aptos blockchain
        </p>
        <Button
          component={Link}
          href="https://chrome.google.com/webstore/detail/spika/fadkojdgchhfkdkklllhcphknohbmjmb"
          variant="contained"
          target="_blank"
          sx={{
            width: "250px",
            height: "50px",
            mt: "75px",
            mb: "20px",
            alignSelf: "center",
            textTransform: "none",
            background: "linear-gradient(126.53deg, #3FE1FF -25.78%, #1700FF 74.22%);",
            borderRadius: "12px",
          }}
        >
          <Typography sx={{ fontFamily: "poppins", fontSize: "18px" }}>Download</Typography>
        </Button>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-[-0px] my-10 relative`}>
        {/* <Paper sx={{ position: "relative", zIndex: 5, borderRadius: "14px" }}> */}
        <Box
          component="img"
          src={wallet}
          alt="wallet"
          sx={{
            position: "relative",
            borderRadius: "14px",
            width: "340px",
            height: "525px",
            borderRadius: "12px",
            zIndex: 5,
          }}
        ></Box>
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient"></div>
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"></div>
      </div>
    </section>
  );
};

export default Hero;
