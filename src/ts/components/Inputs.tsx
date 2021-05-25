import React from "react";
import { useEffect, useState } from "react";
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
    <fieldset className={"input-group " + props.className}>
      <label>{props.topLabel}</label>
      {props.children}
      <label>{props.bottomLabel}</label>
    </fieldset>
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
  valueIn: any;
  valueOut: any;
}) => {
  function handleChange(event: any) {
    props.valueOut(event.target.value);
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
          value={props.valueIn}
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
  valueIn: any;
  valueOut: any;
}) => {
  const [hide, setHide] = useState(true);

  function handleChange(event: any) {
    props.valueOut(event.target.value);
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
          value={props.valueIn}
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
  valueIn: any;
  valueOut: any;
  valid: any;
}) => {
  function handleChange(event: any) {
    props.valueOut(event.target.value);
  }

  return (
    <InputSkeleton
      topLabel={props.topLabel}
      bottomLabel={props.bottomLabel}
      className={props.className}
    >
      <div className="input-username">
        <input type="text" onChange={handleChange} value={props.valueIn} />
        <span className="availability">
          <span className="dot red"></span>
          Unavailable
        </span>
      </div>
    </InputSkeleton>
  );
};

/* -------------------------------------------------------------------------- */
/*                          #pragma Password Verifier                         */
/* -------------------------------------------------------------------------- */

export const PasswordVerify = (props: { 
  valueIn: string;
  valid: any;
}) => {
  const lowerOrUpper = new RegExp("(?=.*?[a-z])(?=.*?[A-Z])");
  const containsNumber = new RegExp("(?=.*?[0-9])");
  const containsSymbol = new RegExp("(?=.*?[#?!@$%^&*-])");
  const minChars = new RegExp(".{8,}");

  const check = <CheckIcon size={17} className="check" />;
  const mark = <XIcon size={17} className="x" />;

  useEffect(() => {
    props.valid(
      containsNumber.test(props.valueIn) &&
      containsSymbol.test(props.valueIn) &&
      lowerOrUpper.test(props.valueIn) &&
      minChars.test(props.valueIn)
    );
  }, [props.valueIn]);

  return (
    <div className="password-validator">
      <span>
        {containsNumber.test(props.valueIn) ? check : mark}
        <label>Contains a number</label>
      </span>
      <span>
        {containsSymbol.test(props.valueIn) ? check : mark}
        <label>Contains a symbol</label>
      </span>
      <span>
        {lowerOrUpper.test(props.valueIn) ? check : mark}
        <label>Contains at least 1 uppercase and 1 lowercase character</label>
      </span>
      <span>
        {minChars.test(props.valueIn) ? check : mark}
        <label>At least 8 characters long</label>
      </span>
    </div>
  );
};
/* -------------------------------------------------------------------------- */
/*                            #pragma Email Input                             */
/* -------------------------------------------------------------------------- */

export const EmailInput = (props: {
  topLabel: string;
  bottomLabel?: string;
  placeholder?: string;
  className?: string;
  valueIn: any;
  valueOut: any;
}) => {
  const check = <CheckIcon size={20} className="check" />;
  const mark = <XIcon size={20} className="x" />;

  const emailRegex = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  var valid: any;

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
            valid = emailRegex.test(event.target.value);
            props.valueOut({ value: event.target.value, valid: valid });
          }}
          value={props.valueIn}
        />
        {emailRegex.test(props.valueIn) ? check : mark}
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
  valueIn: any;
  valueOut: any;
}) => {
  function handleChange(event: any) {
    props.valueOut(event.target.value);
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
          value={props.valueIn}
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
  valueIn: any;
  valueOut: any;
}) => {
  function handleChange(event: any) {
    props.valueOut(event.target.value);
  }
  return (
    <InputSkeleton
      topLabel={props.topLabel}
      bottomLabel={props.bottomLabel}
      className={props.className}
    >
      <div className="input-date">
        <input type="date" onChange={handleChange} value={props.valueIn} required />
      </div>
    </InputSkeleton>
  );
};
/* -------------------------------------------------------------------------- */
/*                            #pragma Dropdown Input                          */
/* -------------------------------------------------------------------------- */

export const SelectInput = (props: {
  topLabel: string;
  bottomLabel?: string;
  placeholder?: string;
  className?: string;
  dropdownItems: any;
  valueIn: any;
  valueOut: any;
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <InputSkeleton
      topLabel={props.topLabel}
      bottomLabel={props.bottomLabel}
      className={props.className}
    >
      <details
        className={dropdownOpen ? "input-select dropped" : "input-select"}
        onClick={function () {
          setDropdownOpen(!dropdownOpen);
        }}
      >
        <summary>
          <input
            type="radio"
            name="occupation"
            id="default"
            title={props.placeholder}
            defaultChecked={props.valueIn === ""}
          />

          {props.dropdownItems.map((item: any) => {
            return (
              <input
                key={item}
                defaultChecked={props.valueIn === item}
                type="radio"
                name="occupation"
                id={item}
                title={item}
                value={item}
                onChange={(event) => {
                  props.valueOut(event.target.value);
                }}
              />
            );
          })}
        </summary>
        <ul>
          {props.dropdownItems.map((item: any) => {
            return (
              <li key={item}>
                <label
                  className={props.valueIn === item ? "selected" : ""}
                  htmlFor={item}
                >
                  {item}
                </label>
              </li>
            );
          })}
        </ul>
      </details>
    </InputSkeleton>
  );
};