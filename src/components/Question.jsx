import React from "react";

const Question = (props) => {
return <h2 className='question'>{props.current + 1}: {props.dataSet.question}</h2>;
};

export default Question;
