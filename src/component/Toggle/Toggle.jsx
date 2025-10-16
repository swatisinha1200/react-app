import React from "react";
import { useState } from "react";
export const Toggle = () => {
  const [mode, setMode] = useState("light");
 
  function toggleMode() {
                if (mode === "light") {
              setMode("dark");  
              document.body.style.backgroundColor = "black";
              document.body.style.color = "white";
            } else {
              setMode("light");
              document.body.style.backgroundColor = "white";
              document.body.style.color = "black";
            }   

  }
  return (
    <div>
      <div class="form-check form-switch">
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="switchCheckDefault"
          onClick={toggleMode}
        ></input>
        <label class="form-check-label" for="switchCheckDefault">
        {mode==="light"? "Light Mode":"Dark Mode"}
        </label>
      </div>
    </div>
  );
};
