import React, { useEffect } from 'react'
import axios from 'axios'
import Home from './components/Home'
import Navigation from './components/Navigation'

const App = () => {
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/') 
      console.log(data)
    }
    getData()
  })

  return (
    <>
      < Navigation/>
      < Home/>
    </>
  ) 
}

export default App
