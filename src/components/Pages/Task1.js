import React, { useState } from "react";
import "./task1.css";
export const About = () => {
  const [targetValue, setTargetValue] = useState("");
  const [annualReturn, setAnnualReturn] = useState("");
  const [years, setYears] = useState("");
  const [requiredSIP, setRequiredSIP] = useState("");

  const handleCalculateSIP = () => {
    fetch(`/api/investment/sip/required/?target_value=${targetValue}&annual_rate_of_return=${annualReturn}&years=${years}`)
      .then((response) => response.json())
      .then((data) => setRequiredSIP(data.required_sip))
      .catch((error) => console.error(error));
  };
  return (
<div>
      <div>
        <label htmlFor="targetValue">Target Value:</label>
        <input
          type="number"
          id="targetValue"
          name="targetValue"
          value={targetValue}
          onChange={(e) => setTargetValue(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="annualReturn">Annual Rate of Return:</label>
        <input
          type="number"
          id="annualReturn"
          name="annualReturn"
          value={annualReturn}
          onChange={(e) => setAnnualReturn(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="years">Investment Duration in Years:</label>
        <input
          type="number"
          id="years"
          name="years"
          value={years}
          onChange={(e) => setYears(e.target.value)}
        />
      </div>
      <button onClick={handleCalculateSIP}>Calculate Required SIP</button>
      {requiredSIP && (
        <p>
          Required SIP: <strong>{requiredSIP}</strong>
        </p>
      )}
    </div>
  );
};




