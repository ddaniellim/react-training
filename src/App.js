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
      <button className="p-1 border-4 m-2" onClick={updateNumber}>Increase</button>
      <button className="p-1 border-4 m-2" onClick={updateNumber}>Decrease</button>
      <button className="p-1 border-4 m-2" onClick={updateNumber}>Set to zero</button>

      <br/>
      {count}
    </div>
  );
}

export default App;
