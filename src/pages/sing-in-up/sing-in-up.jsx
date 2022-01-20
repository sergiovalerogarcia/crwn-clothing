import React from "react";
import SignIn from "../../components/sign-in/sign-in";
import "./sing-in-up.scss";

const SingInUp = ({setUser}) => (
  <div className='sing-in-up'>
    <SignIn setUser={setUser}/>
  </div>
)

export default SingInUp;