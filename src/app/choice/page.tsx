import React from "react";
import { useNavigate } from "react-router-dom";
import { regions } from "./regionData";
import Box from "@/components/choice/molecule/Box.molecule";

export default function ChoicePage() {
  const navigate = useNavigate();

  const handleRegionSelect = (id: number) => {
    // 선택된 부위를 기반으로 설문 페이지로 이동
    navigate(`/survey?region=${id}`);
  };

  return (
    <div className="choice-page">
      <h1>부위 선택</h1>
      <div className="region-list">
        {regions.map((region) => (
          <Box
            key={region.id}
            text={region.name}
            onClick={() => handleRegionSelect(region.id)}
          />
        ))}
      </div>
    </div>
  );
}

