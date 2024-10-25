import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray text-green py-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-3xl font-bold">CareConnect</h1>
        <nav>
          <ul className="flex space-x-6">
          <li>
         <Link to="/dashboard" className="relative inline-block pb-1.5">
          <span className="border-b-2 border-transparent hover:border-green transition-all duration-300">Dashboard</span>
         </Link>
          </li>
          <li>
         <Link to="/appointment" className="relative inline-block pb-1.5">
          <span className="border-b-2 border-transparent hover:border-green transition-all duration-300">Book Appointment</span>
         </Link>
          </li>
          <li>
         <Link to="/profile" className="relative inline-block pb-1.5">
          <span className="border-b-2 border-transparent hover:border-green transition-all duration-300">Profile</span>
         </Link>
          </li>
          <li>
         <Link to="/consultation" className="relative inline-block pb-1.5">
          <span className="border-b-2 border-transparent hover:border-green transition-all duration-300">Consultation</span>
         </Link>
          </li>

          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
