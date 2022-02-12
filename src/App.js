import { Footer } from './Components/Footer';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Main } from './Components/Main';
import { About } from './Pages/About';
import { Songs } from './Pages/Songs';
import { Facts } from './Pages/Facts';
import { MarathiSongs } from './Pages/MarathiSongs';
import { HindiSongs } from './Pages/HindiSongs';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<><Navbar /><Main /><Footer /></>} />
          <Route path="/facts" element={<><Navbar /><Facts /><Footer /></>} />
          <Route path="/about" element={<><Navbar /><About /><Footer /></>} />
          <Route path="/songs" element={<><Navbar /><Songs /><Footer /></>}>
            <Route path='hindi' element={<HindiSongs />} />
            <Route path='marathi' element={<MarathiSongs />} />
          </Route>
          <Route path="*" element={<><h1 style={{ height: "100vh" }} className="p-5">Page Not Found!</h1></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
