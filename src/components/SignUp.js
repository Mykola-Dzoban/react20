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

import { useState } from "react";

function SingUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const emailValidation =
    /^[a-zA-Z0-9._%+-]{3,}@[a-zA-Z0-9-]{2,}\.[a-zA-Z]{2,}$/.test(email);
  const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
  const firstNameValidation = /^[a-zA-Zа-яА-ЯіїєґІЇЄҐ']{3,}$/.test(firstName);
  const lastNameValidation = /^[a-zA-Zа-яА-ЯіїєґІЇЄҐ']{3,}$/.test(lastName);

  const HandleSignUp = (e) => {
    e.preventDefault();

    if (email && password && firstName && lastName) {
      const userData = {
        firstName,
        lastName,
        email,
        password,
      };
      const userDataSingIn = {
        email,
        password,
      };

      localStorage.setItem("userData", JSON.stringify(userData));
      localStorage.setItem("userDataSingIn", JSON.stringify(userDataSingIn));
      alert("Successfully signed up!");
    }
  };

  return (
    <div className="singUp-wrapper">
      <LockIconWrapper>
        <LockIcon src={lock} alt="Lock" />
      </LockIconWrapper>
      <h2>Sign up</h2>
      <form action="#" className="signUp-form" onSubmit={HandleSignUp}>
        <div className="userFullname">
          <SingInput
            type="text"
            name="name"
            value={firstName}
            placeholder="First Name *"
            onChange={(e) => setFirstName(e.target.value)}
            validation={
              firstNameValidation
                ? "valid"
                : firstName.length === 0
                ? ""
                : "invalid"
            }
            required
          />
          <SingInput
            type="text"
            name="surname"
            value={lastName}
            placeholder="Last Name *"
            onChange={(e) => setLastName(e.target.value)}
            validation={
              lastNameValidation
                ? "valid"
                : lastName.length === 0
                ? ""
                : "invalid"
            }
            required
          />
        </div>
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
          <SignCheckbox type="checkbox" id="rememberData" name="" value="" />
          <SignCheckboxLabel>
            I want to receive inspiration, marketing, promotions and updates via
            email
          </SignCheckboxLabel>
        </div>
        <SubmitButton>Submit</SubmitButton>
      </form>
      <div className="additional-links">
        <HelpLinks to="/">Need help?</HelpLinks>
        <HelpLinks to="/signup">Already have an account? Sign in</HelpLinks>
      </div>
      <Copyright>Copyright © Webwebwebsite 2023</Copyright>
    </div>
  );
}

export default SingUp;
