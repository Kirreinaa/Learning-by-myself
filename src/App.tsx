import { useState } from 'react'
import './App.css'

import { cardsData } from './components/Card/cardsData'
import "./components/AgnyaSite.css"
import AgnyaHeader from './components/Header/AgnyaHeader'
import AgnyaFooter from './components/Footer/AgnyaFooter'
import AgnyaCard from './components/Card/AgnyaCard'

function App() {

  return (
    <div className='container'>

      <AgnyaHeader/>

      <div className="cardsContainer">
        {cardsData.map((card) => (
          <AgnyaCard 
            name={card.name}
            description={card.description}
            skills={card.skills}
            button={card.button}
            image={card.image}
            key={card.name}
          />
        ))}
      </div>

      <AgnyaFooter/>

    </div>
  )
}

export default App
