import logo from './logo.svg';
import './App.css';
import Singup from './AuthPages/Singup';
import Login from "./AuthPages/Login";
import Navbar from './Navbar/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import Home from './Component/Home';
import Post from './Component/Post';

function App() {
  return (
   
    <div className="App">
     <Navbar/>
     <Router>
                <Routes>
                    {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
                    <Route
                        exact
                        path="/"
                        element={<Home/>}
                    />
 
                    {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
                    <Route
                        path="/login"
                        element={<Login/>}
                    />
 
                    {/* This route is for contactus component
          with exact path "/contactus", in 
          component props we passes the imported component*/}
                    <Route
                        path="/singup"
                        element={<Singup />}
                    />
 
                    {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
                    {/* <Redirect to="/" /> */}
                    <Route
                        path="*"
                        element={<Navigate to="/" />}
                    />
                </Routes>
            </Router>
        
    </div>
  );
}

export default App;
