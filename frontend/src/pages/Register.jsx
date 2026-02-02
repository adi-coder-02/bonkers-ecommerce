import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const { name, email, password, confirmPassword } = form;
    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/auth/register`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      setError(data.message || 'Registration failed');
    } else {
      setSuccess('Registration successful! You can now log in.');
      setForm({ name: '', email: '', password: '', confirmPassword: '' });
    }
  } catch (err) {
    setError('Server error. Please try again later.');
  }

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm">
        <h2 className="text-4xl font-serif text-center text-black mb-8">
          Sign Up —
        </h2>

        {error && (
          <div className="mb-4 bg-red-100 text-red-700 p-3 rounded text-center">
            {error}
          </div>
        )}
        {success && (
          <div className="mb-4 bg-green-100 text-green-700 p-3 rounded text-center">
            {success}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full border border-black placeholder-gray-400 px-4 py-3 focus:outline-none"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border border-black placeholder-gray-400 px-4 py-3 focus:outline-none"
          />

          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full border border-black placeholder-gray-400 px-4 py-3 focus:outline-none"
          />

          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="w-full border border-black placeholder-gray-400 px-4 py-3 focus:outline-none"
          />

          <div className="flex justify-between text-sm text-black">
            <Link to="/forgot-password" className="hover:underline">
              Forgot your password?
            </Link>
            <Link to="/login" className="hover:underline">
              Login Here
            </Link>
          </div>

          <div className="pt-4 flex justify-center">
            <button
              type="submit"
              className="bg-black text-white px-10 py-3 text-sm font-medium"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
