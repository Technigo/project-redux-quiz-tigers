/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from '../reducers/quiz';
import { Image } from './Image'
import './summary.css'

export const Summary = () => {
  const dispatch = useDispatch();
  const quizOver = useSelector((state) => state.quiz.quizOver);

  const numCorrect = useSelector((state) => state.quiz.answers.filter((a) => a.isCorrect === true).length);

  const restart = () => {
    dispatch(quiz.actions.restart())
  };

  // eslint-disable-next-line no-lone-blocks
  {
    if (quizOver === false) {
      return (<></>)
    } else {
      return (
        <section className="summary">
          <Image />
          <div className="summary-container">
            <h1>Summary</h1>
            <p>Your score is {numCorrect}/5!</p>
            {numCorrect < 2 ? (<p>Maybe you should watch the movies to refresh your knowledge?</p>) : (<> </>)}
            {numCorrect >= 2 && numCorrect < 5 ? (<p>On your way to Hogwarts!</p>) : (<> </>)}
            {numCorrect === 5 ? (<p>You are a true Potterhead!</p>) : (<> </>)}
          </div>
          <button onClick={restart}>Try again</button>
        </section>
      )
    }
  }
}
