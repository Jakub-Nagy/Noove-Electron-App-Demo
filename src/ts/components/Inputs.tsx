import React from "react";
import { Fragment, useEffect, useState } from "react";
import {
  EyeIcon,
  EyeClosedIcon,
  XIcon,
  CheckIcon,
} from "@primer/octicons-react";

/* -------------------------------------------------------------------------- */
/*                             #pragma Input Skeleton                         */
/* -------------------------------------------------------------------------- */

export const InputSkeleton = (props: {
  topLabel: string;
  bottomLabel?: string;
  className?: string;
  children: any;
}) => {
  return (
    <div className={"input-group " + props.className}>
      <label>{props.topLabel}</label>
      {props.children}
      <label>{props.bottomLabel}</label>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                             #pragma Text Input                             */
/* -------------------------------------------------------------------------- */

export const TextInput = (props: {
  topLabel: string;
  bottomLabel?: string;
  placeholder?: string;
  className?: string;
  value: any;
}) => {
  function handleChange(event: any) {
    props.value(event.target.value);
  }

  return (
    <InputSkeleton
      topLabel={props.topLabel}
      bottomLabel={props.bottomLabel}
      className={props.className}
    >
      <div className="input-text">
        <input
          type="text"
          placeholder={props.placeholder}
          onChange={handleChange}
        />
      </div>
    </InputSkeleton>
  );
};

/* -------------------------------------------------------------------------- */
/*                         #pragma Password Input                             */
/* -------------------------------------------------------------------------- */

export const PasswordInput = (props: {
  topLabel: string;
  bottomLabel?: string;
  placeholder?: string;
  className?: string;
  value: any;
}) => {
  const [hide, setHide] = useState(true);

  function handleChange(event: any) {
    props.value(event.target.value);
  }

  return (
    <InputSkeleton
      topLabel={props.topLabel}
      bottomLabel={props.bottomLabel}
      className={props.className}
    >
      <div className="input-text">
        <input
          type={hide ? "password" : "text"}
          placeholder={props.placeholder}
          onChange={handleChange}
        />
        <span
          onClick={() => {
            hide ? setHide(false) : setHide(true);
          }}
        >
          {hide ? (
            <EyeClosedIcon size={20} className="unhidePass" />
          ) : (
            <EyeIcon size={20} className="unhidePass" />
          )}
        </span>
      </div>
    </InputSkeleton>
  );
};

/* -------------------------------------------------------------------------- */
/*                          #pragma Username Input                            */
/* -------------------------------------------------------------------------- */

export const UsernameInput = (props: {
  topLabel: string;
  bottomLabel?: string;
  placeholder?: string;
  className?: string;
  value: any;
  valid: any;
}) => {
  function handleChange(event: any) {
    props.value(event.target.value);
  }

  return (
    <InputSkeleton
      topLabel={props.topLabel}
      bottomLabel={props.bottomLabel}
      className={props.className}
    >
      <div className="input-username">
        <input type="text" onChange={handleChange} />
        <span className="available">
          <span className="dot"></span>
          Available
        </span>
      </div>
    </InputSkeleton>
  );
};

/* -------------------------------------------------------------------------- */
/*                          #pragma Password Verifier                         */
/* -------------------------------------------------------------------------- */

export const PasswordVerify = (props: {
  topLabel: string;
  bottomLabel?: string;
  placeholder?: string;
  className?: string;
  value: any;
  valid: any;
}) => {
  const [value, setValue] = useState("");

  const lowerOrUpper = new RegExp("(?=.*?[a-z])(?=.*?[A-Z])");
  const containsNumber = new RegExp("(?=.*?[0-9])");
  const containsSymbol = new RegExp("(?=.*?[#?!@$%^&*-])");
  const minChars = new RegExp(".{8,}");

  const check = <CheckIcon size={17} className="check" />;
  const mark = <XIcon size={17} className="x" />;

  useEffect(() => {
    containsNumber.test(value) &&
    containsSymbol.test(value) &&
    lowerOrUpper.test(value) &&
    minChars.test(value)
      ? props.valid(true)
      : props.valid(false);
  });

  return (
    <Fragment>
      <PasswordInput
        topLabel={props.topLabel}
        bottomLabel={props.bottomLabel}
        placeholder={props.placeholder}
        className={props.className}
        value={(value: any) => {
          setValue(value);
          props.value(value);
        }}
      />
      <div className="password-validator">
        <span>
          {containsNumber.test(value) ? check : mark}
          <label>Contains a number</label>
        </span>
        <span>
          {containsSymbol.test(value) ? check : mark}
          <label>Contains a symbol</label>
        </span>
        <span>
          {lowerOrUpper.test(value) ? check : mark}
          <label>Contains at least 1 uppercase and 1 lowercase character</label>
        </span>
        <span>
          {minChars.test(value) ? check : mark}
          <label>At least 8 characters long</label>
        </span>
      </div>
    </Fragment>
  );
};
/* -------------------------------------------------------------------------- */
/*                          #pragma Email Verifier                            */
/* -------------------------------------------------------------------------- */

export const EmailInput = (props: {
  topLabel: string;
  bottomLabel?: string;
  placeholder?: string;
  className?: string;
  valid: any;
  value: any;
}) => {
  const [value, setValue] = useState("");

  const check = <CheckIcon size={20} className="check" />;
  const mark = <XIcon size={20} className="x" />;

  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  useEffect(() => {
    emailRegex.test(value) ? props.valid(true) : props.valid(false);
  });

  return (
    <InputSkeleton
      topLabel={props.topLabel}
      bottomLabel={props.bottomLabel}
      className={props.className}
    >
      <span className="input-text">
        <input
          type="text"
          placeholder={props.placeholder}
          onChange={(event: any) => {
            setValue(event.target.value);
            console.log(event.target.value);
            props.value(event.target.value);
          }}
        />
        {emailRegex.test(value) ? check : mark}
      </span>
    </InputSkeleton>
  );
};

/* -------------------------------------------------------------------------- */
/*                         #pragma Text Area Input                            */
/* -------------------------------------------------------------------------- */
export const TextArea = (props: {
  topLabel: string;
  bottomLabel?: string;
  placeholder?: string;
  className?: string;
  value: any;
}) => {
  function handleChange(event: any) {
    props.value(event.target.value);
  }
  return (
    <InputSkeleton
      topLabel={props.topLabel}
      bottomLabel={props.bottomLabel}
      className={props.className}
    >
      <div className="input-textarea">
        <textarea
          placeholder={props.placeholder}
          onChange={handleChange}
        ></textarea>
      </div>
    </InputSkeleton>
  );
};

/* -------------------------------------------------------------------------- */
/*                            #pragma Date Input                              */
/* -------------------------------------------------------------------------- */
export const DateInput = (props: {
  topLabel: string;
  bottomLabel?: string;
  placeholder?: string;
  className?: string;
  value: any;
}) => {
  function handleChange(event: any) {
    props.value(event.target.value);
  }
  return (
    <InputSkeleton
      topLabel={props.topLabel}
      bottomLabel={props.bottomLabel}
      className={props.className}
    >
      <div className="input-date">
        <input type="date" onChange={handleChange} />
      </div>
    </InputSkeleton>
  );
};
