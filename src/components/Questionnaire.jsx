import React, { useState } from "react";
import QuizArea from "./QuizArea";
import ScoreArea from "./ScoreArea";
import dataSet from "../api/DataSet";
const Questionnaire = () => {
  const [current, setCurrent] = useState(0);
  const [dataSet_, setDataSet_] = useState(dataSet);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [isFinished, setInFinished] = useState(false);
  const [message, setMessage] = useState("");
  const [class_, setClass_] = useState("");
  const handleClick = (choice) => {
    if (choice === dataSet_[current].correct) {
      setCorrect(correct + 1);
    } else {
      setIncorrect(incorrect + 1);
    }
    if (current === dataSet_.length - 1) {
      setInFinished(!isFinished);
    } else {
      setCurrent(current + 1);
    }
    if (correct >= incorrect) {
      setMessage("Congratulations! You are passed.");
      setClass_("success");
    } else {
      setMessage("Sorry! You are fail try again.");
      setClass_("faluire");
    }
  };
  return (
    <div>
      <h1>Quiz</h1>
      <QuizArea
        current={current}
        isFinished={isFinished}
        dataSet={dataSet_[current]}
        handleClick={handleClick}
        message={message}
        class={class_}
      />
      <ScoreArea correct={correct} incorrect={incorrect} />
    </div>
  );
};

export default Questionnaire;
