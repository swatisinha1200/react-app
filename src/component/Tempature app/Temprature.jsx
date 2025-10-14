import { useState } from "react";
import { TemperatureConverter } from "./TemperatureConverter";
import "./Temprature.css";

export function Tempature() {
  const [celsius, setCelsius] = useState(0);

  return (
    <div className="container">
      <div className="Box">
        <h1>Temperature Converter</h1>

        <div className="label-input">
          <label htmlFor="celsius">Celsius</label>
          <input
            id="celsius"
            type="number"
            value={celsius}
            onChange={(e) => setCelsius(e.target.value)}
          />
        </div>

        <div className="output-box">
          <TemperatureConverter celsius={celsius} />
        </div>
      </div>
    </div>
  );
}
