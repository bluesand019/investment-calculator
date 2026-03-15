import React from "react";
import { formatter } from "../util/investment.js";

// const annualData = calculateInvestmentResults({
//   initialInvestment: 15000,
//   annualInvestment: 1200,
//   expectedReturn: 6,
//   duration: 10,
// });

const Result = ({ results }) => {
    
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map(element => {
           return <tr>
                <td>{element.year}</td>
                <td>{formatter.format(Math.ceil(element.valueEndOfYear))}</td>
                <td>{formatter.format(Math.ceil(element.interest))}</td>
                <td>{formatter.format(Math.ceil(element.totalInterest))}</td>
                <td>{formatter.format(Math.ceil(element.investedCapital))}</td> 
            </tr>
        })}
      </tbody>
    </table>
  );
};

export default Result;
