import "./App.css";
import Test from "./test";

function App() {
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true }
  ];
  return (

    <div className="App">
      { 
        planets.map((planet, key) => {
          return planet.isGasPlanet && <Test key={key} name={planet.name}/>
        })
      }
    </div>
  );
}

export default App;
