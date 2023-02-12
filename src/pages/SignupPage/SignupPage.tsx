import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { KeyboardEvent, MouseEvent, useRef } from "react";
import { auth } from "../../firebase";
import "./SignupPage.css";

function SignupPage(): React.ReactElement {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const signIn = (
    e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>,
  ): void => {
    e.preventDefault();

    /**
     * TODO
     * Find a way to null check before invoking a function.
     */
    signInWithEmailAndPassword(
      auth,
      emailRef.current ? emailRef.current.value : "",
      passwordRef.current ? passwordRef.current.value : "",
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const register = (
    e: MouseEvent<HTMLSpanElement> | KeyboardEvent<HTMLSpanElement>,
  ): void => {
    e.preventDefault();

    /**
     * TODO
     * Find a way to null check before invoking a function.
     */
    createUserWithEmailAndPassword(
      auth,
      emailRef.current ? emailRef.current.value : "",
      passwordRef.current ? passwordRef.current.value : "",
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="signupPage">
      <form>
        <h1>Sign In</h1>
        <input type="email" ref={emailRef} placeholder="Email" />
        <input type="password" ref={passwordRef} placeholder="Password" />
        <button type="submit" onClick={signIn} onKeyDown={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signupPage__gray">New to Netflix ?</span>
          <button
            className="signupPage__link"
            type="button"
            onClick={register}
            onKeyDown={register}
          >
            Sign Up now.
          </button>
        </h4>
      </form>
    </div>
  );
}

export default SignupPage;
