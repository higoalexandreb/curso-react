import React from 'react';
import './App.css';
import Counter from './Counter'
function App() {
  return (
    <Counter initial={0} valueAdd={2}/>
  );
}

export default App;
