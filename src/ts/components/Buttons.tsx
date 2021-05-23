import React from "react";

export const SocialButton = (props: { mediaType: string; width: string }) => {
  return (
    <button
      className={"continue-with-button " + props.mediaType}
      style={{ width: props.width }}
    >
      <img src={props.mediaType === "google" ? require('../../assets/icon-google.svg') : require('../../assets/icon-facebook.svg')} alt="Button logo" />
      <label>
        Continue with{" "}
        {props.mediaType.charAt(0).toUpperCase() + props.mediaType.substring(1)}
      </label>
    </button>
  );
};

SocialButton.defaultProps = {
  width: "350px",
};

export const Button = (props: {
  label: string;
  className: string;
  type?: string;
  width?: string;
  onClick?: any;
  disabled?: any;
}) => {
  return (
    <button
      className={`
        ${props.className}
        ${props.disabled ? "disabled" : ""}
      `}
      style={{ width: props.width }}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <label>{props.label}</label>
    </button>
  );
};