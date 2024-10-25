import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AppointmentForm = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, email, phone, message, date: selectedDate });
    alert('Appointment requested successfully!');
    // Reset form
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setSelectedDate(new Date());
  };

  return (
    <section className="font-comfortaa py-20 px-20 bg-gray text-black">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold text-left mb-20 text-nude text-overline">Book an Appointment</h2>
        
        <div className="flex flex-col md:flex-row md:space-x-8">
         
          {/* Right: Appointment Form */}
          <div className="md:w-1/2">
            <h3 className="text-lg font-semibold mb-4">Your Details</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-2 border-green rounded-lg py-2 px-4 w-full focus:outline-none"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-2 border-green rounded-lg py-2 px-4 w-full focus:outline-none"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border-2 border-green rounded-lg py-2 px-4 w-full focus:outline-none"
                required
              />
              <textarea
                placeholder="Message (optional)"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border-2 border-green rounded-lg py-2 px-4 w-full focus:outline-none"
                rows="4"
              />
              <button
                type="submit"
                className="bg-nude text-white font-bold py-2 px-6 rounded-full shadow-lg hover:bg-green transition duration-300"
              >
                Book Appointment
              </button>
            </form>
          </div>
           {/* Left: Calendar */}
           <div className="md:w-1/2 mb-8 border-nude">
            <h3 className="text-lg font-semibold mb-4 ">Select Appointment Date</h3>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              className="border-2 rounded-lg py-2 px-4 w-full border-green"
              dateFormat="MMMM d, yyyy"
              minDate={new Date()} // Disable past dates
            />
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link to="/" className="text-green hover:underline font-semibold">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AppointmentForm;
