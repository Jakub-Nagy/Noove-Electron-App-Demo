import AnimatedLogo from "../../assets/symbolLoadingAnimation.svg";

export const Loader = () => {
  return (
    <div className="loadingWrapper">
      <img src={AnimatedLogo} alt="logo" />
    </div>
  );
};