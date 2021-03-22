import React from "react";
import closeSvg from "../../assets/svg/close.svg";
import "./modal.scss";

const Modal = ({ children, history }) => {
  const onCancel = () => {
    history.push("/");
  };

  return (
    <div className="modal">
      <div className="modal__close">
        <button className="modal__close-btn" onClick={onCancel}>
          <img src={closeSvg} alt="" />
        </button>
      </div>
      <div className="modal__content">{children}</div>
    </div>
  );
};

export default Modal;
