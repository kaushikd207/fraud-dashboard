import React, { useState } from 'react';
import Authentication from './components/Authentication';
import FraudulentList from './components/FraudulentList';
import FraudulentUrls from './components/FraudulentUrls';
import TrendAnalysis from './components/TrendAnalysis';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8">
      {isLoggedIn ? (
        <div className="space-y-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
            Fraud Detection Dashboard
          </h1>
          <TrendAnalysis />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2gap-6">
            <FraudulentList />
            <FraudulentUrls />
          </div>
        </div>
      ) : (
        <Authentication onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
