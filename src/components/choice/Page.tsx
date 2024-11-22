import React from "react";
import Box from "./molecule/Box.molecule";

export default function ChoicePage() {
  const symptoms = ["어지럽다", "옆머리가 아프다", "목이 뻣뻣하다"];

  return (
    <div>
      <h1>증상 선택</h1>
      <div>
        {symptoms.map((symptom, index) => (
          <Box key={index} text={symptom} />
        ))}
      </div>
    </div>
  );
}
