
import React from "react";
import './../styles/App.css';
import { includes } from "cypress/types/lodash";

const App = () => {
  const [count , setCount ] = useState(0) 
    const increment = ()=>{ 
      setCount(count + 1); 
    }
  return (
    <div>
        <p>Button Clicked {count} times</p>
        <button onClick={increment}>Click me</button>
    </div>
  )
}

export default App
