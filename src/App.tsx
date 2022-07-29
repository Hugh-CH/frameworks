import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [ counter , setCounter ] = useState(0);

  const incrementCounter = ():void => {
    setCounter(counter+1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello World
        </p>
        <h1>
          {counter}
        </h1>
        <button onClick={incrementCounter}>
          Add one
        </button>
      </header>
    </div>
  );
}

export default App;
