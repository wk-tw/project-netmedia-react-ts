import React from "react";
import "./LoginPage.css";

function LoginPage(): React.ReactElement {
  return (
    <div className="loginPage">
      <div className="loginPage__background">
        <img
          className="loginPage__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button className="loginPage__button" type="button">
          Sign In
        </button>
        <div className="loginPage__gradient" />
      </div>
      <div className="loginPage__body">
        <h1>Unlimited films, TV programmes and more.</h1>
        <h2>Watch anywhere. Cancel any time.</h2>
      </div>
    </div>
  );
}

export default LoginPage;
