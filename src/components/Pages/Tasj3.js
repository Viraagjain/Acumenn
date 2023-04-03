import React, { useState } from "react";
import "./task3.css";

export const Contact = () => {
  const [initialInvestment, setInitialInvestment] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [withdrawalFrequency, setWithdrawalFrequency] = useState("monthly");
  const [inflationRate, setInflationRate] = useState("");
  const [roi, setRoi] = useState("");
  const [withdrawalsPerYear, setWithdrawalsPerYear] = useState(12);
  const [totalAmountWithdrawn, setTotalAmountWithdrawn] = useState(0);
  const [numWithdrawals, setNumWithdrawals] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "/api/withdrawals/swp/total_withdrawn/?initial_investment=" +
          initialInvestment +
          "&withdrawal_amount=" +
          withdrawalAmount +
          "&withdrawal_frequency=" +
          withdrawalFrequency +
          "&inflation_rate=" +
          inflationRate +
          "&roi=" +
          roi +
          "&withdrawals_per_year=" +
          withdrawalsPerYear
      );
      const data = await response.json();
      setTotalAmountWithdrawn(data.total_amount_withdrawn);
      setNumWithdrawals(data.num_withdrawals);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App">
    <form onSubmit={handleSubmit}>
      <label>
        Initial Investment:
        <input
          type="text"
          value={initialInvestment}
          onChange={(e) => setInitialInvestment(e.target.value)}
        />
      </label>
      <br />
      <label>
        Withdrawal Amount:
        <input
          type="text"
          value={withdrawalAmount}
          onChange={(e) => setWithdrawalAmount(e.target.value)}
        />
      </label>
      <br />
      <label>
        Withdrawal Frequency:
        <select
          value={withdrawalFrequency}
          onChange={(e) => setWithdrawalFrequency(e.target.value)}
        >
          <option value="monthly">Monthly</option>
          <option value="quarterly">Quarterly</option>
          <option value="semiannually">Semi-annually</option>
          <option value="annually">Annually</option>
        </select>
      </label>
      <br />
      <label>
        Inflation Rate:
        <input
          type="text"
          value={inflationRate}
          onChange={(e) => setInflationRate(e.target.value)}
        />
      </label>
      <br />
      <label>
        ROI:
        <input
          type="text"
          value={roi}
          onChange={(e) => setRoi(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Calculate</button>
    </form>
    <br />
    {totalAmountWithdrawn !== 0 && (
      <div>
        <h2>Results:</h2>
        <p>Total Amount Withdrawn: {totalAmountWithdrawn}</p>
        <p>Number of Withdrawals: {numWithdrawals}</p>
      </div>
    )}
  </div>
  );
};
