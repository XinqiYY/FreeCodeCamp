const MIN = 0;
const MAX = 100;
export default function ProgressBar({ value }) {
  value = Math.max(MIN, Math.min(MAX, value));

  return (
    <div className="progress">
      <div 
        className='progressBar' 
        style={{ width: `${value}%` }}
        min={MIN}
        max={MAX}
      >
        {value}%
      </div>
    </div>
  )
}
