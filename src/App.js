import React from 'react'
import { Provider, useSelector } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { quiz } from 'reducers/quiz'
import { CurrentQuestion } from 'components/CurrentQuestion'
import { Summary } from 'components/Summary'

//Creates store, tells redux about reducers
const reducer = combineReducers({
  quiz: quiz.reducer
})

//Creates store, create store using reducers and recuved state
const store = configureStore({ reducer })



export const App = () => {

  return (
    <Provider store={store}> {/* Gives access to the store*/}
      <CurrentQuestion />
      <Summary />
    </Provider>
  )
}
