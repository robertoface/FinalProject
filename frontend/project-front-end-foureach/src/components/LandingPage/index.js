import LoginButton from "../LoginButton";
import React from "react";
import logo from "../../Images/landingpageimage.svg";
import css from "./LandingPage.module.css";

function LandingPage() {
  return (
    <>
      <div className={css.LandingPage}>
        <div className={css.paper}>
          
          <h1 className={css.title}>mUe</h1>
          <p>together we do more</p>
          <div className={css.imageContainer}>
            <div>
              <img className={css.LandingPage_logo} src={logo} alt="logo" />
            </div>
            <div className={css.overlay}>
              <LoginButton />
            </div>
          </div>
          </div>
      </div>
    </>
  );
}

export default LandingPage;
