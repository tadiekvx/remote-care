import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FaHome, FaVideo, FaAmbulance, FaBook, FaShoppingCart, FaSignInAlt, FaSearch, FaComments } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CustomApp.css';
import Chatbot from './Chatbot';

// Components
const Home = () => (
  <div className="container mt-5">
    <div className="jumbotron bg-primary text-white">
      <h1 className="display-4">Welcome to HealthCare Access</h1>
      <p className="lead">Your gateway to comprehensive and accessible healthcare solutions.</p>
      <hr className="my-4" />
      <p>Explore our services and take control of your health journey today.</p>
      <a className="btn btn-light btn-lg" href="#" role="button">Learn more</a>
    </div>
  </div>
);

const Telemedicine = () => (
  <div className="container mt-5">
    <h2 className="text-primary mb-4">Telemedicine Services</h2>
    <div className="row">
      <div className="col-md-6 mb-4">
        <div className="card bg-info text-white">
          <div className="card-body">
            <h5 className="card-title"><FaVideo /> Video Consultation</h5>
            <p className="card-text">Connect with healthcare professionals from the comfort of your home.</p>
            <a href="#" className="btn btn-light">Start Consultation</a>
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-4">
        <div className="card bg-warning text-dark">
          <div className="card-body">
            <h5 className="card-title"><FaBook /> AI Symptom Checker</h5>
            <p className="card-text">Get instant insights about your symptoms using our advanced AI technology.</p>
            <a href="#" className="btn btn-dark">Check Symptoms</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const MobileClinic = () => (
  <div className="container mt-5">
    <h2 className="text-primary mb-4">Mobile Health Clinics</h2>
    <div className="card bg-success text-white mb-4">
      <div className="card-body">
        <h5 className="card-title">Find a Mobile Clinic Near You</h5>
        <p className="card-text">Our mobile clinics bring healthcare to your community.</p>
        <div id="map" className="mt-3" style={{height: "300px", background: "#eee"}}>
          [Interactive Map Placeholder]
        </div>
      </div>
    </div>
  </div>
);

const HealthEducation = () => (
  <div className="container mt-5">
    <h2 className="text-primary mb-4">Health Education Hub</h2>
    <div className="row">
      {['Preventive Care', 'Nutrition', 'Mental Health', 'Child Health', 'Chronic Disease Management'].map((topic, index) => (
        <div key={index} className="col-md-4 mb-4">
          <div className="card bg-light">
            <div className="card-body">
              <h5 className="card-title">{topic}</h5>
              <p className="card-text">Explore our resources on {topic.toLowerCase()}.</p>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Marketplace = () => (
  <div className="container mt-5">
    <h2 className="text-primary mb-4">Healthcare Marketplace</h2>
    <div className="input-group mb-3">
      <input type="text" className="form-control" placeholder="Search for products" />
      <div className="input-group-append">
        <button className="btn btn-primary" type="button"><FaSearch /> Search</button>
      </div>
    </div>
    <div className="row">
      {[1, 2, 3, 4].map((product) => (
        <div key={product} className="col-md-3 mb-4">
          <div className="card">
            <img src={`https://via.placeholder.com/150?text=Product ${product}`} className="card-img-top" alt={`Product ${product}`} />
            <div className="card-body">
              <h5 className="card-title">Product {product}</h5>
              <p className="card-text">Description of Product {product}</p>
              <a href="#" className="btn btn-success">Add to Cart</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-gradient-primary">
          <div className="container">
            <Link className="navbar-brand" to="/"><FaAmbulance /> HealthCare Access</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item"><Link className="nav-link" to="/"><FaHome /> Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/telemedicine"><FaVideo /> Telemedicine</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/mobile-clinic"><FaAmbulance /> Mobile Clinics</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/health-education"><FaBook /> Health Education</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/marketplace"><FaShoppingCart /> Marketplace</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/chatbot"><FaComments /> Chat</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        <main>
          {!isLoggedIn ? (
            <div className="container mt-5">
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <div className="card bg-light">
                    <div className="card-body">
                      <h2 className="text-center mb-4"><FaSignInAlt /> Login</h2>
                      <form>
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Username" />
                        </div>
                        <div className="form-group">
                          <input type="password" className="form-control" placeholder="Password" />
                        </div>
                        <button onClick={handleLogin} className="btn btn-primary btn-block">Login</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/telemedicine" element={<Telemedicine />} />
              <Route path="/mobile-clinic" element={<MobileClinic />} />
              <Route path="/health-education" element={<HealthEducation />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/chatbot" element={<Chatbot />} />
            </Routes>
          )}
        </main>
      </div>
    </Router>
  );
}

export default App;