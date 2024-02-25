import { useMutation } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { getWeatherData } from "../components/service/data";
import { useForm } from "react-hook-form";
import WeatherContext from "../context/Context";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const WeatherForm = () => {
  const navigate = useNavigate();
  const { updateSharedData } = useContext(WeatherContext);

  const { mutate: mutateWeatherData, isLoading: isLoadingWeatherData } =
    useMutation({
      mutationFn: ({ city }) => {
        return getWeatherData({
          city,
        });
      },
      onSuccess: (data) => {
        toast.success("Weather report is fetched");
        navigate("/");
        updateSharedData(data);
      },
      onError: (error) => {
        toast.error(error.message);
        console.log(error);
      },
    });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      city: "Bengaluru",
    },
    mode: "onChange",
  });

  const submitHandler = (data) => {
    const { city } = data;
    mutateWeatherData({ city });
  };

  return (
    <div>
      <Header />
      <section className="container mx-auto px-5 py-10">
        <div className="w-full max-w-sm mx-auto">
          <h1 className="font-roboto text-2xl font-bold text-center text-dark-hard mb-8">
            Check for other cities
          </h1>
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="flex flex-col mb-6 w-full">
              <label htmlFor="city" className="text-[#5a7184]">
                City
              </label>
              <input
                type="text"
                id="city"
                {...register("city", {
                  minLength: {
                    value: 2,
                    message: "Enter valid City name",
                  },
                  required: {
                    value: true,
                    message: "City name is required",
                  },
                })}
                placeholder="Enter City Name"
                className={`placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${
                  errors.password ? "border-red-500" : "border-[#c3cad9]"
                } `}
              />
              {errors.city?.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.city?.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={!isValid || isLoadingWeatherData}
              className="bg-primary text-white font-bold text-lg py-4 px-8 w-full rounded-lg my-6 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              Get Weather
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default WeatherForm;
