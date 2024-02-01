import { WiHumidity, WiWindBeaufort0 } from "react-icons/wi";

import Temperature from "./Temperature";
import Icon from "./Icon";

interface Weather {
  main: string;
  icon: string;
}
export interface WeatherData {
  main: {
    humidity: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  wind: {
    speed: string;
    direction: string;
  };
  weather: Weather[];
}

export default function CurrentWeather({
  data,
  city,
  isCelsius,
}: {
  data: WeatherData;
  city: string;
  isCelsius: boolean;
}) {
  if (data) {
    return (
      <div className="flex flex-col md:flex-row justify-center items-center gap-7">
        <div className="flex flex-col items-center">
          <Icon iconType={data.weather[0].icon} isMain={true} />

          <p className="text-3xl font-bold">{city.toUpperCase()}</p>
        </div>

        <div className="flex flex-col justify-center items-center gap-4 ">
          <div className="flex items-center gap-7">
            <Temperature
              temp={data.main.temp}
              isMain={true}
              isCelsius={isCelsius}
            />
            <span className="text-sm font-bold">{data.weather[0].main}</span>
          </div>

          <p className="text-sm flex gap-4 text-slate-200">
            <span className="flex items-center gap-2">
              max :
              <Temperature temp={data.main.temp_max} isCelsius={isCelsius} />
            </span>
            <span className="flex items-center gap-2">
              min :
              <Temperature temp={data.main.temp_min} isCelsius={isCelsius} />
            </span>
          </p>
        </div>

        <div className="flex gap-7 items-center">
          <div className="flex items-center">
            <WiHumidity size={25} />
            <p className="flex flex-col gap-2">
              <span>{data.main.humidity} %</span>
              <span className="text-xs text-slate-100"> Humidity</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <WiWindBeaufort0 size={25} />
            <p className="flex flex-col gap-2">
              <span>{data.wind.speed} km/h</span>
              <span className="text-xs text-slate-100"> Wind</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
