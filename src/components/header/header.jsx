import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import { ReactComponent as Logo} from '../../assets/crown.svg'
import { auth } from "../../firebase/firebase";
import { signOut } from "firebase/auth";
import { connect } from "react-redux";
import { setCurrentUser } from "../../redux/user/user.actions";



class Header extends Component {

  signOutGoogle = () => {
    this.props.setCurrentUser(null);
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

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);