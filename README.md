# Redux quiz group project

During the two days you're in Stockholm, your team's task is to build a quiz game using Redux. It's a multiple choice quiz, so you'll need to define your own questions and a bunch of possible answers to present to your users.

It's up to your team to decide what your quiz should be about! You could come up with something fun and whacky like the [Buzzfeed quizes](https://www.buzzfeed.com/quizzes), or you could test your user's general knowledge with [trivia questions](https://www.opinionstage.com/blog/trivia-questions/).

## Getting started

In this repo, we've defined a Redux store and a reducer with a few actions you can use to control your quiz. You need to work as a team to use the state to render the quiz questions one at a time. When rendering a question, you should render the question itself and also the possible answers. The user then clicks an answer and you should show if it is correct or not before letting the user continue on to the next question.

We've connected the redux dots and set up a store from the reducer and passed the store into a Provider in src/App.js. We've also created a starting point for you - a component which selects the current question from the store and renders the question, in src/components/CurrentQuestion.js.

## Planning
**You have should these questions before you clone the repo:**  

- Will you used a planning tool (Jamboard, Figma) to plan your design/app structure?
- How are you gonna work in the team? mob, smaller groups or pairs etc.  
- What is your quiz about?  
- Which are your (at least) 5 questions and answers? (Remember, multiple choices required)  
- How are you going to show the progress? i.e 1 / 5, 20%, 4 questions left.  
- How will the user select the answer? Dropdown, selecting with keyboard commands, buttons, images?  
- What will the summary screen look like?  
- What components do you need?  
- How are you dealing with the styling? CSS or Styled components?  
- What stretch goals are you aiming for?  
  
## The questions array

You can find the `quiz` store in src/reducers/quiz.js. In it, there's a `questions` array with a couple of placeholder objects for you to get started with. You should replace these questions with your own ones.

You're free to restructure things if you want to, but it's recommended to stick with the current setup where each question has:

* `id` - a unique identifier for the question. You can just keep incrementing numbers for these.
* `question` - this is the text which is displayed to the user for this question. The example questions use a string of text, but you could turn this into an object if you wanted to include images or other data.
* `options` - an array of possible answers to the question which your user will choose from. Again, in the placeholder questions, we've used strings, but you can switch them to objects if you want to add additional details such as image urls.
* `correctAnswerIndex` - the index of the item in the `options` array which is the correct answer.

## Redux actions

In the `quiz` store, there's a few actions made for you:

### `submitAnswer`

Use this action when a user selects an answer to the question. You need to pass an object with a key `questionId` whose value is valid question id (from the question objects) and an `answerIndex` which is the index of the answer they chose.

<p>
<details><summary>Show submitAnswer example</summary>
<p>

Given the following question, for example:

```
{ id: 1, question: 'Who set the Olympic record for the 100m dash in 2012?', options: ['Usain Bolt', 'Justin Gatlin', 'Tyson Gay', 'Asafa Powell'], correctAnswerIndex: 0 }
```

If the user clicks 'Asafa Powell' (index 3 in the options array), you'd dispatch the action to redux like this:

```
dispatch(quiz.actions.submitAnswer({ questionId: 1, answerIndex: 3 }))
```

The redux state will then update the answers array and tell you if this was the correct answer or not.

</p>
</details>
</p>

### `goToNextQuestion`

After the user clicks an answer and you show them if they were correct or not, you should show a button to continue to the next question. When they click that button, dispatch this action.

<p>
<details><summary>Show goToNextQuestion example</summary>
<p>

```
dispatch(quiz.actions.goToNextQuestion())
```

</p>
</details>
</p>

### `restart`

At the end of the quiz, if you want to start over, you can dispatch this action.

<p>
<details><summary>Show restart example</summary>
<p>

```
dispatch(quiz.actions.restart())
```

</p>
</details>
</p>

## Selecting from the store

Use the redux dev tools in chrome to inspect the store and see what it contains. You can write your own selectors to fetch whatever you need from the store. We've given you one example in src/components/CurrentQuestion.js to get you started with fetching the current question from the store:

```js
const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuesionIndex])
```

You can build up these selector functions to use other information you have to fetch specific things. For example, you could fetch the answer to a question:

```js
const answer = useSelector((state) => state.quiz.answers.find((a) => (
  a.questionId === question.id // question could come from the previous selector in the last example
)))
```

## What you will learn 🧠

* How to interact with your store using selectors or by dispatching actions
* Practice working in a development team

## How to get started 💪🏼

1. Fork this repo
2. Clone this repo into your projects folder on your computer
3. Open up VS Code
4. Install the dependencies needed for react by running `npm install`
5. Run the react development server by running `npm start`

## Requirements 🧪

* Your quiz should have at least 5 questions.
* When the user selects an answer, it should show if they were correct or not.
* While going through the quiz, it should show which question you're on, or how many left - for example 'Question 5 / 15' or '10 questions left'.
* When the user has answered all the questions, they should get to a summary screen which tells them how many the got correct or incorrect.
* You should challenge yourself to make use of redux by making small components which interact with the store - don't just go for one big component.
* Don't forget CSS! Your quiz should be well styled.
* Code follows Technigo’s code guidelines.

## Hints and tips to complete the project 🤓

This project is quite open ended, so you should make sure to start with a sketch and make sure your team is aligned on how things should work and who's going to do what. It's up to you to decide how you want to work in your teams; whether you break up into smaller groups and work on specific features, or whether you work as a big mob.

Whatever you do, remember to break tasks up into small chunks and don't take on too many things at once!

## Stretch Goals 🏃‍♂

Since this is such an open task, **it's up to you to decide how far to push your app!** Here's some ideas for potential features you could add:

* After selecting an answer, highlight the correct answer if they chose incorrectly.
* A countdown timer to answer the question - if the user doesn't answer in time, they get the question wrong.
* A timer for how long it took to complete the quiz
* Give a score for correct answers and deduct points for incorrect answers. If the user goes below a certain score, they lose!
* Use images or videos to make your questions and answers look richer


