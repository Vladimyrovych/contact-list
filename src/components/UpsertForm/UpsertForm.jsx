import React, { useEffect } from "react";
import Button from "../Button";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setName, setPhone, addContact, updateContact } from "../../actions";
import "./upsertForm.scss";

const UpsertForm = ({
  title,
  setName,
  setPhone,
  name,
  phone,
  addContact,
  updateContact,
  history,
  match,
  contacts,
}) => {
  useEffect(() => {
    return () => {
      setName("");
      setPhone("");

      history.push("/");
    };
  }, [history, setName, setPhone]);

  useEffect(() => {
    if (match.params.id) {
      contacts.forEach((contact) => {
        if (contact.id == match.params.id) {
          setName(contact.name);
          setPhone(contact.phone);
        }
      });
    }
  }, []);

  const onSubmit = (event) => {
    if (match.params.id) {
      const contact = {
        id: match.params.id,
        name: name,
        phone: phone,
      };

      updateContact(contact);
    } else {
      const contact = {
        name: name,
        phone: phone,
      };

      addContact(contact);
    }

    history.push("/");

    event.preventDefault();
  };

  const onCancel = () => {
    history.push("/");
  };

  return (
    <form className="upsert">
      <div className="upsert__title upsert__row">{title}</div>
      <input
        className="upsert__input upsert__row"
        placeholder="Contact Name"
        onChange={(event) => setName(event.target.value)}
        defaultValue={name}
      />
      <input
        className="upsert__input upsert__row"
        placeholder="Contact Phone"
        onChange={(event) => setPhone(event.target.value)}
        defaultValue={phone}
      />
      <Button
        className="upsert__row"
        btnType="primary"
        name="Save"
        size="m"
        onClick={onSubmit}
      ></Button>
      <Button
        className="upsert__row"
        btnType="cancel"
        name="Close"
        size="m"
        type="button"
        onClick={onCancel}
      ></Button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.name,
    phone: state.phone,
    contacts: state.contacts,
  };
};

const mapDispatchToProps = {
  setName,
  setPhone,
  addContact,
  updateContact,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UpsertForm));
