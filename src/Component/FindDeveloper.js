import React from "react";
import Searchuser from "./Searchuser";

export default function FindDeveloper(){
    return(
        <>
            <div className="text-start h3 p-3">Find Developer</div>
            <div className="">
                <input className="" placeholder="find Developer" style={{width:"98%",margin:"auto",height:"50px"}}></input>
             <br></br>
             <br/>
              <Searchuser/>
              <Searchuser/>
              <Searchuser/>
              <Searchuser/>
              <Searchuser/>
              <Searchuser/>
              <Searchuser/>
              <Searchuser/>
            </div>
        </>
    )
}