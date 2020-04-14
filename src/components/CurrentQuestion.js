import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from '../reducers/quiz'

//Recives ??? as imput
export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])

  // add dispatch 
  // a way to message the store
  // sends actions to the store
  const dispatch = useDispatch()

  // create state for input from form
  // const [value, setValue] = useState("")

  //handle submit function to dispatch

  const handleClick = event => {
    // event.preventDefault() 
    dispatch(quiz.actions.addGoToNextQuestion({}))
    //  call dispatch function and action

    if (!question) {
      return <h1>Oh no! I could not find the current question!</h1>
    }

    return (
      <div>
        <h1>Question: {question.questionText}</h1>
        {question.options.map(option => {
          return (
            <button>{option}</button>
          )
        })}
        <button
          onClick={handleClick()}
        >Next</button>
      </div>
    )
  }

}