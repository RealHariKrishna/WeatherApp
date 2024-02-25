import React, { useContext, useEffect } from "react";
import WeatherContext from "../context/Context";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const WeatherDetail = () => {
  const { sharedData } = useContext(WeatherContext);
  console.log(sharedData);
  const navigate = useNavigate();

  useEffect(() => {
    if (sharedData === undefined) {
      toast.error("Enter city name again");
      navigate("/city");
    }
  }, [sharedData, navigate]);

  let time = null;
  if (sharedData !== undefined) {
    const utcMilliseconds = sharedData.dt * 1000;

    const utcDate = new Date(utcMilliseconds);

    const istFormatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Kolkata",
      hour12: false,
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    const istTimeFormatted = istFormatter.format(utcDate);
    time = istTimeFormatted;
  }

  return (
    <div className="p-7 text-left">
      {sharedData === undefined ? (
        <div className="flex justify-center items-center text-xl">
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="text-white w-fit container h-30 w-35 rounded-lg p-5 bg-dark-hard">
          <h1>
            City : {sharedData.name}, Country : {sharedData.sys.country}
          </h1>
          <p>
            Temp : {sharedData.main.temp}
            <sup className="text-xm">o</sup>C, Feels-like :{" "}
            {sharedData.main.feels_like}
            <sup className="text-xm">o</sup>C
          </p>
          <p>Wind : {sharedData.wind.speed}m/sec</p>
          <p>Time : {time}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherDetail;
