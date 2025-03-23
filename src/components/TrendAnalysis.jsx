import React from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const fraudTrends = [
  { date: "2025-02-18", fraud_cases_detected: 12 },
  { date: "2025-02-19", fraud_cases_detected: 15 },
  { date: "2025-02-20", fraud_cases_detected: 18 },
  { date: "2025-02-21", fraud_cases_detected: 20 },
  { date: "2025-02-22", fraud_cases_detected: 25 },
  { date: "2025-02-23", fraud_cases_detected: 22 },
  { date: "2025-02-24", fraud_cases_detected: 27 },
  { date: "2025-02-25", fraud_cases_detected: 30 },
  { date: "2025-02-26", fraud_cases_detected: 28 },
  { date: "2025-02-27", fraud_cases_detected: 35 },
  { date: "2025-02-28", fraud_cases_detected: 40 },
  { date: "2025-02-29", fraud_cases_detected: 42 },
  { date: "2025-03-01", fraud_cases_detected: 38 },
  { date: "2025-03-02", fraud_cases_detected: 37 },
  { date: "2025-03-03", fraud_cases_detected: 50 },
  { date: "2025-03-04", fraud_cases_detected: 45 },
  { date: "2025-03-05", fraud_cases_detected: 52 },
  { date: "2025-03-06", fraud_cases_detected: 55 },
  { date: "2025-03-07", fraud_cases_detected: 58 },
  { date: "2025-03-08", fraud_cases_detected: 60 },
  { date: "2025-03-09", fraud_cases_detected: 62 },
  { date: "2025-03-10", fraud_cases_detected: 65 },
  { date: "2025-03-11", fraud_cases_detected: 67 },
  { date: "2025-03-12", fraud_cases_detected: 70 },
  { date: "2025-03-13", fraud_cases_detected: 75 },
  { date: "2025-03-14", fraud_cases_detected: 80 },
  { date: "2025-03-15", fraud_cases_detected: 85 },
  { date: "2025-03-16", fraud_cases_detected: 90 },
  { date: "2025-03-17", fraud_cases_detected: 95 },
  { date: "2025-03-18", fraud_cases_detected: 100 },
];

const trendLineData = {
  labels: fraudTrends.map((data) => data.date),
  datasets: [
    {
      label: "Fraud Cases Detected (Line)",
      data: fraudTrends.map((data) => data.fraud_cases_detected),
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderWidth: 2,
      tension: 0.4,
    },
  ],
};

const trendBarData = {
  labels: fraudTrends.map((data) => data.date),
  datasets: [
    {
      label: "Fraud Cases Detected (Bar)",
      data: fraudTrends.map((data) => data.fraud_cases_detected),
      backgroundColor: "rgba(54, 162, 235, 0.5)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 2,
    },
  ],
};

const TrendAnalysis = () => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center">
        30-Day Fraud Detection Trend
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="w-full h-72 sm:h-80 lg:h-96">
          <Line data={trendLineData} />
        </div>
        <div className="w-full h-72 sm:h-80 lg:h-96">
          <Bar data={trendBarData} />
        </div>
      </div>
    </div>
  );
};

export default TrendAnalysis;
