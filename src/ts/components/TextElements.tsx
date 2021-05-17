import React from "react";

export const Divider = () => {
    return (
      <div className="or-divider">
        <p>OR</p>
        <span className="line"></span>
      </div>
    );
  };
  
export const InstructionSet = (props: {
    title: string;
    subtitle: string;
    currentSteps: number;
    totalSteps: number;
}) => {
    return (
      <div className="instruction-group">
        <h3>{props.subtitle}</h3>
        <h2>{props.title}</h2>
  
        {/* Progress */}
        <label>Step {props.currentSteps}/{props.totalSteps}</label>
        <div className="progress-bar">
          {
          Array.from(Array(props.currentSteps), (e, i) => {
            return <div className="selected"></div>;
          })
          }
          {
            Array.from(Array(props.totalSteps - props.currentSteps), (e, i) => {
              return <div className="unselected"></div>;
            })
          }
        </div>
      </div>
    );
};  