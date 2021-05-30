import AnimatedLogo from "../../assets/symbolLoadingAnimation.svg";

export const Loader = () => {
  return (
    <div className="loading-wrapper">
      <img src={AnimatedLogo} alt="logo" />
    </div>
  );
};