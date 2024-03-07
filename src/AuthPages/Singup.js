import React, { useState } from "react";
import "./auth.css";
import { NavLink} from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes,getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
const firebaseConfig = {
  apiKey: "AIzaSyCNuaXI45NhX6jwb01xtfEDguKJiBkeWY4",
  authDomain: "relaxo-social.firebaseapp.com",
  projectId: "relaxo-social",
  storageBucket: "relaxo-social.appspot.com",
  messagingSenderId: "919379973745",
  appId: "1:919379973745:web:74c233ac9df6badf706dd0"
};
// Initialize Firebase
initializeApp(firebaseConfig)

// Create a root reference
const storage = getStorage();

export default function Singup(){
       const navigate=useNavigate();
       const [Name,setFname]=useState("");
       const [email,setEmail]=useState("");
       const [userName,setUname]=useState("");
       const [password,setPass]=useState("");
       const[bio,setBio]=useState("");
       const[userImg,setImg]=useState("");
       const[language,setLang]=useState("");
       
        const imageHandler=async()=>{
           
            const mountainsRef = ref(storage,`postimg/${userImg.name}` );

            // Create a reference to 'images/mountains.jpg'
            const mountainImagesRef = ref(storage, `postimg/${userImg}`);
             uploadBytes(mountainsRef,userImg).then(()=>{
            getDownloadURL(ref(storage, `postimg/${userImg.name}`)).then((url)=>{
           setImg(url);
  })
  
 })
        }

       const handleInput=async(e)=>{
       e.preventDefault();

       imageHandler();
         const user={
             Name,
             userName,
            email,
            password,
            bio,
            userImg,
            language,
            
         }
        
         fetch("/user/singup",{
            headers:{
                "Content-Type":"application/json"
            },
            method:"POST",
            body:JSON.stringify(user),
         }).then((res)=>res.json()).then((data)=>{console.log(data); navigate("/")})


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
                     <input type="file" onChange={(e)=>setImg(e.target.files[0])}   class="form-control border border-secondary-subtle" style={{width:"90%",margin:"auto"}} id="exampleFormControlInput1" placeholder="your profile"/>
                   
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