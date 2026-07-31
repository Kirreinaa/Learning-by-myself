import { useState } from 'react'
import './App.css'

import "./AgnyaSite.css"
import AgnyaImage from "./assets/image.jpg"
import AgnyaButton from './components/AgnyaButton'
import AgnyaHeader from './components/AgnyaHeader'
import AgnyaFooter from './components/AgnyaFooter'

function App() {
  const [count, setCount] = useState(0)

  const buttons = ["my projects", "button", "button2", "button3"]

  return (
    <div className='container'>
      
      <AgnyaHeader/>

      <div className="card">
        <img src={AgnyaImage}/>
        <h1>Agnya</h1>
        <p className="description">Using AI and other sources of information</p>
        <span className="skills">
          HTML • CSS • JavaScript • React
        </span>
        {buttons.map((buttonText, i) =>
          <AgnyaButton text={buttonText} key={buttonText+i}/>
        )}
      </div>

      <AgnyaFooter/>

    </div>
  )
}

export default App
