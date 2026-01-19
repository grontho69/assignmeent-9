import { Gamepad2, Sparkles } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'
import MyContainer from './MyContainer'

const Footer = () => {
  return (
    <footer className="bg-neutral py-6">
      <MyContainer>
        <div className="flex justify-center items-center">
          <aside className="flex flex-col items-center text-center gap-2">
            
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative">
                <Gamepad2 className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <Sparkles className="w-4 h-4 text-pink-500 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <span className="text-2xl gradient-text font-bold">GameHub</span>
            </Link>

            <p className="text-sm text-gray-400">
              Copyright © {new Date().getFullYear()} – All rights reserved by GameHub  
              <br />
              Developed by Grontho 💎
            </p>

          </aside>
        </div>
      </MyContainer>
    </footer>
  )
}

export default Footer
