import React from 'react';
import UseStateExample from './components/UseStateExample';
import UseEffectExample from './components/UseEffectExample';
import UseContextExample from './components/UseContextExample';
import UseReducerExample from './components/UseReducerExample';
import UseRefExample from './components/UseRefExample';
// src/App.js
// import React from 'react';
import { ThemeProvider } from '../ThemeContext'; // Ensure this is correctly imported


function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h1>React Hooks Practice</h1>
        <UseStateExample />
        <hr />
        <UseEffectExample />
        <hr />
        <UseContextExample />
        <hr />
        <UseReducerExample />
        <hr />
        <UseRefExample />
      </div>
    </ThemeProvider>
  );
};

export default App;
