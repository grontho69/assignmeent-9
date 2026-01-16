import React, { useState } from 'react'
import useGameData from '../Hooks/useGameData'

import GameCard from '../Components/GameCard'
import { Filter, Search } from 'lucide-react';
import { motion as Motion } from "motion/react";

const AllGames = () => {
  const { gameData ,loading ,error } = useGameData()
  const [search, setSearch] = useState("");
  const term = search.trim().toLowerCase();
  const searchedGames = term ? gameData.filter(game => game.title.toLowerCase().includes(term)) : gameData;
  
  return (
    <div>
       <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center gap-3 mb-12">
          
          <h2 className="text-5xl gradient-text font-bold">
           Game Library
          </h2>
        </div>

         <div className="mb-8 grid md:grid-cols-2 gap-4">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-cyan-400 transition-colors" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search games..."
              className="w-full pl-12 pr-4 py-4 glass-card text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
            />
          </div>
         
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-400">
            Showing <span className="text-cyan-400 font-semibold">{searchedGames.length}</span> {searchedGames.length === 1 ? 'game' : 'games'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {searchedGames.map(games  => (
            <GameCard key={games.id} games={games} />
            
          ))}
{searchedGames.length === 0 && (
          <Motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="glass-card rounded-2xl p-12 max-w-md mx-auto">
              <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">No games found matching your criteria</p>
              <p className="text-gray-500 text-sm mt-2">Try adjusting your search or filters</p>
            </div>
          </Motion.div>
        )}

        </div>
      </section>
      
    </div>
  )
}

export default AllGames
