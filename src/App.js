import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './components/Homepage/Homepage'
import ReservationPage from './components/SetReservation/Reservation'
import styled from 'styled-components'

const MainApp = styled.div`
  display: flex;
  width: 100%; 
  height: 100%;
  margin: 0;
  padding: 0;
`

function App() {
  return (
    <MainApp>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/book-a-table" component={ReservationPage}/>
          <Route />
        </Switch>
      </Router>
    </MainApp>
  );
}

export default App;
