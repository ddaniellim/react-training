import "./App.css";
import Test from "./test";
import {useState} from "react"; 

function App() {
    const [count, setCount] = useState(0);
    const updateNumber = (event) => {
      switch(event.target.innerText){
        case 'Increase' : 
          setCount(count + 1); 
          break;
        case 'Decrease' : 
          setCount(count - 1);
          break;
        case 'Set to zero' : 
          setCount(0)
          break;
      }
    };

  return (
    <div className="App">
      <button onClick={updateNumber}>Increase</button>
      <button onClick={updateNumber}>Decrease</button>
      <button onClick={updateNumber}>Set to zero</button>

      <br/>
      {count}
    </div>
  );
}

export default App;
