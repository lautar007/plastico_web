import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import Artistic from './components/Artistic';
import Comercial from './components/Comercial';
import Admin from './components/Admin';
import Blog from './components/Blog';
import Form from './components/Form';
import Home from './components/Home';
import Landing from './components/Landing';
import CardBlog from './components/CardBlog';
import NewsDetail from './components/NewsDetail';
import PostDetail from './components/PostDetail';
import PostAdmin from './components/PostAdmin';
import Footer from './components/Footer';
import Pasantias from './components/Pasantias';
import Staff from './components/Staff';
import Busqueda from './components/Busqueda';
import Galeria from './components/Galeria';
import Plastiverso from './components/Plastiverso'
import Hardcode from './components/Hardcode';
import Edicion from './components/Edicion';



function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path = '/' element = {<Landing/>}/>
        <Route exact path = '/home' element = {<div><Home/><Footer/></div>}/>
        <Route exact path = '/artistic' element = {<div><NavBar/><Artistic/></div>}/>
        <Route exact path = '/artistic/:id' element ={<div><NavBar/><PostDetail/></div>}/>
        <Route exact path = '/comercial' element = {<div><NavBar/><Comercial/></div>}/>
        <Route exact path = '/admin' element = {<div><NavBar/><Admin/></div>}/>
        <Route exact path = '/blog' element = {<div><NavBar/><Blog/></div>}/>
        <Route exact path = '/aslfi234234/form' element = {<div><NavBar/><Form/></div>}/>
        <Route exact path = '/card' element ={<div><NavBar/><CardBlog/></div>}/>
        <Route exact path = '/blog/:id' element = {<div><NavBar/><NewsDetail/></div>}/>
        <Route exact path = '/greio237564/adminPost' element = {<div><NavBar/><PostAdmin/></div>}/>
        <Route exact path = '/enkia924928/editionPost/:id' element = {<div><NavBar/><Edicion/></div>}/>
        <Route exact path = '/ewrju847205/pasantias' element = {<div><NavBar/><Pasantias/></div>}/>
        <Route exact path = '/staff' element = {<div><NavBar/><Staff/></div>}/>
        <Route exact path = '/busqueda/:search' element = {<div><NavBar/><Busqueda/></div>}/>
        <Route exact path = '/galeria/:id' element = {<div><NavBar/><Galeria/></div>}/>
        <Route exact path = '/plastiverso' element = {<div><NavBar/><Plastiverso/></div>}/>
        <Route exact path = '/hardcode' element = {<div><Hardcode/><Footer/></div>}/>
        
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
