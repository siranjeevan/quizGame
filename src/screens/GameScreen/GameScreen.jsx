import "./GameScreen.css";
import QuestionCard from "../../Components/Quiz/QuestionCard";
import React from "react";
import Options from "../../Components/Quiz/Options";
import QuizControls from "../../Components/Quiz/QuizControls";
import { useQuizContext } from "../../ContextApi/ContextAPIData";
function GameScreen() {
  const { currentQuestion } = useQuizContext();
  return (
    <>
      <div className="game-screen">
        <QuestionCard index={currentQuestion} />
        <Options index={currentQuestion} />
        <QuizControls />
        <h1></h1>
      </div>
    </>
  );
}
export default GameScreen;
