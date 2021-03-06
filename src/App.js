import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Nav from './components/nav/Nav';

function App() {
  return (
   
    <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>

  );
}

export default App;
