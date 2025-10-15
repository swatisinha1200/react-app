import "./Temprature.css";

export function TemperatureConverter( props ) {
  const fahrenheit = (props.celsius * 9) / 5 + 32;
  const kelvin = parseFloat(props.celsius) + 273.15;

  return (
    <>
      <div className="label-input">
        <label>Fahrenheit</label>
        <input type="number" value={fahrenheit.toFixed(2)} readOnly />
      </div>

      <div className="label-input">
        <label>Kelvin</label>
        <input type="number" value={kelvin.toFixed(2)} readOnly />
      </div>
    </>
  );
}
