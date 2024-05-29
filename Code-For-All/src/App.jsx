import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './HomeComponents/Header'
import Hero from './HomeComponents/Hero'
import Board from './HomeComponents/Board'
import Social from './HomeComponents/Social'
import LatestEvent from './HomeComponents/LatestEvent'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Board/>
      <LatestEvent /> 
      <Social />
    </>
  )
}

export default App
