import React, { useCallback, useState } from 'react';

const CodeMirror = () => {
  const [value, setValue] = useState('');
  let throttleTimer = null;
  const delay = 500; // 设置节流的时间间隔为500ms

  // Throttle the handleChange function to execute once every 500ms
  const handleChange = (event) => {
    if (!throttleTimer) {
      // 如果节流计时器为空，则执行回调函数并设置一个新的计时器
      setValue(event.target.value);

      throttleTimer = setTimeout(() => {
        console.log(event.target.value); // 在这里处理更改
        throttleTimer = null; // 执行完毕后重置计时器
      }, delay);
    }
  };

  return (
    <input
      value={value}
      onChange={handleChange}
      style={{ width: '80%', marginTop: '20px', height: '300px', fontFamily: 'monospace' }}
    />
  );
};

export default CodeMirror;
