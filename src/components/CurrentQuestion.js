import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "../reducers/quiz";
import { Summary } from 'components/Summary'

//Recives ??? as imput
export const CurrentQuestion = () => {

  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  const answer = useSelector((state) =>
    state.quiz.answers.find((a) => a.questionId === question.id)
  );


  console.log(answer); // question could come from the previous selector in the last example
  // add dispatch
  // a way to message the store
  // sends actions to the store
  const dispatch = useDispatch();

  // create state for input from form
  // const [value, setValue] = useState("")

  // handle submit function to dispatch
  const handleAnswer = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
    // {if isCorrect === true setUserAnswer +1}
    //console.log(question);
  };

  const handleClick = (event) => {
    // event.preventDefault()
    dispatch(quiz.actions.goToNextQuestion({}));
    //  call dispatch function and action
  };
  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  return (
    <div>
      <h1>Question: {question.questionText}</h1>

      {question.options.map((option, index) => {
        return (
          <button
            className={`an-existing-class ${answer && answer.isCorrect ? 'green' : 'red'}`}
            onClick={() => handleAnswer(question.id, index)}
          >
            {option}
          </button>
        );
      })}
      <button onClick={handleClick}>Next</button>
      <p>{question.id}/5</p>
    </div>
  );
};
