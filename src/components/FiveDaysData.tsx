import Icon from "./Icon";
import Temperature from "./Temperature";

interface FiveDaysProps {
  dt_txt: string;
  main: { temp: number };
  weather: { icon: string; main: string }[];
}

interface FiveDaysDataProps {
  data: FiveDaysProps[];
  isCelsius: boolean;
}

export default function FiveDaysData({ data, isCelsius }: FiveDaysDataProps) {
  const averageTemp: number =
    data.reduce((acc, current) => acc + current.main.temp, 0) / data.length;

  return (
    <div className="mt-4 flex flex-col items-center justify-center gap-0 border border-slate-100 p-2 rounded-md w-full">
      <div className="grid grid-cols-5 text-xs gap-4">
        {data.map((d, index) => (
          <div
            key={index}
            className={`px-2 flex flex-col justify-center items-center gap-2 ${
              index < 4 && "border-r border-slate-50"
            }`}
          >
            <p className="flex text-center items-center justify-center text-blue-500">
              {d.dt_txt.slice(0, 10)}
            </p>
            <Temperature temp={d.main.temp} isCelsius={isCelsius} />
            <Icon iconType={d.weather[0].icon} isMain={false} />
            <p>{d.weather[0].main}</p>
          </div>
        ))}

        <p className="font-bold flex gap-1 justify-center items-center ml-12">
          Average
          <Temperature temp={averageTemp.toFixed()} isCelsius={isCelsius} />
        </p>
      </div>
    </div>
  );
}
