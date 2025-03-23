import React from 'react';

const fraudulentUrls = [
  {
    url: "http://free-money-now.com",
    risk_level: "High",
    detected_on: "2025-03-14",
    category: "Phishing",
  },
  {
    url: "http://get-rich-fast.biz",
    risk_level: "Medium",
    detected_on: "2025-03-12",
    category: "Scam",
  },
  {
    url: "http://unlimited-downloads.net",
    risk_level: "Low",
    detected_on: "2025-03-10",
    category: "Malware",
  },
];

const handleAction = (action, url) => {
  alert(`${action} action on ${url}`);
};

const FraudulentUrls = () => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-xl space-y-6">
      <h2 className="text-2xl font-semibold mb-4">Fraudulent URLs</h2>
      {fraudulentUrls.map((urlData, index) => (
        <div key={index} className="p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition duration-200">
          <p className="font-medium text-xl">{urlData.url}</p>
          <p className="text-sm text-gray-600">Risk Level: {urlData.risk_level}</p>
          <p className="text-sm text-gray-600">Category: {urlData.category}</p>
          <p className="text-sm text-gray-600">Detected On: {urlData.detected_on}</p>
          <div className="mt-4 space-x-4">
            <button
              onClick={() => handleAction('Report', urlData.url)}
              className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-200"
            >
              Report
            </button>
            <button
              onClick={() => handleAction('Block', urlData.url)}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
            >
              Block
            </button>
            <button
              onClick={() => handleAction('Investigate', urlData.url)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Investigate
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FraudulentUrls;
