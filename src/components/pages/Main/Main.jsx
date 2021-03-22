import React from "react";
import Header from "../../Header";
import Button from "../../Button";
import List from "../../List";
import { setUserName } from "../../../actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./main.scss";

const Main = ({ history }) => {
  const openNewContactForm = () => {
    history.push("/new");
  };

  return (
    <div className="main">
      <Header className="main__header" />
      <main className="main__main">
        <div className="main__actions actions">
          <Button
            className="actions__btn"
            btnType="secondary"
            name="New Contact"
            onClick={openNewContactForm}
          />
          <Button
            className="actions__btn"
            btnType="secondary"
            name="Download CSV"
          />
        </div>
        <div className="main__list">
          <List />
        </div>
      </main>
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Main));
