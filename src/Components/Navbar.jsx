
import React, { useContext } from "react";
import { NavLink ,Link, useLocation } from "react-router";
import { motion as Motion} from "motion/react";
import { Gamepad2, Sparkles, User, LogOut } from "lucide-react";


import MyContainer from "./MyContainer";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { PacmanLoader } from "react-spinners";



const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const { user,setUser,signOutFunc,loading, } = useContext(AuthContext)
  
  const logout = () => {
      signOutFunc().then(() => {
        toast.success("logout sucessfull")
        setUser(null)
      }).catch((e) => {
        toast.error(e.message);
      })
    }

  return (
    <Motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="glass sticky top-0 z-50 border-b border-cyan-500/20"
    >
      <MyContainer>
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Gamepad2 className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
              <Sparkles className="w-4 h-4 text-pink-500 absolute -top-1 -right-1 animate-pulse" />
            </div>
            <span className="text-2xl gradient-text font-bold">GameHub</span>
          </Link>

          {/* Nav Links */}
          <div className="flex items-center gap-6">
           <NavLink
              to="/" 
              className={`text-sm transition-all relative group ${
                isActive('/') ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              Home
              {isActive('/') && (
                <Motion.div 
                  layoutId="navbar-indicator"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-linear-to-r from-cyan-400 to-pink-500"
                />
              )}
            </NavLink>
            <NavLink
              to="/all-games" 
              className={`text-sm transition-all relative group ${
                isActive('/all-games') ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              All Games
              {isActive('/all-games') && (
                <Motion.div 
                  layoutId="navbar-indicator"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-linear-to-r from-cyan-400 to-pink-500"
                />
              )}
            </NavLink>


            { loading ? (<PacmanLoader color="#ab9fe9" size={15} speedMultiplier={3} />):!user ? (
              <>
               <NavLink 
                  to="/login" 
                  className="text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register" 
                  className="px-4 py-2 cyber-button text-white rounded-lg text-sm font-medium relative overflow-hidden group"
                >
                  <span className="relative z-10">Register</span>
                </NavLink>
              </>
            ) : (
              <div className="flex items-center gap-4">
                
                {/* Profile */}
                <NavLink
                  to="/profile"
                  className="flex items-center gap-2 group"
                  title="My Profile"
                >
                  {user.photoURL ? (
                    <div className="relative">
                      <img
                        src={user.photoURL}
                        alt={user.name || "User"}
                        className="w-8 h-8 rounded-full object-cover neon-border group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all"
                      />
                      <div className="absolute inset-0 rounded-full bg-linear-to-r from-cyan-400/20 to-pink-500/20 group-hover:from-cyan-400/30 group-hover:to-pink-500/30 transition-all" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-linear-to-br from-cyan-500 to-pink-500 flex items-center justify-center neon-border">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  )}
                </NavLink>

                {/* Logout */}
                <button
                  onClick={logout}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-gray-300 hover:text-pink-400 transition-colors group"
                  title="Logout"
                >
                  <LogOut className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>

        </div>
      </MyContainer>
    </Motion.nav>
  );
};

export default Navbar;
