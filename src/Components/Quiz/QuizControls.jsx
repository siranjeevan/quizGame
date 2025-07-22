import { useQuizContext } from "../../ContextApi/ContextAPIData";
function QuizControls() {

    const { currentQuestion, setCurrentQuestion, score, setScore, quizOver, setQuizOver , CurrentAnswer , setCurrentAnswer , userAnswers , setUserAnswers  } = useQuizContext();

    function handleNext() {
        if (currentQuestion < 9) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setQuizOver(true);
        }
        console.log("Next Question", currentQuestion + 1);
        setCurrentAnswer(" ");
    }

    function handlePrevious() {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
        setCurrentAnswer(" ");
        console.log("Previous Question", currentQuestion - 1);
    }

    function handleSubmit() {
        const updatedAnswers = [...userAnswers];
        updatedAnswers[currentQuestion] = CurrentAnswer;
        setUserAnswers(updatedAnswers);
        
        console.log(updatedAnswers, "User Answers");


    }

  return (
    <>
      <div className="QuizControls">
        <button className={ currentQuestion === 0 ? "PreviousDisabled" : "Previous" } id = "ControlButton" onClick={()=> {handlePrevious(); }} >Previous</button>
        <button className= { CurrentAnswer === " " ? "SubmitDisabled" : "Submit" } id = "ControlButton" onClick={()=> {handleSubmit(); }} >Submit</button>
        <button className={currentQuestion === 9 || userAnswers[currentQuestion] === " "  ? "NextDisabled" : "Next" }  id = "ControlButton" onClick={()=> {handleNext(); }} > Next </button>
      </div>
    </>
  );
}
export default QuizControls;
