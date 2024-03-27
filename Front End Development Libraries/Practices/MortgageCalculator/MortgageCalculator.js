import React, { useState } from 'react';

const MortgageCalculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);

  const calculateMortgage = () => {
    // Convert input values to numbers
    const amount = parseFloat(loanAmount);
    const rate = parseFloat(interestRate);
    const term = parseInt(loanTerm);

    // Calculate monthly interest rate and total number of payments
    const monthlyInterestRate = rate / 1200; // APR to monthly
    const totalPayments = term * 12;

    // Calculate monthly mortgage payment
    const monthlyPaymentValue =
      (amount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -totalPayments));

    // Calculate total payment amount and total interest paid
    const totalPaymentValue = monthlyPaymentValue * totalPayments;
    const totalInterestValue = totalPaymentValue - amount;

    // Update state with rounded results
    setMonthlyPayment(monthlyPaymentValue.toFixed(2));
    setTotalPayment(totalPaymentValue.toFixed(2));
    setTotalInterest(totalInterestValue.toFixed(2));
  };

  return (
    <div>
      <h2>Mortgage Calculator</h2>
      <form>
        <label>
          Loan Amount ($):
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
        </label>
        <br />

        <label>
          Annual Interest Rate (%):
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
        </label>
        <br />

        <label>
          Loan Term (Years):
          <input
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
          />
        </label>
        <br />

        <button type="button" onClick={calculateMortgage}>
          Calculate
        </button>
      </form>

      {monthlyPayment && (
        <div>
          <h3>Results:</h3>
          <p>Monthly Payment: ${monthlyPayment}</p>
          <p>Total Payment: ${totalPayment}</p>
          <p>Total Interest Paid: ${totalInterest}</p>
        </div>
      )}
    </div>
  );
};

export default MortgageCalculator;
