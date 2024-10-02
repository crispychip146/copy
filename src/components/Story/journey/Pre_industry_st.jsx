// NextPage.jsx
import React from "react";
import { motion } from "framer-motion";
import Image from "../resources/preindustrial/farming_back.jpg";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { ButtonGroup } from "@mui/material";


const PreIndustry = () => {
  return (
    <motion.div
      className="page4"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 0.5 }}
      exit={{ x: window.innerWidth }}
    >
      <img
        src={Image}
        style={{
          position: "absolute",
          top: "0vh",
          width: "100%",
          maxHeight: "100vh",
          zIndex: "-100",
        }}
        alt="Background"
      />
      <div
        style={{
          position: "absolute",
          top: "0vh",
          width: "100%",
          maxHeight: "100vh",
        }}
      >
        <motion.div
          initial={{ x: "150vw" }}
          animate={{ x: "50vw" }}
          transition={{ duration: 1.2, ease: "circOut" }}
          style={{
            position: "relative",
            top: "5vh",
            left: "0vw",
            width: "45vw",
            height: "50vh",
          }}
        >
          <h1
            style={{
              position: "relative",
              left: "3vh",
              color: "#E2F745",
              fontSize: "4.2vw",
              maxWidth: "60%",
              textAlign: "left",
              top: "0vh"
              , fontWeight: '700',fontFamily:'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif', lineHeight:'1.4'
            }}
          >
            Pre-industrial Era
          </h1>
          <h2
            style={{
              position: "relative",
              color: "#F8F9FC",
              fontSize: "2.5vw",
              textAlign: "justify",
              border: "0",
              margin: '0'
              , fontWeight: '500',fontFamily:'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif', lineHeight:'1.1'
            }}
          >
            The Untouched Atmosphere - Exploring Climate Patterns of the Pre-Industrial Earth
          </h2>
        </motion.div>
        <motion.div
          initial={{ x: "-105vw" }}
          animate={{ x: "5vw" }}
          transition={{ duration: 1.2, ease: "circOut", delay: 1.5 }}
          style={{ position: "relative", top: "0vh", width: "45vw" }}
        >
          <h1
            style={{
              position: "relative",
              color: "#fff",
              fontSize: "1.7vw",
              textAlign: "justify",
            }}
          >
            The pre-industrial era was characterized by a delicate balance in 
            Earth's climate, shaped by natural processes and cycles. This period 
            saw diverse ecosystems thriving without significant human interference,
            providing insight into climate stability. Understanding these patterns 
            is crucial for addressing contemporary climate challenges and restoring 
            ecological harmony in our world today.
          </h1>
          <div
            style={{
              position: "relative",
              marginLeft: "auto",
              marginRight: "0",
              bottom: "-5vh",
            }}
          >
            <ButtonGroup
              variant="contained"
              style={{
                display: "flex",
                position: "absolute",
                top: "-10vh",
                left: "77vw",
              }}
            >
              <Link to="/Pre_human_st">
                <Button>Previous</Button>
              </Link>
              <Link to="/page5">
                <Button>Next</Button>
              </Link>
            </ButtonGroup>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PreIndustry;
