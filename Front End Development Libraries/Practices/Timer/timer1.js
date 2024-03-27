import React, { useState, useEffect } from 'react';

const App = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1);
    }, 1000);

    return () => clearInterval(intervalId); // 在组件卸载时清除定时器
  }, []); // 空依赖项表示只在组件挂载时执行一次

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <h1>{formatTime(timer)}</h1>
      <button onClick={() => {setTimer(0)}}>reset</button>
    </div>
  )  
};

export default App;
