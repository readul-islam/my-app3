// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">


     <Counter></Counter>
   
    </div>
  );
}

function Counter(){
  
 let [count, setCount] = useState(50);
  const Increment = () => setCount(count+1);
  const decrement = () => setCount(count-1);
  
  return (
    <div>
      <h1>{count}</h1>
      <button onClick = {Increment}>Increment</button>
      <button onClick = {decrement}>decrement</button>
      
      
    </div>
  )
}

export default App;
