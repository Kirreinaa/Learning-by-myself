import { useState } from 'react'
import './App.css'

import "./AgnyaSite.css"
import AgnyaImage from "./assets/image.jpg"

function App() {
  const [count, setCount] = useState(0)
  const boyzInChat = 12
  const girlzInChat = 1337

  let people = 0
  function peopleInChat(boyz: number, girlz: number) {
    people = boyz + girlz
    people = -1000
    return boyz + girlz
  }

  const result = peopleInChat(boyzInChat, girlzInChat)
  console.log("People in chat:", result, people)

  function greeting(name: string) {
    return "hello, " + name
  }

console.log(greeting("astra"))

  return (
    <div className='container'>
      <header>
        <h2>Learning By Myself</h2>
      </header>

      <div className="card">
        <img src={AgnyaImage}/>
        <h1>Agnya</h1>
        <p className="description">Using AI and other sources of information</p>
        <span className="skills">
            HTML • CSS • JavaScript • React
        </span>

        <button>My projects</button>
      </div>

      <footer>
        Created by newbie developer
      </footer>
    </div>
  )
}

export default App
