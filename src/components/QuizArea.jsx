import React from "react";
import Question from "./Question";
import AnswerList from "./AnswerList";
import GreetingMessage from "./GreetingMessage";
const QuizArea = (props) => {
  if (props.isFinished) {
    return <GreetingMessage message={props.message} class={props.class} />;
  }
  return (
    <div>
      <Question dataSet={props.dataSet} current={props.current} />
      <AnswerList dataSet={props.dataSet} handleClick={props.handleClick} />
    </div>
  );
};

export default QuizArea;
