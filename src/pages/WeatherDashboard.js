import React from "react";
import Header from "../components/Header";
import WeatherDetail from "../components/WeatherDetail";

const WeatherDashboard = () => {
  return (
    <div className="relative bg-gray-300 h-screen">
      <Header />
      <WeatherDetail />
    </div>
  );
};

export default WeatherDashboard;
