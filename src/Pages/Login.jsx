import React, { useContext, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { Eye, EyeOff, LogOut, Sparkles, User } from "lucide-react";
import { motion as Motion } from "motion/react";

;
import { toast } from "react-toastify";

import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";


const Login = () => { 
  
  const emailRef = useRef(null)
  const {signInWithEmailAndPasswordFunc,signInWithPopupFunc,user,setUser}= useContext(AuthContext)

const navigate = useNavigate()

  const handelSignin = (e) => {
    
    e.preventDefault();
      const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPasswordFunc(email, password).then(res => {
     
      console.log(res);
      setUser(res.user)
      toast.success("login successfull")
      navigate('/')
    }).catch(e => {
      toast.error(e.message)
    })
  }
  console.log(user)

  const handelGoogleSignIn = () => {
    signInWithPopupFunc().then((res) => {
       if (!res.user?.emailVerified) {
        toast.error('Your email is not verified')
        return;
      }
      console.log(res);
      setUser(res.user)
      toast.success("login successfull")
      navigate('/')
      
    }).catch((e) => {
      toast.error(e.message);
    })
  }

  
  const [show, setShow] = useState(false);

  
  
  
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 grid-background flex items-center justify-center px-4 py-12">
      <Motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md relative"
      >
        <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 to-pink-500 rounded-2xl blur-xl opacity-20" />

        <div className="relative glass-card rounded-2xl p-8 border border-cyan-500/30">
          
         
          <Motion.div
            className="flex items-center justify-center gap-2 mb-6"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Sparkles className="w-8 h-8 text-cyan-400" />
          </Motion.div>

          <h2 className="text-3xl gradient-text font-bold mb-6 text-center">
            Welcome Back
          </h2>

          
        
              
            
              <form onSubmit={handelSignin} className="space-y-4">
                                 
                   <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">Email</label>
              <input type="email" name="email"
             ref={emailRef}
                className="w-full pl-12 pr-4 py-3 glass-card text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                         placeholder="your@email.com" required />
                   <div className="relative group">
                      <label htmlFor="password" className="block text-gray-300 mb-2 font-medium">Password</label>
                   <input
                     type= {show ? "text" :"password"}
                     name="password"
                     className="w-full pl-12 pr-12 py-3 glass-card text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                         placeholder="••••••••"
                     required
                     />
                      <button
                         type="button"
                         onClick={()=> setShow(!show)}
                         className="absolute right-4 top-1/2 z-50 text-gray-500 hover:text-cyan-400 transition-colors"
                       >
                         {show ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                       </button>
                   
              </div>
              <div className="text-right">
             <NavLink
  to="/forgot-password"
  state={{ email: emailRef.current?.value }}
  className="text-sm text-cyan-400 hover:text-pink-400 transition-colors"
>
  Forgot Password?
</NavLink>
            </div>

                 <button  type="submit"
                     className="w-full cyber-button py-3 text-white rounded-xl font-medium"> Login </button>
            
               

       
          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-gray-700"></div>
            <span className="px-4 text-gray-500">OR</span>
            <div className="flex-1 border-t border-gray-700"></div>
          </div>

        
          <button
                type="button"
                onClick={handelGoogleSignIn}
            className="w-full py-3 glass-card text-white rounded-xl flex items-center justify-center gap-3 border border-cyan-500/30 hover:border-pink-500/50"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>

          <p className="mt-6 text-center text-gray-400">
            Don&apos;t have an account?{" "}
            <Link
              to="/register"
              className="text-cyan-400 hover:text-pink-400 font-medium"
            >
              Register here
            </Link>
            </p>
            </form>
        </div>
      </Motion.div>
    </div>
  );
};

export default Login;
