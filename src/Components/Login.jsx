import React, { useState } from 'react';
import Footer from './Footer';
import { motion } from 'framer-motion';

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!formData.email.includes('@')) {
      setError('Invalid email address');
      return;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }
    if (isSignup) {
      console.log('Signing up with', formData);
    } else {
      console.log('Logging in with', formData);
    }
    setFormData({ email: '', password: '' }); // Clear input fields after submission
  };

  return (
    <>
      <div className="auth-container">
        <motion.div
          className="auth-box"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>{isSignup ? 'Sign Up' : 'Login'}</h2>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleSubmit}>
            <motion.input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              whileFocus={{ scale: 1.05 }}
            />
            <motion.input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              whileFocus={{ scale: 1.05 }}
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isSignup ? 'Sign Up' : 'Login'}
            </motion.button>
          </form>
          <motion.p
            onClick={() => setIsSignup(!isSignup)}
            whileHover={{ scale: 1.1 }}
            className="toggle-auth"
          >
            {isSignup ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
          </motion.p>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default Auth;
