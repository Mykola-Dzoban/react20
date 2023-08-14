import lock from "../img/padlock.png";
import "../styles/Sign.css";
import {
  LockIcon,
  LockIconWrapper,
  SingInput,
  SignCheckbox,
  SignCheckboxLabel,
  Copyright,
} from "../styles/SignStyle";
import { SubmitButton, HelpLinks } from "../styles/Buttons";

import { useState, useEffect } from "react";

function SingIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberData, setRememberData] = useState(false);

  const emailValidation =
    /^[a-zA-Z0-9._%+-]{3,}@[a-zA-Z0-9-]{2,}\.[a-zA-Z]{2,}$/.test(email);
  const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);

  const HandleSignIn = (e) => {
    e.preventDefault();

    if (rememberData) {
      localStorage.setItem("remEmail", email);
      localStorage.setItem("remPassword", password);
    }

    const userDataFromStorage = localStorage.getItem("userData");
    if (userDataFromStorage) {
      const userData = JSON.parse(userDataFromStorage);
      if (userData.email && userData.password) {
        if (userData.email === email && userData.password === password) {
          alert(`Hello, ${userData.firstName} ${userData.lastName}!`);
        } else {
          alert("Incorrect data!");
        }
      } else {
        alert("Let`s register!");
      }
    }
  };

  const HandleRememberCheckbox = (e) => {
    const currentValue = e.target.checked;
    setRememberData(currentValue);
    localStorage.setItem("rememberMe", currentValue.toString());

    if (!currentValue) {
      localStorage.removeItem("remEmail");
      localStorage.removeItem("remPassword");
    }
  };

  useEffect(() => {
    const storedRememberMe = localStorage.getItem("rememberMe");
    if (storedRememberMe) {
      setRememberData(storedRememberMe === "true");
    }

    if (rememberData) {
      const storedEmail = localStorage.getItem("remEmail");
      if (storedEmail) {
        setEmail(storedEmail);
      }

      const storedPassword = localStorage.getItem("remPassword");
      if (storedPassword) {
        setPassword(storedPassword);
      }
    }
  }, [rememberData]);

  return (
    <div className="singIn-wrapper">
      <LockIconWrapper>
        <LockIcon src={lock} alt="Lock" />
      </LockIconWrapper>
      <h2>Sign in</h2>
      <form action="#" className="signIn-form" onSubmit={HandleSignIn}>
        <SingInput
          type="email"
          name="email"
          value={email}
          placeholder="Email Address *"
          onChange={(e) => setEmail(e.target.value)}
          validation={
            emailValidation ? "valid" : email.length === 0 ? "" : "invalid"
          }
          required
        />
        <SingInput
          type="password"
          name="password"
          value={password}
          placeholder="Password *"
          onChange={(e) => setPassword(e.target.value)}
          validation={
            passwordValidation
              ? "valid"
              : password.length === 0
              ? ""
              : "invalid"
          }
          required
        />
        <div className="checkbox-wrapper">
          <SignCheckbox
            type="checkbox"
            id="rememberData"
            checked={rememberData}
            onChange={HandleRememberCheckbox}
          />
          <SignCheckboxLabel>Remember me</SignCheckboxLabel>
        </div>
        <SubmitButton>Submit</SubmitButton>
      </form>
      <div className="additional-links">
        <HelpLinks to="/">Forgot password?</HelpLinks>
        <HelpLinks to="/signup">Don`t have an account? Sign up</HelpLinks>
      </div>
      <Copyright>Copyright © Webwebwebsite 2023</Copyright>
    </div>
  );
}

export default SingIn;
