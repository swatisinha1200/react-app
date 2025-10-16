import React, { useState } from "react";
import "./Word.css";
import { ButtonSec } from "./ButtonSec";
export const Word = () => {
  const [input, setInput] = useState("");
  const [outputText, setOutputText] = useState("0");

  const characterCount = () => {
    setOutputText(`Characters: ${input.length}`);
  };

  const wordsCountFun = () => {
    const words = input.trim().split(/\s+/).filter((w) => w.length > 0);
    setOutputText(`Words: ${words.length}`);
  };

  const sentCountFun = () => {
    const sentences = input.split(/[.!?]+/).filter((s) => s.trim().length > 0);
    setOutputText(`Sentences: ${sentences.length}`);
  };

  const paraCountFun = () => {
    const paras = input.split(/\n\s*\n/).filter((p) => p.trim().length > 0);
    setOutputText(`Paragraphs: ${paras.length}`);
  };

  const clearText = () => {
    setInput("");
    setOutputText("0");
  };

  const inputText = (e) => setInput(e.target.value);

  return (
    <div className="container">
      <h1>Word Counter</h1>

      <textarea
        name="text"
        id="text"
        cols="30"
        rows="10"
        placeholder="Enter your text here"
        value={input}
        onChange={inputText}
      ></textarea>

      {/* Button section */}
      <ButtonSec
        onWordCount={wordsCountFun}
        onCharCount={characterCount}
        onSentenceCount={sentCountFun}
        onParagraphCount={paraCountFun}
        onClear={clearText}
      />
      {/* Output Section */}
      <div className="output-section mt-3">
        <div className="d-flex align-items-center gap-3">
          <label
            htmlFor="output"
            className="fw-semibold text-primary fw-bold fs-4"
            style={{ minWidth: "110px" }}
          >
            Output:
          </label>
          <input
            id="output"
            type="text"
            className="form-control w-50"
            placeholder="0"
            value={outputText}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};
