import React from "react";
import Slider from "react-slick";
import { Star, Zap, TrendingUp, Download } from "lucide-react";
import { motion as Motion } from "motion/react";

import { Link, Navigate} from "react-router";

import GameCard from "../Components/GameCard";
import useGameData from "../Hooks/useGameData";
import GameDetails from "../Pages/GameDetails";
import { PacmanLoader } from "react-spinners";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const { gameData, loading ,error} = useGameData()
  
  
  const trendingGames = gameData.slice(0, 3)
  const bannerGames = gameData.slice(0, 3)
  if (loading) {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <PacmanLoader
        color="#ab9fe9"
        size={30}
        speedMultiplier={1}
      />
    </div>
  );
  }
  if (error) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center text-red-400">
      Failed to load games. Try again later.
    </div>
  );
}
  
  const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  pauseOnHover: true,
};

  
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 grid-background">
      
     <section className="w-full overflow-hidden relative">
        <Slider {...sliderSettings}>
          {bannerGames.map((game, index) => (
            <div key={game.id} className="relative h-125">
              
              {/* Background image */}
              <img
                src={game.image}   
                alt={game.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlays */}
              <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/80 to-transparent" />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent" />

              {/* Content */}
              <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
                <Motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="max-w-xl"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="w-5 h-5 text-cyan-400" />
                    <span className="text-cyan-400 text-sm font-medium">
                      FEATURED GAME
                    </span>
                  </div>

                  <h1 className="text-5xl font-bold gradient-text mb-4">
                    {game.title}
                  </h1>

                  <p className="text-gray-300 mb-6">
                    {game.description}
                  </p>

                  <div className="flex items-center gap-3 mb-6">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-white">{game.ratings}</span>
                    <span className="text-gray-400 text-sm">• {game.category}</span>
                  </div>

                  <Link to={`/game-details/${game.id}`}>
                  <button
                    
                    className="cyber-button px-8 py-3 rounded-lg"
                  >
                    Discover Now
                  </button>
                  </Link>
                </Motion.div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
     

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

