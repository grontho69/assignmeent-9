import React from "react";
import { Star, Tag, Monitor, Download, Zap } from "lucide-react";
import { motion as Motion } from "motion/react";
import { useParams } from "react-router";
import { PacmanLoader } from "react-spinners";
import useGameData from "../Hooks/useGameData";

const GameDetails = () => {
  const { gameData, loading, error } = useGameData();
  const { id } = useParams();

  if (loading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <PacmanLoader color="#ab9fe9" size={30} speedMultiplier={1} />
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

  // Find the game by ID
  const game = gameData.find((g) => String(g.id) === id);

  // Null-check for safety
  if (!game) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center text-gray-400">
        Game not found or still loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 grid-background">
      {/* Hero Section */}
      <div className="relative h-100 overflow-hidden">
        <img
          src={game.image}
          alt={game.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/70 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/80 via-transparent to-slate-950/80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-32 relative z-10 pb-16">
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-2xl p-8 neon-border"
        >
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Game Poster */}
            <div className="lg:w-1/3">
              <img
                src={game.image}
                alt={game.title}
                className="w-full rounded-xl border border-cyan-500/30"
              />
            </div>

            {/* Game Info */}
            <div className="lg:w-2/3">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-4xl gradient-text font-bold">{game.title}</h1>
                  <p className="text-gray-400 text-lg">{game.developer}</p>
                </div>
                <div className="glass px-4 py-2 rounded-full flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="text-white font-semibold">{game.ratings}/5</span>
                </div>
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="glass px-3 py-2 rounded-lg flex items-center gap-2">
                  <Tag className="w-4 h-4 text-pink-400" />
                  {game.category}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-lg mb-6">{game.description}</p>

              {/* Platforms */}
              <div className="mb-6">
                <h3 className="text-white text-xl mb-3 flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-cyan-400" />
                  Available Platforms
                </h3>
                <div className="flex gap-2 flex-wrap">
                  {game.platforms?.map((p) => (
                    <span
                      key={p}
                      className="px-4 py-2 glass-card rounded-lg border border-cyan-500/30"
                    >
                      {p}
                    </span>
                  )) || <span className="text-gray-400">No platforms listed</span>}
                </div>
              </div>

              {/* Download Button */}
              <div className="items-center gap-6 pt-6 border-t border-cyan-500/20">
                <a href={game.downloadLink}>
                  <button className="cyber-button ml-auto flex items-center gap-3 px-8 py-4 rounded-xl">
                    <Download className="w-5 h-5" />
                    Install
                  </button>
                </a>
              </div>
            </div>
          </div>
        </Motion.div>

        {/* Extra Sections */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="glass-card p-6 rounded-xl border border-cyan-500/20">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl text-white font-semibold">About This Game</h2>
            </div>
            <p className="text-gray-300">{game.description}</p>
          </div>

          <div className="glass-card p-6 rounded-xl border border-pink-500/20">
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              <h2 className="text-2xl text-white font-semibold">Player Reviews</h2>
            </div>
            <p className="text-gray-300">
              Critically acclaimed by players worldwide for its depth, difficulty,
              and breathtaking world design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
