// Images
import GoogleLogo from '../../assets/icon-google.svg';
import FacebookLogo from '../../assets/icon-facebook.svg';


export const SocialButton = (props: { mediaType: string; width: string }) => {
  return (
    <button
      className={"continue-with-button " + props.mediaType}
      style={{ width: props.width }}
    >
      <img src={props.mediaType === "google" ? GoogleLogo : FacebookLogo} alt="Button logo" />
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
  disabled?: boolean;
  style?: any;
}) => {
  return (
    <button
      className={`${props.className} ${props.disabled ? "disabled" : ""}`}
      onClick={props.onClick}
      disabled={props.disabled}
      style={props.style}
    >
      <label>{props.label}</label>
    </button>
  );
};