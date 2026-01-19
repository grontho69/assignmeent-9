import React, { useContext } from 'react'


import { AuthContext } from '../context/AuthContext';
import { User, Mail, Edit, Trophy, Clock } from 'lucide-react';
import { motion as Motion } from 'motion/react';
const Profile = () => {

   const { user } = useContext(AuthContext)
 
  if (!user) {
    return null
  }
  
  return (
    <div>
      <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 grid-background py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-2xl p-8 border border-cyan-500/30"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl gradient-text font-bold">My Profile</h2>
            
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              {user.photoURL ? (
                <div className="relative group">
                  <img 
                    src={user.photoURL} 
                    alt={user.name}
                    className="w-full aspect-square rounded-xl object-cover neon-border"
                  />
                  <div className="absolute inset-0 bg-linear-to-br from-cyan-500/20 to-pink-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ) : (
                <div className="w-full aspect-square rounded-xl bg-linear-to-br from-cyan-500 to-pink-500 flex items-center justify-center neon-border">
                  <User className="w-24 h-24 text-white" />
                </div>
              )}
            </div>

            <div className="md:w-2/3 space-y-6">
              <div className="glass-card rounded-xl p-4 border border-cyan-500/20">
                <label className="block text-gray-400 mb-2 text-sm">Name</label>
                <div className="flex items-center gap-3 text-white text-xl">
                  <User className="w-5 h-5 text-cyan-400" />
                  {user.displayName}
                </div>
              </div>

              <div className="glass-card rounded-xl p-4 border border-cyan-500/20">
                <label className="block text-gray-400 mb-2 text-sm">Email</label>
                <div className="flex items-center gap-3 text-white text-xl">
                  <Mail className="w-5 h-5 text-pink-400" />
                  {user.email}
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-xl gradient-text font-semibold mb-4">Account Statistics</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="glass-card rounded-xl p-4 border border-cyan-500/30"
                  >
                    <Trophy className="w-8 h-8 text-yellow-400 mb-2" />
                    <p className="text-gray-400 text-sm mb-1">Games Owned</p>
                    <p className="text-3xl gradient-text font-bold">0</p>
                  </Motion.div>
                  <Motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="glass-card rounded-xl p-4 border border-pink-500/30"
                  >
                    <Clock className="w-8 h-8 text-cyan-400 mb-2" />
                    <p className="text-gray-400 text-sm mb-1">Hours Played</p>
                    <p className="text-3xl gradient-text font-bold">0</p>
                  </Motion.div>
                </div>
              </div>
            </div>
          </div>
        </Motion.div>
      </div>
    </div>
    </div>
  )
}

export default Profile
