// HealthTipPopup.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTimes } from 'react-icons/fa';

const HealthTipPopup = ({ API_KEY, API_ENDPOINT }) => {
  const [tip, setTip] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const healthPrompts = [
    "Give me a quick tip for improving cardiovascular health.",
    "What's a simple way to improve mental well-being?",
    "Share a tip for maintaining a healthy diet.",
    "How can I improve my sleep quality?",
    "Suggest a quick exercise for better posture.",
    "What's a good habit for maintaining oral health?",
    "Give me a tip for staying hydrated throughout the day.",
    "How can I reduce eye strain while working on a computer?",
    "Suggest a healthy snack idea.",
    "What's a good stretching exercise for office workers?",
    "How can I incorporate more vegetables into my diet?",
    "Give me a tip for managing stress in daily life.",
    "What's a good way to boost my immune system naturally?",
    "Suggest a breathing exercise for relaxation.",
    "How can I improve my skincare routine?"
  ];

  const getRandomPrompt = () => {
    const randomIndex = Math.floor(Math.random() * healthPrompts.length);
    return healthPrompts[randomIndex];
  };

  const fetchHealthTip = async () => {
    try {
      const prompt = getRandomPrompt();
      const response = await axios.post(API_ENDPOINT, {
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "You are a health expert. Provide a short, practical health tip." },
          { role: "user", content: prompt }
        ]
      }, {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json'
        }
      });

      setTip(response.data.choices[0].message.content.trim());
      setIsVisible(true);
    } catch (error) {
      console.error('Error fetching health tip:', error);
    }
  };

  useEffect(() => {
    fetchHealthTip(); // Fetch initial tip
    const interval = setInterval(fetchHealthTip, 420000000); // Fetch new tip every 30 seconds

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="health-tip-popup">
      <div className="health-tip-content">
        <button className="close-button" onClick={() => setIsVisible(false)}>
          <FaTimes />
        </button>
        <h4>Health Tip</h4>
        <p>{tip}</p>
      </div>
    </div>
  );
};

export default HealthTipPopup;