import React from 'react'
 import { motion as Motion } from 'motion/react'
import { Download, Star } from 'lucide-react'
import { Link } from 'react-router';
const GameCard = ({games}) => {
  return (
    <div  >
      <Link to={`/game-details/${games.id}`}  >
         <Motion.div
              key={games.id}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card rounded-xl overflow-hidden group cursor-pointer"
            >
              <div className="relative h-48">
                <img
                  src={games.image}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt="Game"
                />
                <div className="absolute top-3 right-3 glass px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-white text-sm">{games.ratings}</span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl text-white font-semibold mb-1 group-hover:text-cyan-400">
                  {games.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {games.developer}
                </p>

                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-sm text-cyan-400 border border-cyan-500/30 bg-cyan-500/10">
                    {games.category}g
                  </span>
                  <button href={games.downloadLink}className="text-green-400 font-semibold">
                    <Download  />
                  </button>
                </div>
              </div>
            </Motion.div>
      </Link>
    </div>
  )
}

export default GameCard
