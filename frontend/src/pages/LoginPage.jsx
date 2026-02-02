import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSignIn = async () => {
  if (!email || !password) {
    alert('Please enter email and password');
    return;
  }

  

  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email, password }),
});


    const data = await res.json();

    if (!res.ok) {
      alert(data.message || 'Login failed');
      return;
    }

    // Save token & user info (localStorage example)
    localStorage.setItem('userInfo', JSON.stringify(data));

    alert('Login successful!');
    // You can navigate to homepage or dashboard now
    navigate('/')
  } catch (error) {
    alert('Server error, please try again later.');
  }
};


  const handleForgotPassword = () => {
    // Handle forgot password logic
    console.log('Forgot password clicked');
    alert('Forgot password functionality would be implemented here');
  };

  const handleCreateAccount = () => {
    navigate('/register');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-serif text-gray-900">Login —</h2>
        </div>
        
        <div className="space-y-6">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
            />
          </div>
          
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <button
              onClick={handleForgotPassword}
              className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              Forgot your password?
            </button>
            <button
              onClick={handleCreateAccount}
              className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              Create account
            </button>
          </div>
          
          <div className="text-center">
            <button
              onClick={handleSignIn}
              className="bg-black text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors duration-200"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;