import { useState } from 'react'
import './App.css'

import "./AgnyaSite.css"
import AgnyaImage from "./assets/image.jpg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
          <header>
      <h2>Learning By Myself</h2>
    </header>
    <main>
      <div className="card">
        <img src={AgnyaImage}/>
        <h1>Agnya</h1>
        <p className="description">Using AI and other sources of information</p>
        <span className="skills">
            HTML • CSS • JavaScript • React
        </span>

        <button>My projects</button>
      </div>
    </main>

    <footer>
      Created by newbie developer
    </footer>
    </div>
  )
}

export default App
