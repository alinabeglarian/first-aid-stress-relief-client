import React from 'react'
import { Route } from 'react-router-dom'
import BreathingContainer from './Breathing/BreathingContainer'
import ExercisesListContainer from './ExercisesList/ExercisesList'
import QuotesContainer from './Quotes/QuotesContainer'
import ImagesContainer from './Images/ImagesContainer'
import WritingContainer from './Writing/WritingContainer'
import About from './About'

export default function Routes(props) {
  return (
    <div>
      <Route path='/' exact component={ExercisesListContainer} />
      <Route path='/breathing' exact component={BreathingContainer} />
      <Route path='/quotes' exact component={QuotesContainer} />
      <Route path='/images' exact component={ImagesContainer} />
      <Route path='/writing' exact component={WritingContainer} />
      <Route path='/about' exact component={About} />
    </div>
  )
}
