import { questions } from "../../Data/Data";
import { useQuizContext } from "../../ContextApi/ContextAPIData";

function Options({ index }) {
  const { setCurrentAnswer, userAnswers, currentQuestion } = useQuizContext();

  return (
    <div className="options">
      {questions[index].options.map((option, idx) => (
        <button
          key={idx}
          className={
            userAnswers[currentQuestion] === option &&
            userAnswers[currentQuestion] == questions[index].answer
              ? "correctAnswer"
              : userAnswers[currentQuestion] === " "
              ? "option"
              :  userAnswers[currentQuestion] === option && userAnswers[currentQuestion] != questions[index].answer
              ? "WrongAnswer"
              : "optionDisabled"
          }
          onClick={() => setCurrentAnswer(option)}
        >
          {idx + 1}. {option}
        </button>
      ))}
    </div>
  );
}
export default Options;
