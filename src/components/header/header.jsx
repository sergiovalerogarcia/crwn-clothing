import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import { ReactComponent as Logo} from '../../assets/crown.svg'
import { auth } from "../../firebase/firebase";
import { getRedirectResult, signOut } from "firebase/auth";



class Header extends Component {

  signOutGoogle = () => {
    this.props.setUser(null);
    signOut(auth);
  }

  render() {
    return <div className="header">
      <Link className="logo-container" to="">
        <Logo className="logo" />
      </Link>
      <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      { 
        this.props.currentUser
        ? (
          <div className="option" onClick={() => this.signOutGoogle()}>
            SIG OUT
          </div>
        )
        : ( 
          <Link className="option" to="/signin">
            SIG IN
          </Link>
        )
      }
      </div>
    </div>
  }
}

export default Header;