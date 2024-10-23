import React from 'react';

const SignupPage = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <label>First Name:</label>
        <input type="text" placeholder="Enter your first name" />
        
        <label>Last Name:</label>
        <input type="text" placeholder="Enter your last name" />
        
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" />
        
        <label>Password:</label>
        <input type="password" placeholder="Create a password" />
        
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupPage;
