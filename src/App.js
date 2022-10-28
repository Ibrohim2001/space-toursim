import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/home/Home';
import Destination from './routes/destination/Destination';
import Crew from './routes/crew/Crew';
import Technology from './routes/technology/Technology';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="app">
      <Router>
        {/* <Navbar/> */}
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/destinations' element={<Destination/>}/>
          <Route path='/crew' element={<Crew/>}/>
          <Route path='/technology' element={<Technology/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
