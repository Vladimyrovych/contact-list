import React from "react";
import Button from "../Button";
import phoneSvg from "../../assets/svg/phone.svg";
import pencilSvg from "../../assets/svg/pencil.svg";
import { withRouter } from "react-router-dom";
import "./listItem.scss";

const ListItem = ({ contact, history, ...props }) => {
  const { className } = props;

  const edit = () => {
    history.push(`/${contact.id}/edit`);
  };

  return (
    <li className={`list-item ${className}`}>
      <img className="list-item__photo" src={contact.photoUrl} alt="" />
      <div className="list-item__name">{contact.name}</div>
      <div className="list-item__call">
        <Button btnType="a" icon={phoneSvg} tel={contact.phone} />
      </div>
      <button className="list-item__edit-btn" onClick={edit}>
        <img src={pencilSvg} alt="" />
      </button>
    </li>
  );
};

export default withRouter(ListItem);
