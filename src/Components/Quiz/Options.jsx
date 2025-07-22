import { questions } from "../../Data/Data";
import { useQuizContext } from "../../ContextApi/ContextAPIData";
import React, { useState } from "react";

function Options({ index }) {
  const {CurrentAnswer, setCurrentAnswer} = useQuizContext();

  function setAnswer(answer) {
    setCurrentAnswer(answer);
    console.log("current answer", CurrentAnswer)
    console.log(answer, "selected for question", index + 1);
  }

  return (
    <div className="options">
      {questions[index].options.map((option, idx) => (
        <button
          key={idx}
          className="option"
          onClick={() => setAnswer(option)}
        >
          {idx + 1}. {option}
        </button>
      ))}
    </div>
  );
}
export default Options;