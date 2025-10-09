import { useState } from "react";
import { TemperatureConverter } from "./TemperatureConverter";
export function Tempature() {
      const [celsius, setCelsius] = useState(0);

    return (        
        <div>
          <div style={{ padding: "20px" }}>
      <h1>Temperature Converter</h1>
      <label>
        Celsius:
        <input
          type="number"
          value={celsius}
          onChange={(e) => setCelsius(e.target.value)}
        />
      </label>

      <TemperatureConverter celsius={celsius} />
    </div>
    </div>
  );
}

