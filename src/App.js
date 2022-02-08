import {Footer} from './Components/Footer';
import './App.css';
import {Navbar} from './Components/Navbar';
import { Routes, Route,BrowserRouter as Router } from "react-router-dom";
import { Main } from './Components/Main';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<><Navbar/><Main/><Footer/></>}/>
        <Route path="*" element={<><h1>Page Not Found</h1></>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
