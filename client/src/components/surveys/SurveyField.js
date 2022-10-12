import React from "react";

export default function SurveyField({
  input,
  label,
  meta: { error, touched },
}) {
  const fieldClass = () => {
    return touched && error ? "required field error" : "required field";
  };

  return (
    <div className={fieldClass()}>
      <label>{label}</label>
      <input {...input} placeholder={label} />
      {error && touched ? (
        <span style={{ color: "#9f3a38" }}>{error}</span>
      ) : null}
    </div>
  );
}
