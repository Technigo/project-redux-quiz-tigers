import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "../reducers/quiz";
import { Summary } from 'components/Summary'
import './CurrentQuestion.css'
import { Image } from './Image'

export const CurrentQuestion = () => {
  const quizOver = useSelector((state) =>
    state.quiz.quizOver
  );

  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  const answer = useSelector((state) =>
    state.quiz.answers.find((a) => a.questionId === question.id)
  );

  console.log(answer);
  const dispatch = useDispatch();

  // handle submit function to dispatch
  const handleAnswer = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
  };

  const handleClick = (event) => {
    dispatch(quiz.actions.goToNextQuestion({}));
  };

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }
  {
    if (quizOver === true) {
      return (<></>)
    }
    else {

      return (
        <div className="question-container">
          <Image />
          <h1>{question.questionText}</h1>
          <div className="button-container">
            {question.options.map((option, index) => {
              return (
                <button
                  className={`question-button 
                    ${index === question.correctAnswerIndex ? (answer ? 'correct-answer' : '') : ''} 
                    ${answer && !answer.isCorrect ? (answer.answerIndex === index ? "wrong-answer" : "") : ""}`}
                  onClick={() => handleAnswer(question.id, index)}
                  disabled={answer ? true : false}
                >
                  {option}
                </button>
              );
            })}
          </div>
          <button
            className="next-button"
            disabled={!answer ? true : false}
            onClick={handleClick}>Next >
          </button>
          <p className="completed" >{question.id}/5</p>
        </div>
      );
    }
  }
}