import { createContext, useContext, useState } from "react";
const QuizContext = createContext();

export function QuizProvider({ children }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizOver, setQuizOver] = useState(false);
  const [userAnswers, setUserAnswers] = useState(Array(10).fill(" "));
  const [CurrentAnswer, setCurrentAnswer] = useState(" ");

  return (
    <QuizContext.Provider
      value={{
        currentQuestion,
        setCurrentQuestion,
        score,
        setScore,
        quizOver,
        setQuizOver,
        userAnswers,
        setUserAnswers,
        CurrentAnswer,
        setCurrentAnswer,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export function useQuizContext() {
  return useContext(QuizContext);
}
