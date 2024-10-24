import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-white p-8 rounded shadow-md w-1/3">
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        <div className="mb-4">
          <label className="block mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="border rounded-full w-full py-2 px-3 focus:outline-none shadow-md"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="border rounded-full w-full py-2 px-3 focus:outline-none shadow-md"
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" className="bg-nude text-black py-2 px-4 rounded-full w-full">
          Login
        </button>

        <p className="text-sm text-center mt-4">
          Don't have an account?{' '}
          <Link to="/signup" className="rounded-full bg-nude text-black py-2 px-4">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
