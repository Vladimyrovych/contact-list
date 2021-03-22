import React from "react";
import ListItem from "../ListItem";
import { connect } from "react-redux";

import "./list.scss";

const List = ({ contacts }) => {
  let listItems = null;

  if (contacts) {
    listItems = contacts.map((contact) => {
      return (
        <ListItem
          key={contact.id}
          contact={contact}
          className={"list__list-item"}
        />
      );
    });
  }

  return <ul className="list">{listItems}</ul>;
};

const sortContacts = (array) => {
  return array.sort(function (a, b) {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });
};

const mapStateToProps = (state) => {
  return {
    contacts: sortContacts(state.contacts),
  };
};

export default connect(mapStateToProps)(List);
