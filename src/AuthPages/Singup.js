import React, { useState } from "react";
import "./auth.css";
import { NavLink} from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes,getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {imageHandler} from "./firebase";

export default function Singup(){
       const navigate=useNavigate();
       const [Name,setFname]=useState("");
       const [email,setEmail]=useState("");
       const [userName,setUname]=useState("");
       const [password,setPass]=useState("");
       const[bio,setBio]=useState("");
       const[userImg,setImg]=useState("");
       const[language,setLang]=useState("");
       
       
       const handleInput=async(e)=>{
       e.preventDefault();
       console.log(userImg)
       const url=await imageHandler(userImg);
       setImg(url);
       console.log(url)
         const user={
             Name,
             userName,
            email,
            password,
            bio,
            userImg,
            language,
            
         }
        
         fetch("user/singup",{
            headers:{
                "Content-Type":"application/json"
            },
            method:"POST",
            body:JSON.stringify(user),
         }).then((res)=>res.json()).then((data)=>{console.log(data); navigate("/")})
         .catch((e)=>{
            console.log("error"+e)
         })

       }
    return(
        <>
             <div className="border rounded shadow-sm p-3 mb-5 rounded bg-background-primary" id="singup-form">
                <form method="post" style={{display:"block"}} autoComplete="" onSubmit={handleInput} >
                    <div className="text-center h3" style={{margin:"10px auto",fontWeight:"500"}}>Singup</div>
                    <br/>
                    <input type="text" value={Name} onChange={(e)=>setFname(e.target.value)} class="form-control border border-secondary-subtle" style={{width:"90%",margin:"auto"}} id="exampleFormControlInput1" placeholder="full Name"/>
                   
                    <br/>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} class="form-control border border-secondary-subtle" style={{width:"90%",margin:"auto"}} id="exampleFormControlInput1" placeholder="Email"/>
                     <br/>
                     <input type="text" value={userName} onChange={(e)=>setUname(e.target.value)} class="form-control border border-secondary-subtle" style={{width:"90%",margin:"auto"}} id="exampleFormControlInput1" placeholder="Username"/>
                     <br/>
                    <input type="password" value={password} onChange={(e)=>setPass(e.target.value)} class="form-control border border-secondary-subtle" style={{width:"90%",margin:"auto"}} id="exampleFormControlInput1" placeholder="Create password"/>
                    <br/>
                    <input type="text" value={bio} onChange={(e)=>setBio(e.target.value)} class="form-control border border-secondary-subtle" style={{width:"90%",margin:"auto"}} id="exampleFormControlInput1" placeholder="About You"/>
                    <br/>
                     <input type="file" name="img" onChange={(e)=>{
                        setImg(e.target.files[0]);}}  class="form-control border border-secondary-subtle" style={{width:"90%",margin:"auto"}} id="exampleFormControlInput1" placeholder="your profile"/>
                   
                    <br/>
                    <input type="text" value={language} onChange={(e)=>setLang(e.target.value)} class="form-control border border-secondary-subtle" style={{width:"90%",margin:"auto"}} id="exampleFormControlInput1" placeholder="which programming language we learn"/>
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