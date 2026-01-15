import React from "react";
import { Star, Calendar, DollarSign, Download, Tag, Monitor, Zap, Shield, Users } from "lucide-react";
import { motion as Motion } from "motion/react";

const GameDetails = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 grid-background">
      
      {/* Hero Section */}
      <div className="relative h-100 overflow-hidden">
        <img
          src="https://steamcdn-a.akamaihd.net/steam/apps/1245620/library_hero.jpg"
          alt="Game Cover"
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
            
            {/* Left Image */}
            <div className="lg:w-1/3">
              <img
                src="https://steamcdn-a.akamaihd.net/steam/apps/1245620/library_600x900_2x.jpg"
                alt="Game Poster"
                className="w-full rounded-xl border border-cyan-500/30"
              />
            </div>

            {/* Right Content */}
            <div className="lg:w-2/3">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-4xl gradient-text font-bold">Elden Ring</h1>
                  <p className="text-gray-400 text-lg">FromSoftware</p>
                </div>
                <div className="glass px-4 py-2 rounded-full flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="text-white font-semibold">4.8 / 5</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="glass px-3 py-2 rounded-lg flex items-center gap-2">
                  <Tag className="w-4 h-4 text-pink-400" />
                  Action RPG
                </span>
                <span className="glass px-3 py-2 rounded-lg flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  Feb 25, 2022
                </span>
                <span className="glass px-3 py-2 rounded-lg flex items-center gap-2">
                  <Users className="w-4 h-4 text-green-400" />
                  1.2M Players
                </span>
              </div>

              <p className="text-gray-300 text-lg mb-6">
                A vast open-world action RPG featuring deep combat, rich lore,
                and a dark fantasy universe created by FromSoftware.
              </p>

              {/* Platforms */}
              <div className="mb-6">
                <h3 className="text-white text-xl mb-3 flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-cyan-400" />
                  Available Platforms
                </h3>
                <div className="flex gap-2 flex-wrap">
                  {["PC", "PlayStation", "Xbox"].map(p => (
                    <span key={p} className="px-4 py-2 glass-card rounded-lg border border-cyan-500/30">
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-white text-xl mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-pink-400" />
                  Game Features
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Open World", "Boss Battles", "Multiplayer", "Lore Rich"].map(f => (
                    <span
                      key={f}
                      className="px-4 py-2 bg-linear-to-r from-cyan-500/10 to-pink-500/10 text-cyan-300 rounded-lg border border-cyan-500/30"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price & Button */}
              <div className="flex items-center gap-6 pt-6 border-t border-cyan-500/20">
                <div className="flex items-center gap-3">
                  <DollarSign className="w-8 h-8 text-green-400" />
                  <span className="text-4xl gradient-text font-bold">$59.99</span>
                </div>
                <button className="cyber-button ml-auto flex items-center gap-3 px-8 py-4 rounded-xl">
                  <Download className="w-5 h-5" />
                  Buy & Install
                </button>
              </div>
            </div>
          </div>
        </Motion.div>

        {/* Bottom Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="glass-card p-6 rounded-xl border border-cyan-500/20">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl text-white font-semibold">About This Game</h2>
            </div>
            <p className="text-gray-300">
              Elden Ring delivers an epic dark fantasy experience with vast exploration,
              challenging combat, and unforgettable bosses.
            </p>
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
