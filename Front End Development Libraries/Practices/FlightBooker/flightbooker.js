import './styles.css';
import React, {useState} from 'react';

export default function App() {
  const [isOneWay, setIsOneWay] = useState(false);
  const [fromDate, setFromDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    if (!isOneWay && isValidDate()) {
      alert(`You have booked a return flight, departing on ${fromDate} and returning on ${returnDate}`)
    } else if (isOneWay) {
      alert(`You have booked a one-way flight on ${fromDate}`);
    } else {
      alert('Please enter valid date.')
    }
  }

  function isValidDate() {
    return fromDate <= returnDate;
  }

  return (
    <form onSubmit={handleSubmit}>
      <select>
        <option>One-way Flight</option>
        <option onClick={() => setIsOneWay(!isOneWay)}>Return Flight</option>
      </select>
      <br />
      <input type="date" onChange={(e) => setFromDate(e.target.value)} required/>
      {
        !isOneWay && 
        <input type='date' onChange={(e) => setReturnDate(e.target.value)} required/>
      }

      <br />
      <button>Submit</button>
    </form>
  );
}
