import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home'; // Update import statement
import { Menu } from './pages/Menu'; // Update import statement
import { Contact } from './pages/Contact'; // Update import statement
import { useState, createContext } from 'react';

export const AppContext = createContext();

function App() {
  const [ userName, setUsername ] = useState("");

  return (
    <div className="App">
      <AppContext.Provider value={{ userName, setUsername }}>
        <Router>
            <Link to="/react-training">Home</Link> <br/>
            <Link to="/react-training/Menu">Menu</Link> <br/>
            <Link to="/react-training/Contact">Change username</Link>
            
          <Routes>
            <Route path="/react-training" element={<Home />} /> 
            <Route path="/react-training/Menu" element={<Menu />} /> 
            <Route path="/react-training/Contact" element={<Contact />} /> 
            <Route path="*" element={<div> PAGE NOT FOUND</div>} /> 
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
