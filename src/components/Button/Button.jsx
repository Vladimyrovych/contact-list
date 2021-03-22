import React from "react";
import "./button.scss";

const Button = ({ name, btnType, tel, icon, ...props }) => {
  const { className, ...otherProps } = props;
  const btnContent = icon ? (
    <img className="btn-ico" src={icon} alt="" />
  ) : (
    name
  );

  switch (btnType) {
    case "a":
      return (
        <a href={`tel:${tel}`}>
          <button className={`btn btn-call ${props.className}`} {...otherProps}>
            {btnContent}
          </button>
        </a>
      );
    case "cancel":
      return (
        <button className={`btn btn-cancel ${props.className}`} {...otherProps}>
          {btnContent}
        </button>
      );
    case "primary":
      return (
        <button
          className={`btn btn-primary ${props.className}`}
          {...otherProps}
        >
          {btnContent}
        </button>
      );
    case "secondary":
      return (
        <button
          className={`btn btn-secondary ${props.className}`}
          {...otherProps}
        >
          {btnContent}
        </button>
      );
    default:
      return (
        <button
          className={`btn btn-primary ${props.className}`}
          {...otherProps}
        >
          {btnContent}
        </button>
      );
  }
};

export default Button;
