import "./GameScreen.css";
import QuestionCard from "../../Components/Quiz/QuestionCard";
import React from "react";
import Options from "../../Components/Quiz/Options";
import QuizControls from "../../Components/Quiz/QuizControls";
import { useQuizContext } from "../../ContextApi/ContextAPIData";
import Result from "../../Components/Quiz/Result";
function GameScreen() {
  const { currentQuestion , userAnswers } = useQuizContext();
  return (
    <>
      <div className="game-screen">
        <QuestionCard index={currentQuestion} />
        <Options index={currentQuestion} />
        <QuizControls />
        {userAnswers[9] != " " && <Result />}
      </div>
    </>
  );
}
export default GameScreen;
