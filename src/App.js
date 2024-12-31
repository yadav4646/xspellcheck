import React, { useState } from "react";
import "./App.css";

const dictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

function SpellChecker() {
  const [text, setText] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const onTextChange = (event) => {
    const enteredText = event.target.value;
    setText(enteredText);

    // Split the input into words and compare against the dictionary
    const inputWords = enteredText.split(" ");
    const corrections = inputWords.map((word) => {
      const replacement = dictionary[word.toLowerCase()];
      return replacement || word;
    });

    // Find the first correction to suggest
    const firstMismatch = corrections.find(
      (corrected, idx) => corrected !== inputWords[idx]
    );

    setSuggestion(firstMismatch || "");
  };

  return (
    <div className="spell-checker">
      <h1>Real-Time Spell Checker</h1>
      <textarea
        value={text}
        onChange={onTextChange}
        placeholder="Type here..."
        rows={5}
        cols={40}
      />
      {suggestion && (
        <p>
          Did you mean: <strong>{suggestion}</strong>?
        </p>
      )}
    </div>
  );
}

export default SpellChecker;
