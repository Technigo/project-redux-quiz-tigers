import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "../reducers/quiz";

export const Summary = () => {
  const dispatch = useDispatch();
  const quizOver = useSelector((state) =>
    state.quiz.quizOver
  );
  const numCorrect = useSelector((state) =>
    state.quiz.answers.filter((a) => a.isCorrect === true).length
  );

  const restart = () => {
    dispatch(quiz.actions.restart())
  };

  {
    if (quizOver === false) {
      return (<></>)
    }
    else {
      return (
        <>
          <h2>Quizover</h2>
          <p>You got {numCorrect} correct answers</p>
          {numCorrect < 2 ? (<p>Dåligt...</p>) : (<> </>)}
          {numCorrect >= 2 && numCorrect < 5 ? (<p>Ganska bra...</p>) : (<> </>)}
          {numCorrect === 5 ? (<p>Potterhead</p>) : (<> </>)}
          <button onClick={restart}>Restart</button>
        </>
      )
    }
  }
}





// <p>
// <details><summary>Show restart example</summary>
// <p>

// ```
// dispatch(quiz.actions.restart())
// ```

// </p>
// </details>
// </p>