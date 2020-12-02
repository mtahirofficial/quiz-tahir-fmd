import React from "react";

const GreetingMessage = (props) => {
  return <h2 className={props.class}>{props.message}</h2>;
};

export default GreetingMessage;
