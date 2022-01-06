import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';
import Artistic from './components/Artistic';
import Comercial from './components/Comercial';
import Manifest from './components/Manifest';
import Admin from './components/Admin';
import Blog from './components/Blog';
import Form from './components/Form';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path = '/' element = {<div><NavBar/><LandingPage/></div>}/>
        <Route exact path = '/artistic' element = {<div><NavBar/><Artistic/></div>}/>
        <Route exact path = '/comercial' element = {<div><NavBar/><Comercial/></div>}/>
        <Route exact path = '/manifest' element = {<div><NavBar/><Manifest/></div>}/>
        <Route exact path = '/admin' element = {<div><NavBar/><Admin/></div>}/>
        <Route exact path = '/blog' element = {<div><NavBar/><Blog/></div>}/>
        <Route exact path = '/form' element = {<div><NavBar/><Form/></div>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
