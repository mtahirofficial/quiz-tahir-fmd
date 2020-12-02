import React from "react";
import Answer from "./Answer";
const AnswerList = (props) => {
  const ANSWERS = props.dataSet.options.map((option, index) => {
    return (
      <Answer
        option={option}
        key={index}
        choice={index}
        answer={props.dataSet.correct}
        handleClick={props.handleClick}
      />
    );
  });

  return (
    <div>
      {ANSWERS}
    </div>
  );
};

export default AnswerList;
