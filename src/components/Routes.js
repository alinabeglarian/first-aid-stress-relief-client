import React from 'react'
import { Route } from 'react-router-dom'
import BreathingContainer from './Breathing/BreathingContainer'
import ExercisesListContainer from './ExercisesList/ExercisesList'

export default function Routes(props) {
  return (
    <div>
      <Route path='/' exact component={ExercisesListContainer} />
      <Route path='/breathing' exact component={BreathingContainer} />
    </div>
  )
}
