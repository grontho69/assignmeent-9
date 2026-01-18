import React, { useState } from "react";
import { motion as Motion } from "motion/react";
import { Link } from "react-router";
import {Eye,Mail,Lock,User,Image,Sparkles, EyeOff} from "lucide-react";
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { auth } from "../firebase/Firebase.Config";
import { toast } from "react-toastify";

const Register = () => {

  const [show, setShow] = useState(false);


  const handelSignup = (e) => { 
    e.preventDefault();

    const name = e.target.name.value;
    const photoURL = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({ email, name, password, photoURL })
    const passCheck = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passCheck.test(password)) {
          toast.error(
            "Password must be at least 6 characters and include uppercase & lowercase letters."
          );
          return;
        }
    
    
//creat user
    createUserWithEmailAndPassword(auth, email, password).then(res => {
// update profile
      updateProfile(res.user, {
        displayName: name, photoURL: photoURL,
  
      }).then(() => {

     // email verification   
        sendEmailVerification(res.user).then(res => {
   console.log(res);
        toast.success("registration successfull. Check your email to active the account")
        }).catch((e) => {
        toast.error(e.message)
      })
})

       .catch((e) => {
   toast.error(e.message)
 })

      console.log(res);
      toast.success("registration successfull")
    }).catch(e => {
        toast.error(e.message)
      })
   }
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
            animate={{ rotate: [0, -5, 5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Sparkles className="w-8 h-8 text-pink-400" />
          </Motion.div>

          <h2 className="text-3xl gradient-text font-bold mb-6 text-center">
            Join GameHub
          </h2>

        
          <form onSubmit={handelSignup} className="space-y-4">
                          <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">Name</label>
          <input type="text" name="name" className="w-full pl-12 pr-4 py-3 glass-card text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                  placeholder="John Doe"
              required />
                          <label htmlFor="photoURL" className="block text-gray-300 mb-2 font-medium">Photo URL</label>
          <input type="text" name="photo" className="w-full pl-12 pr-4 py-3 glass-card text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
              placeholder="https://example.com/photo.jpg" required />
            <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">Email</label>
          <input type="email" name="email"  className="w-full pl-12 pr-4 py-3 glass-card text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
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
          <button  type="submit"
              className="w-full cyber-button py-3 text-white rounded-xl font-medium">Register</button>
     
       

         
          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-gray-700"></div>
            <span className="px-4 text-gray-500">OR</span>
            <div className="flex-1 border-t border-gray-700"></div>
          </div>

       
          <button
            type="button"
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
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-cyan-400 hover:text-pink-400 font-medium"
            >
              Login here
            </Link>
            </p>
             </form>
        </div>
      </Motion.div>
    </div>
  );
};

export default Register;
