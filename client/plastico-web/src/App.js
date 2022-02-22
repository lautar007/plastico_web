import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import Artistic from './components/Artistic';
import Comercial from './components/Comercial';
import Manifest from './components/Manifest';
import Admin from './components/Admin';
import Blog from './components/Blog';
import Form from './components/Form';
import Home from './components/Home';
import Landing from './components/Landing';
import ToDo from './components/ToDo';
import CardBlog from './components/CardBlog';
import NewsDetail from './components/NewsDetail';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path = '/' element = {<Landing/>}/>
        <Route exact path = '/home' element = {<div><NavBar/><Home/></div>}/>
        <Route exact path = '/artistic' element = {<div><NavBar/><Artistic/></div>}/>
        <Route exact path = '/comercial' element = {<div><NavBar/><Comercial/></div>}/>
        <Route exact path = '/manifest' element = {<div><NavBar/><Manifest/></div>}/>
        <Route exact path = '/admin' element = {<div><NavBar/><Admin/></div>}/>
        <Route exact path = '/blog' element = {<div><NavBar/><Blog/></div>}/>
        <Route exact path = '/form' element = {<div><NavBar/><Form/></div>}/>
        <Route exact path = '/plasticos' element ={<div><NavBar/><ToDo/></div>}/>
        <Route exact path = '/card' element ={<div><NavBar/><CardBlog/></div>}/>
        <Route exact path = '/blog/:id' element = {<NewsDetail/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
