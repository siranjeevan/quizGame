import { useQuizContext } from "../../ContextApi/ContextAPIData";
function QuizControls() {

    const { currentQuestion, setCurrentQuestion, score, setScore, quizOver, setQuizOver ,currentAnswer , userAnswers , setUserAnswers  } = useQuizContext();

    function handleNext() {
        if (currentQuestion < 9) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setQuizOver(true);
        }
        console.log("Next Question", currentQuestion + 1);
    }

    function handlePrevious() {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
        console.log("Previous Question", currentQuestion - 1);
    }

    function handleSubmit() {
        if (currentAnswer) {
            const updatedAnswers = [...userAnswers];
            updatedAnswers[currentQuestion] = currentAnswer;
            setUserAnswers(updatedAnswers);
            console.log("Submitted Answer for Question", currentQuestion + 1, ":", currentAnswer);
        } else {
            console.log("No answer selected for Question", currentQuestion + 1);
        }

    }

  return (
    <>
      <div className="QuizControls">
        <button className="ControlButton" onClick={()=> {handlePrevious(); }} >Previous</button>
        <button className="ControlButton" onClick={()=> {handleSubmit(); }} >Submit</button>
        <button className="ControlButton" onClick={()=> {handleNext(); }} >Next</button>
      </div>
    </>
  );
}
export default QuizControls;
