import logo from './logo.svg';
import './App.css';
import Display from './View/Display';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom"
import Landing from './View/Landing';
import Planets from './components/Planets';
import People from './components/People';

function App() {

  

  return (
    <div className="App">
      <Home />
      <Routes>
        <Route path="planets/:id" element={<Planets />} />
        <Route path="people/:id" element={<People />} />
      </Routes>
    </div>
  );
}

export default App;
