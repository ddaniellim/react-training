import "./App.css";
import Test from "./test";

function App() {
  return (
    <div className="App">
      <Test name="Bryan Garate" salary={100000} position="developer" company="orro"/>
      <Test name="Deux Lim" salary={31000} position="developer" company="orro"/>
      <Test name="Nicole Zuniega" salary={60000} position="developer" company="orro"/>
    </div>
  );
}

export default App;
