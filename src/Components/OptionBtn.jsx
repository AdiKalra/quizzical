import { React, useState } from "react";

export default function OptionBtn(props) {
  const styleButton = {
    backgroundColor: "#D6DBF5" ,
    border: 0
  };
  return (
    <button
      className="option-btn"
      onClick={() => props.ButtonClickHandler(props.id)}
      style={props.id === props.selected ? styleButton : null}
    >
      {props.option}
    </button>
  );
}
