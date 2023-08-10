
import './App.css';
import {useState, React} from 'react';
function App() {
  const [count, setCounter] = useState(0)
  function updateCount() {
    setCounter(count + 1)
  }

  return (
    <>
    <h1>Button click {count} times</h1>
    <button onClick={updateCount}>click</button>


    </>
  );
}

export default App;
