import React from "react";
import Slider from "react-slick";
import { Star, Zap, TrendingUp, Download } from "lucide-react";
import { motion as Motion } from "motion/react";


import GameCard from "../Components/GameCard";
import useGameData from "../Hooks/useGameData";

const Home = () => {
  const { gameData, loading ,error} = useGameData()
  
  
  const trendingGames = gameData.slice(0,3)
  
  
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 grid-background">
      
     
     

      {/* ===== Trending Games UI ===== */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center gap-3 mb-12">
          <TrendingUp className="w-8 h-8 text-pink-500" />
          <h2 className="text-4xl gradient-text font-bold">
            Trending Games
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingGames.map(games  => (
            <GameCard key={games.id} games={ games} />
          ))}
        </div>
      </section>

      {/* ===== Newsletter UI ===== */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-linear-to-r from-cyan-500/10 via-pink-500/10 to-cyan-500/10" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <Zap className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
          <h2 className="text-4xl gradient-text font-bold mb-4">
            Stay in the Loop
          </h2>
          <p className="text-gray-300 mb-8">
            Get updates on new releases, exclusive deals and upcoming indie hits.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-5 py-4 glass-card rounded-xl text-white focus:outline-none"
            />
            <button className="cyber-button px-8 py-4 rounded-xl text-white font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;

