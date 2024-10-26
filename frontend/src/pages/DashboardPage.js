import React, { useState } from 'react';
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import { FaHeartbeat, FaWeight, FaRunning, FaBed } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_KEY = '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';
const API_ENDPOINT = 'https://api.openai.com/v1/chat/completions';

const customStyles = {
  card: {
    transition: 'all 0.3s ease',
    borderRadius: '12px',
    border: 'none',
    fontFamily: 'Comfortaa, cursive'
  },
  cardHover: {
    transform: 'translateY(-5px)',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
  },
  statCard: {
    borderRadius: '12px',
    border: 'none',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    fontFamily: 'Comfortaa, cursive'
  },
  chartCard: {
    borderRadius: '12px',
    border: 'none',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    backgroundColor: 'white',
    padding: '20px',
    fontFamily: 'Comfortaa, cursive'
  },
  mainContainer: {
    fontFamily: 'Comfortaa, cursive'
  }
};

const DashboardPage = () => {
  const [healthFeedback, setHealthFeedback] = useState(null);

  const healthMetrics = {
    weeklyVitals: [
      { day: 'Mon', heartRate: 72, bloodPressure: 120, sleep: 7.5, steps: 8000 },
      { day: 'Tue', heartRate: 75, bloodPressure: 122, sleep: 6.5, steps: 10000 },
      { day: 'Wed', heartRate: 71, bloodPressure: 118, sleep: 8, steps: 12000 },
      { day: 'Thu', heartRate: 73, bloodPressure: 121, sleep: 7, steps: 9000 },
      { day: 'Fri', heartRate: 70, bloodPressure: 117, sleep: 7.5, steps: 11000 },
      { day: 'Sat', heartRate: 74, bloodPressure: 119, sleep: 8.5, steps: 7000 },
      { day: 'Sun', heartRate: 76, bloodPressure: 123, sleep: 9, steps: 6000 }
    ],
    nutritionData: [
      { name: 'Proteins', value: 30, fill: '#8884d8' },
      { name: 'Carbs', value: 45, fill: '#82ca9d' },
      { name: 'Fats', value: 25, fill: '#ffc658' }
    ],
    weightProgress: [
      { month: 'Jan', weight: 75 },
      { month: 'Feb', weight: 74 },
      { month: 'Mar', weight: 73.5 },
      { month: 'Apr', weight: 72.8 },
      { month: 'May', weight: 72 },
      { month: 'Jun', weight: 71.5 }
    ],
    activityData: [
      { name: 'Walking', minutes: 120 },
      { name: 'Running', minutes: 45 },
      { name: 'Cycling', minutes: 60 },
      { name: 'Gym', minutes: 90 }
    ]
  };

  const analyzeHealth = async () => {
    const prompt = `
      Health metrics:
      - Weekly vitals: ${JSON.stringify(healthMetrics.weeklyVitals)}
      - Nutrition: ${JSON.stringify(healthMetrics.nutritionData)}
      - Weight Progress: ${JSON.stringify(healthMetrics.weightProgress)}
      - Activity: ${JSON.stringify(healthMetrics.activityData)}
      
      Provide feedback on overall health, highlight any areas of concern, and offer tips to improve health.
    `;

    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: prompt }],
          max_tokens: 200,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      const feedback = data.choices[0].message.content;
      setHealthFeedback(feedback);
    } catch (error) {
      console.error("Error fetching health analysis:", error);
      setHealthFeedback("Error fetching health analysis. Please try again later.");
    }
  };

  return (
    <div className="bg-light min-vh-100 py-4">
      <div className="container-fluid px-4">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="mb-0">Health Dashboard</h4>
          <div className="d-flex gap-2">
            <select className="form-select form-select-sm" style={{ width: '150px' }}>
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
            </select>
            <button className="btn btn-primary" onClick={analyzeHealth}>Analyze</button>
          </div>
        </div>

        {healthFeedback && (
          <div className="alert alert-info mt-3">
            <strong>Health Feedback:</strong> {healthFeedback}
          </div>
        )}

        {/* Stats Cards */}
        <div className="row g-4 mb-4">
          <div className="col-xl-3 col-md-6">
            <div className="card" style={{ ...customStyles.statCard, backgroundColor: '#4361ee' }}>
              <div className="card-body text-white p-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="mb-0 opacity-75">Heart Rate</h6>
                    <h2 className="mt-2 mb-0">72 BPM</h2>
                    <p className="mb-0 opacity-75">Resting rate</p>
                  </div>
                  <FaHeartbeat size={24} className="opacity-75" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-6">
            <div className="card" style={{ ...customStyles.statCard, backgroundColor: '#3bc9db' }}>
              <div className="card-body text-white p-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="mb-0 opacity-75">Weight</h6>
                    <h2 className="mt-2 mb-0">71.5 kg</h2>
                    <p className="mb-0 opacity-75">-3.5 kg this month</p>
                  </div>
                  <FaWeight size={24} className="opacity-75" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-6">
            <div className="card" style={{ ...customStyles.statCard, backgroundColor: '#38d9a9' }}>
              <div className="card-body text-white p-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="mb-0 opacity-75">Activity</h6>
                    <h2 className="mt-2 mb-0">7,000</h2>
                    <p className="mb-0 opacity-75">Steps today</p>
                  </div>
                  <FaRunning size={24} className="opacity-75" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-6">
            <div className="card" style={{ ...customStyles.statCard, backgroundColor: '#ffd43b' }}>
              <div className="card-body p-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="mb-0 text-muted">Sleep</h6>
                    <h2 className="mt-2 mb-0">7.5 hrs</h2>
                    <p className="mb-0 text-muted">Last night</p>
                  </div>
                  <FaBed size={24} className="text-muted opacity-75" />
                </div>
              </div>
            </div>
          </div>
        </div>

                {/* Charts */}
                <div className="row g-4">
          <div className="col-xl-6 col-md-12">
            <div className="card" style={customStyles.chartCard}>
              <div className="card-body">
                <h5 className="card-title">Weekly Vitals</h5>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={healthMetrics.weeklyVitals}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="heartRate" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="bloodPressure" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="sleep" stroke="#ffc658" />
                    <Line type="monotone" dataKey="steps" stroke="#ff7300" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-md-12">
            <div className="card" style={customStyles.chartCard}>
              <div className="card-body">
                <h5 className="card-title">Nutrition Breakdown</h5>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie data={healthMetrics.nutritionData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label />
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4 mt-4">
          <div className="col-xl-6 col-md-12">
            <div className="card" style={customStyles.chartCard}>
              <div className="card-body">
                <h5 className="card-title">Weight Progress</h5>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={healthMetrics.weightProgress}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="weight" stroke="#8884d8" fill="#8884d8" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-md-12">
            <div className="card" style={customStyles.chartCard}>
              <div className="card-body">
                <h5 className="card-title">Activity Minutes</h5>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={healthMetrics.activityData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="minutes" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
