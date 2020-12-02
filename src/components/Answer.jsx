import React from "react";

const Answer = (props) => {
  return (
    <button className='btnAnswer' type="button" onClick={() => props.handleClick(props.choice)}>
      {props.option}
    </button>
  );
};

export default Answer;
