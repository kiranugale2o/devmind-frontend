import React, { useState } from "react";
import { NavLink, json} from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Login(){
    const navigate=useNavigate();
    const [userName,setUname]=useState("");
    const[password,setPass]=useState("");

    const handleLogin=async(e)=>{
     
       e.preventDefault();
       const user={
        userName,
        password
       }

       fetch('https://backendofdevmind-1.onrender.com/user/login',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
       }).then((res)=>res.json().then((data)=>{
          if(res.status===200){
            
            if(data.status===0){
                navigate('/')
            }else{
                console.log(data.message)
                alert(data.message)
            }
              
          }else{
            console.log("ss"+data)
          }

       } ))
         
    }
    return(
        <>
           <div className="border rounded shadow-sm p-3 mb-5 rounded bg-background-primary" id="login-form">
                <form  style={{display:"block"}} autoComplete="off" onSubmit={handleLogin}  >
                    <div className="text-center h3" style={{margin:"10px auto",fontWeight:"500"}}>Login</div>
                    <br/>
                    <input type="text" value={userName} onChange={(e)=>setUname(e.target.value)} class="form-control border border-secondary-subtle" style={{width:"90%",margin:"auto"}} id="exampleFormControlInput1" placeholder="Username"/>
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