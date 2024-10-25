import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Guidedog VSCode Extension Demo</h1>
      <br/>

      <Link to='/page-1'>Navigate to page 1</Link>
      <br/>

      <Link to='/page-2'>Navigate to page 2</Link>
      <br/>

      <Link to='/page-3'>Navigate to page 3</Link>
      <br/>

      <Link to='/page-4'>Navigate to page 4</Link>
      <br/>
    </>
  )
}

export default App
