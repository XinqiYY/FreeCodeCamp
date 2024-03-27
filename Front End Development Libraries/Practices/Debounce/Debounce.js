import React, { useCallback, useState } from 'react';

const CodeMirror = () => {
  const [value, setValue] = useState('');
  let debounceTimer = null;

  // Debounce the handleChange function to execute after the user stops typing for 500ms
  const handleChange = (event) => {
    clearTimeout(debounceTimer);

    setValue(event.target.value);

    debounceTimer = setTimeout(() => {
      console.log(event.target.value); // You can handle the changes here
    }, 500);
  };

  return (
    <input
      value={value}
      onChange={handleChange}
      style={{ width: '80%', marginTop: '20px', height: '300px', fontFamily: 'monospace' }}
    />
  );
};