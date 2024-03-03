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


function App() {
  const pra=useParams();
  console.log(pra)
  return (
    <>
    <Navbar/>
   <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Home/>}>
          <Route path='/profile' element={<>profile</>}/>
          <Route path='/findaa' element={<>find</>}/>
          <Route path='/postpage' element={<>Post</>}/>
          <Route exact path='/activity' element={<>activity</>}/>
        
      </Route>
    </Routes>
    </BrowserRouter>
   
   </>
  
    );
}

export default App;