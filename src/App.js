import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home'; // Update import statement
import { Menu } from './pages/Menu'; // Update import statement
import { Contact } from './pages/Contact'; // Update import statement

function App() {
  return (
    <div className="App">
      <Router>
          <Link to="/react-training">Home</Link> <br/>
          <Link to="/react-training/Menu">Menu</Link> <br/>
          <Link to="/react-training/Contact">Contact</Link>
          
        <Routes>
          <Route path="/react-training" element={<Home />} /> 
          <Route path="/react-training/Menu" element={<Menu />} /> 
          <Route path="/react-training/Contact" element={<Contact />} /> 
          <Route path="*" element={<div> PAGE NOT FOUND</div>} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
