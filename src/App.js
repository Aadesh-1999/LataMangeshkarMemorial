import {Footer} from './Components/Footer';
import './App.css';
import { Header } from './Components/Header';
import {Navbar} from './Components/Navbar';
import { Routes, Route,BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<><Navbar/><Header/><Footer/></>}/>
        <Route path="*" element={<><h1>Page Not Found</h1></>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
