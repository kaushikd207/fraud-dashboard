import React from "react";

const FraudulentList = () => {
  const fraudulentApps = [
    { app_name: "FakeBank Pro", risk_level: "High" },
    { app_name: "FreeCryptoWin", risk_level: "Medium" },
    { app_name: "LoanFastNow", risk_level: "High" },
    { app_name: "MusicDownloader", risk_level: "Low" },
    { app_name: "InstaFollowers", risk_level: "Medium" },
  ];

  return (
    <div className="bg-white p-6 shadow-lg rounded-xl">
      <h2 className="text-lg font-semibold mb-4">Fraudulent Apps</h2>
      <ul className="space-y-4">
        {fraudulentApps.map((app, index) => (
          <li key={index} className="flex justify-between items-center">
            <div className="text-sm font-medium text-gray-700">
              {app.app_name}
            </div>
            <span
              className={`px-3 py-1 text-sm font-semibold rounded-full ${
                app.risk_level === "High"
                  ? "bg-red-100 text-red-700"
                  : app.risk_level === "Medium"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {app.risk_level}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FraudulentList;
