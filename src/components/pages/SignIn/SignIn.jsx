import React from "react";
import "./signIn.scss";
import Button from "../../Button";
import { setUserName } from "../../../actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const SignIn = ({ userName, setUserName, history }) => {
  const onSubmit = (event) => {
    if (userName) {
      sessionStorage.setItem("userName", userName);
      history.push("/");
    }

    event.preventDefault();
  };

  return (
    <form className="sign-in" id="sigIn">
      <div className="sign-in__wrapper">
        <span className="sign-in__title">SignIn</span>
        <input
          className="sign-in__input"
          defaultValue={userName}
          type="text"
          onChange={(event) => setUserName(event.target.value)}
        />
        <Button
          name="Submit"
          btnType="primary"
          type="submit"
          onClick={onSubmit}
          className="sign-in__submit"
        />
      </div>
    </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignIn));
