import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let counter = 5
  return (
    <>
      <h1>react</h1>
      <h2>Counter value:{counter}</h2>

      <button>Add value</button>
      <br />
      <br />
      <button>Decrease value</button>
    </>
  )
}

export default App
