import { useQuizContext } from "../../ContextApi/ContextAPIData";
import { questions } from "../../Data/Data";

function Result() {

    const { score, userAnswers , setScore } = useQuizContext();

    function calculateScore() {
        let score = 0;
        userAnswers.forEach((answer, index) => {
            if (answer === questions[index].answer) {
                score += 1;
            }
        });
        setScore(score);
    }

    return (
      <div>
        {calculateScore()}
        <h1>Your Score is : {score} / 10 </h1>
      </div>
    );
}
export default Result;