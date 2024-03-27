import './styles.css';
import React, {useState, useEffect} from 'react';

function ProgressBar() {
  const [startTransition, setStartTransition] = useState(false);

  useEffect(() => {
    if (!startTransition) {
      setStartTransition(true);
    }
  });

  return (
    <div className='progress'>
      <div 
        className={startTransition ? 'progressBar progressBar--filled' : 'progressBar'}
      >
      </div>
    </div>
  )
}

export default function App() {
  const [bars, setBars] = useState([]);

  const handleAdded = () => {
    const newBars = [...bars, <ProgressBar key={bars.length} />];
    setBars(newBars);
  }

  return (
    <div>
      <button onClick={handleAdded}>Add</button>
      {
        bars.map((bar, index) => <div key='index'>{bar}</div>)
      }
    </div>
  );
}
