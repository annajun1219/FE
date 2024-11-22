import React from "react";
import { useLocation } from "react-router-dom";

export default function SurveyPage() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const regionId = query.get("region");

  return (
    <div className="survey-page">
      <h1 className="text-center text-2xl font-bold">설문 조사</h1>
      <p className="text-center">선택된 부위 ID: {regionId}</p>
      {/* 선택된 부위에 따라 설문지를 표시할 수 있도록 확장 가능 */}
    </div>
  );
}
