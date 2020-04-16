import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Summary } from 'components/Summary'
import { quiz } from "../reducers/quiz";
import './CurrentQuestion.css'
import { Image } from './Image'

export const CurrentQuestion = () => {
  const quizOver = useSelector((state) => state.quiz.quizOver);

  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  const answer = useSelector((state) => state.quiz.answers.find((a) => a.questionId === question.id));

  console.log(answer);
  const dispatch = useDispatch();

  // handle submit function to dispatch
  const handleAnswer = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
  };

  const handleClick = (event) => {
    dispatch(quiz.actions.goToNextQuestion({}));
  };

  const getClassNameForQuestionButton = (index) => {
    const isSelectedAnswerIndex = answer && answer.answerIndex === index
    if (isSelectedAnswerIndex && answer.isCorrect) {
      return 'correct-answer'
    }
    if (isSelectedAnswerIndex && !answer.isCorrect) {
      return 'wrong-answer'
    }

    // ${index === question.correctAnswerIndex ? (answer ? 'correct-answer' : '') : ''} 
    // ${answer && !answer.isCorrect ? (answer.answerIndex === index ? 'wrong-answer' : '') : ''}`}
    return ''
  };

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  if (quizOver === true) {
    return (<></>)
  } else {
    return (
      <div className="question-container">
        <Image />
        <h1>{question.questionText}</h1>
        <div className="button-container">
          {question.options.map((option, index) => {
            return (
              <button
                type="button"
                className={`question-button ${getClassNameForQuestionButton(index)}`}
                onClick={() => handleAnswer(question.id, index)}
                disabled={!!answer}>
                {option}
              </button>
            );
          })}
        </div>
        <button
          type="submit"
          className="next-button"
          disabled={!answer}
          onClick={handleClick}>Next >
        </button>
        <p className="completed">{question.id}/5</p>
      </div>
    );
  }
}
