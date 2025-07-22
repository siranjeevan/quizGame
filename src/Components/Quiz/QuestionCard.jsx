import { questions } from "../../Data/Data";

function QuestionCard({index}) {
    return (
      <>
        <h2 className="question">
          {index + 1}. {questions[index].question}
        </h2>
      </>
    );
}
export default QuestionCard;