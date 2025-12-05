import React, { useState } from 'react'
import Layout from '../layout/Layout'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const SignIn = () => {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

 const handleSubmit = async () => {
  const { email, password } = form
  if (!email || !password) {
    alert('All fields are required!')
    return
  }

  try {
    const response = await axios.post('http://localhost:5000/api/v1/login', { email, password })
    
    if (response.data.status === 'success') {
      // Token save
      localStorage.setItem('token', response.data.token)
      
      // Save role and email 
      localStorage.setItem('role', response.data.role) 
      localStorage.setItem('email', response.data.email)
      if(response.data.photo) localStorage.setItem('photo', response.data.photo)

      // Redirect to dashboard
      navigate('/dashboard')
    }
  } catch (error) {
    alert(error.response?.data?.message || 'Login failed!')
  }
}


  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
        <div className="backdrop-blur-lg bg-white/10 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/20">
          <h1 className="text-4xl font-extrabold text-white text-center mb-6 drop-shadow-lg">
            Welcome Back 👋
          </h1>
          <p className="text-white/80 text-center text-sm mb-8">
            Log in to continue your learning journey
          </p>

          <div className="space-y-4">
            <div>
              <label className="text-white font-medium">Email</label>
              <input 
                type="email" 
                name="email"
                value={form.email}
                onChange={handleChange}
                className="input input-bordered w-full mt-1 bg-white/20 text-white placeholder-white/70 border-white/30"
                placeholder="Enter your email" 
              />
            </div>

            <div>
              <label className="text-white font-medium">Password</label>
              <input 
                type="password" 
                name="password"
                value={form.password}
                onChange={handleChange}
                className="input input-bordered w-full mt-1 bg-white/20 text-white placeholder-white/70 border-white/30"
                placeholder="Enter your password" 
              />
            </div>

            <div className="flex justify-end">
              <a className="text-white/80 hover:text-white text-sm cursor-pointer">
                Forgot password?
              </a>
            </div>

            <button 
              onClick={handleSubmit} 
              className="btn w-full bg-white text-indigo-600 hover:bg-indigo-200 font-semibold mt-4">
              Login
            </button>

            <p className="text-center text-white/80 mt-4">
              Don’t have an account?{" "}
              <Link to={`/signUp`} className="text-white hover:underline cursor-pointer font-medium">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SignIn
