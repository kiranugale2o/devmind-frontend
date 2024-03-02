import React, { useState } from "react";
import "./auth.css";
import { NavLink} from "react-router-dom";
export default function Singup(){

       const [fname,setFname]=useState("");
       const [email,setEmail]=useState("");
       const [uname,setUname]=useState("");
       const [password,setPass]=useState("");

       const handleInput=async(e)=>{
       e.preventDefault();
         const user={
            fname,
            email,
            uname,
            password
         }
         console.log(user)
       }
    return(
        <>
             <div className="border rounded shadow-sm p-3 mb-5 rounded bg-background-primary" id="singup-form">
                <form  style={{display:"block"}} autoComplete="" onSubmit={handleInput} >
                    <div className="text-center h3" style={{margin:"10px auto",fontWeight:"500"}}>Singup</div>
                    <br/>
                    <input type="text" value={fname} onChange={(e)=>setFname(e.target.value)} class="form-control border border-secondary-subtle" style={{width:"90%",margin:"auto"}} id="exampleFormControlInput1" placeholder="full Name"/>
                   
                    <br/>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} class="form-control border border-secondary-subtle" style={{width:"90%",margin:"auto"}} id="exampleFormControlInput1" placeholder="Email"/>
                     <br/>
                     <input type="text" value={uname} onChange={(e)=>setUname(e.target.value)} class="form-control border border-secondary-subtle" style={{width:"90%",margin:"auto"}} id="exampleFormControlInput1" placeholder="Username"/>
                     <br/>
                    <input type="password" value={password} onChange={(e)=>setPass(e.target.value)} class="form-control border border-secondary-subtle" style={{width:"90%",margin:"auto"}} id="exampleFormControlInput1" placeholder="Create password"/>
                    <br/>
                     <button className="btn btn-primary" type="submit" style={{width:"90%",margin:"auto 15px",fontWeight:"500"}} >Singup</button>
                    <div className="text-center" style={{margin:"5px auto"}}>Already have an account? 
                    <NavLink to="/login"  style={{textDecoration:"none",}}>login </NavLink>
                    </div>
                </form>
             </div>
        </>
    );
}