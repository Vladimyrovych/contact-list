import React from "react";
import { withRouter } from "react-router-dom";
import { setUserName } from "../../actions";
import { connect } from "react-redux";
import "./header.scss";

const Header = ({ userName, history, setUserName, ...props }) => {
  const logout = () => {
    setUserName("");
    sessionStorage.removeItem("userName");
    history.push("/login");
  };

  return (
    <header className={`header ${props.className}`}>
      <h2 className="header__hello">Hello, {userName}</h2>
      <div className="header__logout">
        <button className="header__logout-btn" onClick={logout}>
          Logout
        </button>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    userName: state.userName,
  };
};

const mapDispatchToProps = {
  setUserName,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
