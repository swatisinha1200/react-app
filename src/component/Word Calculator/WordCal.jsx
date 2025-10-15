import React, { useState } from "react";

export const WordCal = () => {
  const [count, setCount] = useState(0);
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleCount = () => {
    const words = inputText.trim().split(/\s+/);
    setCount(words.filter((word) => word.length > 0).length);
  };

  return (
    <div className="container-fluid m-4 p-2">
      <div className="d-flex flex-column align-items-center justify-content-center mt-5 p-2 border border-dark rounded w-50 mx-auto bg-secondary-subtle">
        <div className="m-4 p-4">
          <h1 className="text-center text-danger-emphasis">Word Calculator</h1>

          <div className="input-group mb-3 m-2 p-2">
            <input
              type="text"
              className="form-control"
              placeholder="Input text"
              value={inputText}
              onChange={handleChange}
            />
          </div>

          <div className="btn">
            <button type="button" className="btn btn-warning" onClick={handleCount}>
              Word Count
            </button>
          </div>

          <div className="input-group mb-3 m-2 p-2">
            <input
              type="number"
              className="form-control"
              placeholder="0"
              readOnly
              value={count}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
