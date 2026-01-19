import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const { sendPasswordResetEmailFunc } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  // Prefill email from Login page
  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const handleReset = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    sendPasswordResetEmailFunc(email)
      .then(() => {
        toast.success("Password reset email sent");

        // Redirect to Gmail inbox
        window.location.href = "https://mail.google.com";
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={handleReset}
        className="glass-card p-8 rounded-2xl max-w-md w-full"
      >
        <h2 className="text-2xl font-bold mb-6 text-center gradient-text">
          Reset Password
        </h2>

        <label className="block text-gray-300 mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full py-3 px-4 glass-card rounded-xl text-white"
          placeholder="your@email.com"
          required
        />

        <button
          type="submit"
          className="w-full mt-6 cyber-button py-3 rounded-xl"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
