import React, { useEffect } from "react";
import { useState } from "react";
import { calculateInvestmentResults } from "../util/investment.js";


const UserInput = ( { setResults }) => {
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [annualInvestment, setAnnualInvestment] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState(0);
  const handleInitialInvestment = (e) => {
    setInitialInvestment(Number(e.target.value));
  };
  const handleAnnualInvestment = (e) => {
    setAnnualInvestment(Number(e.target.value));
  };
  const handleExpectedReturn = (e) => {
    setExpectedReturn(Number(e.target.value));
  };
  const handleDuration = (e) => {
    setDuration(Number(e.target.value));
  };
  useEffect(() => {
    const results = calculateInvestmentResults({
    initialInvestment: initialInvestment,
    annualInvestment: annualInvestment,
    expectedReturn: expectedReturn,
    duration: duration
  })
  setResults(results);
  }, [initialInvestment, annualInvestment, expectedReturn, duration, setResults])
  
  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input
            type="number"
            onChange={(e) => handleInitialInvestment(e)}
            value={initialInvestment}
            min={0}
          />
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input
            type="number"
            onChange={(e) => handleAnnualInvestment(e)}
            value={annualInvestment}
            min={0}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input
            type="number"
            onChange={(e) => handleExpectedReturn(e)}
            value={expectedReturn}
            min={0}
          />
        </p>

        <p>
          <label>DURATION</label>
          <input
            type="number"
            onChange={(e) => handleDuration(e)}
            value={duration}
            min={0}
          />
        </p>
      </div>
    </div>
  );
};

export default UserInput;
