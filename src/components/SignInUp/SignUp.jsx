import React, { useState } from 'react';
import Layout from '../layout/Layout';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const { firstName, lastName, email, mobile, password } = form;
    if (!firstName || !lastName || !email || !mobile || !password) {
      alert("All fields are required!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/v1/register", form);

      if (response.data.status === "success") {
        localStorage.setItem("verifyEmail", form.email);
        navigate("/verify-otp");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed!");
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
        <div className="backdrop-blur-lg bg-white/10 p-8 rounded-2xl shadow-2xl w-full max-w-xl border border-white/20">
          <h1 className="text-4xl font-extrabold text-white text-center mb-6 drop-shadow-lg">Create Account ✨</h1>
          <p className="text-white/80 text-center text-sm mb-8">Join us & start your learning journey today!</p>

          <div className="space-y-4">

            {/* First + Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-white font-medium">First Name</label>
                <input name="firstName" type="text" onChange={handleChange} className="input input-bordered w-full mt-1 bg-white/20 text-white placeholder-white/70 border-white/30" placeholder="Enter first name"/>
              </div>
              <div>
                <label className="text-white font-medium">Last Name</label>
                <input name="lastName" type="text" onChange={handleChange} className="input input-bordered w-full mt-1 bg-white/20 text-white placeholder-white/70 border-white/30" placeholder="Enter last name"/>
              </div>
            </div>

            {/* Email + Mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-white font-medium">Email</label>
                <input name="email" type="email" onChange={handleChange} className="input input-bordered w-full mt-1 bg-white/20 text-white placeholder-white/70 border-white/30" placeholder="Enter email"/>
              </div>
              <div>
                <label className="text-white font-medium">Mobile</label>
                <input name="mobile" type="text" onChange={handleChange} className="input input-bordered w-full mt-1 bg-white/20 text-white placeholder-white/70 border-white/30" placeholder="01XXXXXXXXX"/>
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-white font-medium">Password</label>
              <input name="password" type="password" onChange={handleChange} className="input input-bordered w-full mt-1 bg-white/20 text-white placeholder-white/70 border-white/30" placeholder="Enter password"/>
            </div>

            <button onClick={handleSubmit} className="btn w-full bg-white text-indigo-600 hover:bg-indigo-200 font-semibold mt-4">Create Account</button>

            <p className="text-center text-white/80 mt-4">
              Already have an account? <Link to="/signIn" className="text-white hover:underline cursor-pointer font-medium">Login</Link>
            </p>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
