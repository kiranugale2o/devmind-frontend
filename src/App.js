import logo from './logo.svg';
import './App.css';
import Singup from './AuthPages/Singup';
import Login from "./AuthPages/Login";
import Navbar from './Navbar/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  NavLink,
  useParams,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import Home from './Component/Home';
import CommentHandle from './PostHandle/CommentHandle';


function App() {
  const pra=useParams();
  console.log(pra)
  return (
    <>
    <Navbar/>
   <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/singup' element={<Singup/>}/>
      <Route path='/' element={<Home/>}>
      <Route path='/profile'/>
          <Route path='/find' />
          <Route path='/postpage'/>
          <Route exact path='/activity'/>
            
      </Route>
    
    
    </Routes>
    </BrowserRouter>
   
   </>
  
    );
}

export default App;