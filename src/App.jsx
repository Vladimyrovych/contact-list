import React, { useEffect } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Main from "./components/pages/Main/Main";
import SignIn from "./components/pages/SignIn/SignIn";
import Modal from "./components/Modal";
import UpsertForm from "./components/UpsertForm";

const App = ({ history }) => {
  useEffect(() => {
    if (!sessionStorage.getItem("userName")) {
      history.push("/login");
    }
  }, [history]);

  return (
    <div className="contact-list">
      <Switch>
        <Route path="/login" exact component={SignIn} />
        <Route path="/" exact component={Main} />
        <Route
          path="/:id/edit"
          render={(props) => (
            <Modal {...props}>
              <UpsertForm title="Edit contact" />
            </Modal>
          )}
        />
        <Route
          path="/new"
          exact
          render={(props) => (
            <Modal {...props}>
              <UpsertForm title="New contact" />
            </Modal>
          )}
        />
      </Switch>
    </div>
  );
};

export default withRouter(App);
