import { questions } from "../../Data/Data";
import { useQuizContext } from "../../ContextApi/ContextAPIData";
import React, { useEffect } from "react";

function Options({ index }) {
  const { CurrentAnswer, setCurrentAnswer } = useQuizContext();

  // useEffect(() => {
  //   console.log("current answer", CurrentAnswer);
  // }, [CurrentAnswer]);

  return (
    <div className="options">
      {questions[index].options.map((option, idx) => (
        <button
          key={idx}
          className="option"
          onClick={() => setCurrentAnswer(option)}
        >
          {idx + 1}. {option}
        </button>
      ))}
    </div>
  );
}
export default Options;
