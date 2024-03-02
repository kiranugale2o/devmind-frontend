import React, { useState } from "react";
import { NavLink} from "react-router-dom";
export default function Login(){

    const [uname,setUname]=useState("");
    const[password,setPass]=useState("");

    const handleLogin=async(e)=>{
     
       e.preventDefault();
       const user={
        uname,
        password
       }

       console.log(user);
    }
    return(
        <>
           <div className="border rounded shadow-sm p-3 mb-5 rounded bg-background-primary" id="login-form">
                <form  style={{display:"block"}} autoComplete="off" onSubmit={handleLogin}  >
                    <div className="text-center h3" style={{margin:"10px auto",fontWeight:"500"}}>Login</div>
                    <br/>
                    <input type="text" value={uname} onChange={(e)=>setUname(e.target.value)} class="form-control border border-secondary-subtle" style={{width:"90%",margin:"auto"}} id="exampleFormControlInput1" placeholder="Username"/>
                     <br/>
                    <input type="password" value={password} onChange={(e)=>setPass(e.target.value)} class="form-control border border-secondary-subtle" style={{width:"90%",margin:"auto"}} id="exampleFormControlInput1" placeholder="password"/>
                    <br/>
                     <button className="btn btn-primary" type="submit" style={{width:"90%",margin:"auto 15px",fontWeight:"500"}} >Log in</button>
                
                   <hr style={{margin:"30px 0px"}}></hr>

                   <div className="text-center" style={{margin:"5px auto"}}>Don't have an account?
                    <NavLink to="/singup"  style={{textDecoration:"none",fontWeight:"600" ,}}>Singup </NavLink>
                    </div>
                 
                    </form>
             </div> 
        </>
    )
}