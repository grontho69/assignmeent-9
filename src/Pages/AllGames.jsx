import React from 'react'
import useGameData from '../Hooks/useGameData'

import GameCard from '../Components/GameCard'

const AllGames = () => {
  const {gameData}=useGameData()
  return (
    <div>
       <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center gap-3 mb-12">
          
          <h2 className="text-4xl gradient-text font-bold">
           Game Library
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gameData.map(games  => (
            <GameCard key={games.id} games={ games} />
          ))}
        </div>
      </section>
      
    </div>
  )
}

export default AllGames
