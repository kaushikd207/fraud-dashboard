import React, { useState } from "react";

const userData = [
  {
    email: "admin@frauddashboard.com",
    password_hashed: "$2a$10$XYZ1234abcd$",
    password_string: "admin",
    role: "Admin",
  },
  {
    email: "analyst@frauddashboard.com",
    password_string: "analyst",
    password_hashed: "$2a$10$ABC5678efgh$",
    role: "Analyst",
  },
];

const Authentication = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = userData.find(
      (user) => user.email === email && user.password_string == password
    );
    if (user) {
      onLogin(user);
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-400 to-blue-700">
      <div className="p-8 bg-white shadow-lg rounded-xl w-96">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Fraud Detection Login
        </h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="w-full p-3 border border-gray-300 rounded-lg mb-6"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Authentication;
