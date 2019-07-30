import React from 'react'
import { Route } from 'react-router-dom'
import BreathingContainer from './Breathing/BreathingContainer';

export default function Routes(props) {
  return (
    <div>
      <Route path='/breathing' exact component={BreathingContainer} />
    </div>
  )
}
