export  function TemperatureConverter(props) {
  const fahrenheit = (props.celsius * 9) / 5 + 32;

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Converted Temperature:</h2>
      <p>{props.celsius}°C = {fahrenheit}°F</p>
    </div>
  );
}
