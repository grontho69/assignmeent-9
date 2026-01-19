import React from "react";
import { Link, useRouteError } from "react-router";
import { Gamepad2, AlertTriangle } from "lucide-react";
import { motion as Motion } from "motion/react";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 px-4">
      <Motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="relative max-w-lg w-full text-center"
      >
       
        <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 to-pink-500 blur-xl opacity-20 rounded-3xl" />

        <div className="relative glass-card p-10 rounded-3xl border border-cyan-500/30">
          
          <Motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="flex justify-center mb-6"
          >
            <AlertTriangle className="w-14 h-14 text-pink-500" />
          </Motion.div>

          <h1 className="text-6xl font-extrabold gradient-text mb-4">
            404
          </h1>

          <p className="text-gray-300 text-lg mb-2">
            Page not found
          </p>

          <p className="text-gray-500 text-sm mb-8">
            {error?.statusText || error?.message || "The page you’re looking for doesn’t exist."}
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 cyber-button px-6 py-3 rounded-xl"
          >
            <Gamepad2 className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </Motion.div>
    </div>
  );
};

export default ErrorPage;
