import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import GetAll from './components/GetAll'
import Home from './components/Home'
import Navigation from './components/Navigation'
import Register from './components/Register'

const App = () => {


  return (
    <>
      <BrowserRouter>
        < Navigation/>
        <Switch>
          <Route path="/products/">
            < GetAll/>
          </Route>
          <Route path="/register/">
            < Register/>
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
