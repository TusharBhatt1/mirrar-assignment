export default function Temperature({
    temp,
    isCelsius,
    isMain = false,
  }: {
    temp: number | string;
    isCelsius: boolean;
    isMain?: boolean;
  }) {
    return (
      <div className={`flex items-center ${isMain ? "text-xl font-bold" : "text-xs"}`}>
        <span style={{ minWidth: "50px", textAlign: "center" }}>
          {isCelsius ? (
            <>{parseFloat(temp as string).toFixed(2)} °C </>
          ) : (
            <>{((parseFloat(temp as string) * 9) / 5 + 32).toFixed(2)} °F</>
          )}
        </span>
      </div>
    );
  }
  