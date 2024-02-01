import { BiToggleLeft } from "react-icons/bi";
import { BiToggleRight } from "react-icons/bi";

export default function Toggle({
  celcius,
  setCelsius,
}: {
  celcius: boolean;
  setCelsius: (value: boolean) => void;
}) {
  return (
    <button onClick={() => setCelsius(!celcius)}>
      {celcius ? (
        <div className="flex gap-2 justify-center items-center text-slate-50">
          <BiToggleLeft size={40} />
          °C{" "}
        </div>
      ) : (
        <div className="flex gap-2 justify-center items-center text-slate-50">
          <BiToggleRight size={40} /> °F
        </div>
      )}
    </button>
  );
}
