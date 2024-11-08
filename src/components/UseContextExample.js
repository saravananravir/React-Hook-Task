import React, { useContext } from 'react';

// If ThemeContext.js is in the src/components folder


const UseContextExample = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: darkMode ? '#333' : '#fff', color: darkMode ? '#fff' : '#000', padding: '20px' }}>
      <h2>useContext Example</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default UseContextExample;
