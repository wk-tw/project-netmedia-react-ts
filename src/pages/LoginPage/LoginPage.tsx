import React, { useState } from "react";
import "./LoginPage.css";
import SignupPage from "../SignupPage/SignupPage";

function LoginPage(): React.ReactElement {
  const [signIn, setSignIn] = useState<boolean>(false);

  return (
    <div className="loginPage">
      <div className="loginPage__background">
        <img
          className="loginPage__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button
          className="loginPage__button"
          type="button"
          onClick={() => setSignIn(true)}
        >
          Sign In
        </button>
        <div className="loginPage__gradient" />
      </div>
      <div className="loginPage__body">
        {signIn ? (
          <SignupPage />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel any time.</h2>
            <h3>
              Ready to watch ? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginPage__input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  className="loginPage__getStarted"
                  type="button"
                  onClick={() => setSignIn(true)}
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginPage;
