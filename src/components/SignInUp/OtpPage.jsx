import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const OtpPage = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const email = localStorage.getItem("verifyEmail");

  const handleVerify = async () => {
    if (!otp) return alert("Enter OTP!");
    try {
      const res = await axios.post("http://localhost:5000/api/v1/verify-otp", { email, otp });
      if (res.data.status === "success") {
        alert("OTP Verified!");
        localStorage.removeItem("verifyEmail");
        navigate("/signIn");
      }
    } catch (error) {
      alert(error.response?.data?.message || "OTP verification failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
      <div className="backdrop-blur-lg bg-white/10 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/20">
        <h1 className="text-4xl text-white font-bold text-center mb-4">Verify OTP</h1>
        <p className="text-white/80 text-center mb-6">Enter the OTP sent to your email: {email}</p>

        <input type="text" value={otp} onChange={e => setOtp(e.target.value)} placeholder="Enter OTP" className="input input-bordered w-full bg-white/20 text-white placeholder-white/70 border-white/30 mb-4"/>
        <button onClick={handleVerify} className="btn w-full bg-white text-indigo-600 hover:bg-indigo-200">Verify OTP</button>
      </div>
    </div>
  );
};

export default OtpPage;
