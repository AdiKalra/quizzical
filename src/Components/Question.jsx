import { nanoid } from "nanoid";
import { React, useState } from "react";
import OptionBtn from "./OptionBtn";

export default function Question(props) {
  const [selected, setSelected] = useState();
  const optionArray = props.optionArray;

  function shuffle(arr) {
    for (var i = arr.length - 1; i >= 1; i -= 1) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  shuffle(optionArray)
  function ButtonClickHandler(id){
    setSelected(id)
  }

  const optionElement = optionArray.map((item) => {
    return (
      <OptionBtn
        key={nanoid()}
        option={item.value}
        id={item.id}
        selected={selected}
        ButtonClickHandler={ButtonClickHandler}
      />
    );
  });

  return (
    <div className="container">
      <h4 className="question">{props.question}</h4>
      <div className="options">{optionElement}</div>
      <div className="line"></div>
    </div>
  );
}
