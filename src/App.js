
import './App.css';
import Home from './home';
import {BrowserRouter,Routes,Route, Link} from 'react-router-dom';
import About from './About';
import Bmiform from './Bmiform';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <nav className="Nav">

            <Link to='/'  className='Nav-Home'>BMI.com</Link>
            <Link to='/about' className='Nav-About'>About</Link>
        </nav>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
      </Routes>
      </BrowserRouter>
      
    
    </div>
    
  );
  
}

export default App;
