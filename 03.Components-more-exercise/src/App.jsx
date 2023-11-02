import { useState, useEffect } from "react";
import styles from './App.module.css';
import StarWars from "./StarWars";


function App() {
  const [state, setState] = useState([1, 2, 3, 4, 5]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Mount done!')
  }, []);

  useEffect(() => {
    console.log(`Update done on ${count}`);
  }, [count])

  useEffect(() => {
    console.log(`Update done on array length - ${state.length}`);
  }, [state])


  const OnClick = () => {
    setState(x => x.slice(0, -1));

  }

  useEffect(() => {
    setTimeout(() => setCount(x => x + 1), 3000);
  }, [count])

  return (
    <>
      <StarWars />
      <h3>Count: {count}</h3>
      <ul>
        {state.map((x, index) => <li
          key={index}
          className={styles.listItems}
        >
          {x * 2}
        </li>)}
      </ul>

      <button className={styles.button} onClick={OnClick}>Remove Last</button>

    </>
  )
}

export default App
