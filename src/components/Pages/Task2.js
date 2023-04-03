import React, { useState } from 'react';
import "./task2.css";

export const Blog = () => {
  const [investmentData, setInvestmentData] = useState({
    initial_investment: 10000000,
    withdrawal_amount: 1064700,
    withdrawal_frequency: 'annually',
    num_withdrawals: 10,
    inflation_rate: 0.075,
    roi: 0.08,
  });

  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInvestmentData({ ...investmentData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // make API call and update results state
    // code for API call and state update
  };

  return (
    <div className="App">
    <h1>Investment Calculator</h1>
    <form onSubmit={handleSubmit}>
      <label>
        Initial Investment:
        <input
          type="number"
          name="initial_investment"
          value={investmentData.initial_investment}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Withdrawal Amount:
        <input
          type="number"
          name="withdrawal_amount"
          value={investmentData.withdrawal_amount}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Withdrawal Frequency:
        <select
          name="withdrawal_frequency"
          value={investmentData.withdrawal_frequency}
          onChange={handleInputChange}
        >
          <option value="annually">Annually</option>
          <option value="semiannually">Semiannually</option>
          <option value="quarterly">Quarterly</option>
          <option value="monthly">Monthly</option>
        </select>
      </label>
      <label>
        Number of Withdrawals:
        <input
          type="number"
          name="num_withdrawals"
          value={investmentData.num_withdrawals}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Inflation Rate:
        <input
          type="number"
          name="inflation_rate"
          value={investmentData.inflation_rate}
          onChange={handleInputChange}
        />
      </label>
      <label>
        ROI:
        <input
          type="number"
          name="roi"
          value={investmentData.roi}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Calculate</button>
    </form>
    {results.length > 0 && (
      <table>
        <thead>
          <tr>
            <th>Current Investment</th>
            <th>Investment Growth</th>
            <th>Withdrawal Number</th>
            <th>Withdrawal Per Period</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index}>
              <td>{result.current_investment}</td>
              <td>{result.investment_growth}</td>
              <td>{result.withdrawal}</td>
              <td>{result.withdrawal_per_period}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
  );
};
