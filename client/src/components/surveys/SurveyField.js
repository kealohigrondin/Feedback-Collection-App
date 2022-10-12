import React from "react";

export default function SurveyField({ input, label }) {
  return (
    <div className="field">
      <label>{label}</label>
      <input {...input} placeholder={label} />
    </div>
  );
}
