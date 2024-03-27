import React, { useState, useEffect } from 'react';

const App = () => {
  const [time, setTime] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(false); // 控制是否启动定时器

  useEffect(() => {
    let timer;
    if (isTimerActive && time > 0) { // 只有在定时器处于激活状态且输入时间大于0时才启动定时器
      timer = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(timer); // 组件卸载时清除定时器
  }, [isTimerActive, time]); // 依赖项包括 isTimerActive 和 time (可以没有time)

  const handleChange = (e) => {
    setTime(parseInt(e.target.value));
    if (parseInt(e.target.value) > 0) {
      setIsTimerActive(true); // 当输入时间大于0时，启动定时器
    } else {
      setIsTimerActive(false); // 否则停止定时器
      setTime(0);
    }
  }

  function formatTime(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  } 

  return (
    <div>
      <h1>Timer</h1>
      <input type='number' onChange={handleChange} />
      <h3>{formatTime(time)}</h3>
    </div>
  )
};

export default App;
