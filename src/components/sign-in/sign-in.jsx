import { getRedirectResult } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "../../firebase/firebase";
import CustomButton from "../custom-button/custom-button";
import FormInput from "../form-input/form-input";
import "./sign-in.scss";

const SignIn = ({ setUser }) => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  
  useEffect(() => {
    getRedirectResult(auth).then((result) => {
      setUser(result.user);
      navigate('/')
    }).catch((error) => {
    });
  });

  const handleSubmit = event => {
    event.preventDefault();
    setState({email: '', password: ''})
  }

  const handleChange = event => {
    const { value, name } = event.target;

    setState({...state, [name]: value})
  }

  return <div className="sign-in">
    <h2>I already have an account</h2>
    <span>Sign in with your email and password</span>
    <form onSubmit={handleSubmit}>
      <FormInput
        label="Email"
        name="email"
        type="email"
        value={state.email}
        onChange={handleChange}
        autoComplete="on"
        required
      />
      <FormInput
        label="Password"
        name="password"
        type="password"
        value={state.password}
        onChange={handleChange}
        autoComplete="on"
        required
      />
      <div className="buttons">
        <CustomButton type="submit">Sing in</CustomButton>
        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sing in with google</CustomButton>
      </div>
    </form>
  </div>
}


export default SignIn;