import { useCallback, useState } from "react";

import CurrentWeather, { WeatherData } from "./components/CurrentWeather";
import { PiSpinner } from "react-icons/pi";
import FiveDaysData from "./components/FiveDaysData";
import Toggle from "./components/Toggle";
import Intro from "./components/Intro";
import Button from "./components/Button";

interface ErrorType {
  code: string;
  message: string;
}

export default function App() {
  const apiKey = "5ee58debfa7c03ee85f5b4db8cc637a3";
  const [currentData, setCurrentData] = useState<WeatherData | null>();
  const [fiveDaysData, setFiveDaysData] = useState();
  const [celcius, setCelsius] = useState(true);

  const [city, setCity] = useState("");
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ErrorType | null>();

  const makeSearch = useCallback(async () => {
    if (query === "" || query === city) return;
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=Metric&appid=${apiKey}`
      );
      const result = await response.json();

      if (result.message) {
        setError(result);
        return;
      }
      setCity(query);

      setCurrentData(result);
      const response2 = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=Metric&appid=${apiKey}`
      );
      const result2 = await response2.json();
      setFiveDaysData(result2.list.slice(0, 5));
    } catch (error: unknown) {
      setCurrentData(null);
      alert("Check Your Connection");
    } finally {
      setIsLoading(false);
    }
  }, [city, query]);

  return (
    <div>
      <div className="border border-red-100 w-full md:w-1/2 h-auto bg-blue-700 rounded-xl m-auto mt-4 p-4 text-white">
        <div className="flex gap-4 text-black p-2">
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            placeholder="Search"
            className="border border-black p-2 rounded-xl w-full "
          />
          <Button disabled={isLoading} onClick={makeSearch} />
        </div>
        <div className="flex relative  flex-col justify-center items-center mt-4 text-white">
          <span className="text-xs text-red-500">{error?.message}</span>

          <div className="h-3 bg-red-100 relative">
            {isLoading && (
              <p className="absolute animate-spin">
                <PiSpinner size={20} />
              </p>
            )}
          </div>

          {currentData ? (
            <div className="flex flex-col w-full">
              <CurrentWeather
                city={city}
                data={currentData}
                isCelsius={celcius}
              />
              <Toggle celcius={celcius} setCelsius={setCelsius} />
              {fiveDaysData && (
                <FiveDaysData data={fiveDaysData} isCelsius={celcius} />
              )}
            </div>
          ) : (
            <Intro />
          )}
        </div>
      </div>
    </div>
  );
}
