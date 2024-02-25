import { Route, Routes } from "react-router-dom";
import "./App.css";
import WeatherDashboard from "./pages/WeatherDashboard";
import WeatherForm from "./pages/WeatherForm";
import { Toaster } from "react-hot-toast";
import WeatherContext from "./context/Context";
import { useState } from "react";

function App() {
  const [sharedData, setSharedData] = useState(undefined);

  const updateSharedData = (newData) => {
    setSharedData(newData);
  };

  const contextValue = { sharedData, updateSharedData };

  return (
    <div className="App">
      <WeatherContext.Provider value={contextValue}>
        <Routes>
          <Route index path="/" element={<WeatherDashboard />} />
          <Route path="/city" element={<WeatherForm />} />
        </Routes>
        <Toaster />
      </WeatherContext.Provider>
    </div>
  );
}

export default App;
