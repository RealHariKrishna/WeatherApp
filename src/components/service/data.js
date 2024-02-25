const apiKey = "9d553796368dc037e60ae7026b1a8c47";

export const getWeatherData = async ({ city = "bengaluru" }) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      throw new Error("Error getting details, check City name");
    }
  } catch (error) {
    if (error.response && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message);
  }
};
