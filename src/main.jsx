import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from './App.jsx'
// import Quiz from './screens/StartScreen.jsx'
import Quiz from "./screens/GameScreen/GameScreen.jsx";
import { QuizProvider } from "./ContextApi/ContextAPIData.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QuizProvider>
      <Quiz />
    </QuizProvider>
  </StrictMode>
);
