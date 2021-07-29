import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import GetAll from './components/GetAll'
import Home from './components/Home'
import Navigation from './components/Navigation'

const App = () => {


  return (
    <>
      <BrowserRouter>
        < Navigation/>
        <Switch>
          <Route path="/foods/">
            < GetAll/>
          </Route>
          <Route path="/">
            < Home/>
          </Route>

        </Switch>
      </BrowserRouter>
      
      
    </>
  ) 
}

export default App
