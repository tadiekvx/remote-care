import React from 'react';
import { Link } from 'react-router-dom'; 

const SignupPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-white p-8 rounded shadow-md w-1/3">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>

        <div className="mb-4">
          <label className="block mb-2" htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            className="border rounded-full w-full py-2 px-3 focus:outline-none shadow-md"
            placeholder="Enter your first name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2" htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            className="border rounded-full w-full py-2 px-3 focus:outline-none shadow-md"
            placeholder="Enter your last name"
            required
          />
        </div>

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

        <div className="mb-4">
          <label className="block mb-2" htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            className="border rounded-full w-full py-2 px-3 focus:outline-none shadow-md"
            placeholder="Confirm your password"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2" htmlFor="contactNumber">Contact Number</label>
          <input
            type="tel"
            id="contactNumber"
            className="border rounded-full w-full py-2 px-3 focus:outline-none shadow-md"
            placeholder="Enter your contact number"
          />
        </div>

        <button type="submit" className="bg-nude text-black py-2 px-4 rounded-full w-full">
          Sign Up
        </button>

        <p className="text-sm text-center mt-4">
          Already have an account?{' '}
          <Link to="/login" className="rounded-full bg-nude text-black py-2 px-4">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignupPage;
