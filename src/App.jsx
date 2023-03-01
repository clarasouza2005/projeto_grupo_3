import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import NavBar from './components/NavBar';
import Home from './routes/Home';
import Footer from './components/Footer';


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


import { BrowserRouter,Routes,Route,Link, Outlet } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      
    <NavBar/>
    
    <div className='corpin'>

    <Outlet/>

    </div>
    
    <Footer/>

    </div>
  )
}

export default App
