// src/components/Question.js
import React, { useState } from "react";

const Question = ({ question, options, correctAnswer, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div>
      <h3>{question}</h3>
      <ul>
        {options.map((option, index) => {
          const isCorrect = option === correctAnswer;
          const isSelected = option === selectedOption;

          return (
            <li
              key={index}
              onClick={() => handleOptionSelect(option)}
              style={{ border: isSelected ? "2px solid blue" : "" }}
            >
              {option}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Question;
