import React from "react";
import "./left.css"
import { NavLink, useNavigate} from "react-router-dom";
export default function LeftNavbar(){
  const navigate = useNavigate();
    return(
        <>
           <div className="list" id="leftbar">
  <NavLink
  
   to="/"
    id="alink"
    className="list-group-item shadow-sm p-3 mb-1 rounded" style={{display:"flex"}} >
    <svg xmlns="http://www.w3.org/2000/svg" id="icons" width="26" height="26" fill="currentColor"  class="bi bi-house-door-fill" viewBox="0 0 16 16">
  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
</svg>
<p className="text-center">Home</p> 
  </NavLink>
  <NavLink
    to="findaa" 
    id="alink"
    className="list-group-item shadow-sm p-3 mb-1  rounded" style={{display:"flex"}} >
    <svg xmlns="http://www.w3.org/2000/svg" id="icons" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
<p className="text-center">find</p> 
  </NavLink>
  <NavLink
   to="postpage"
   id="alink"
    className="list-group-item shadow-sm p-3 mb-1  rounded" style={{display:"flex"}} >
  <svg xmlns="http://www.w3.org/2000/svg" id="icons"width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
</svg>
<p className="text-center">post </p> 
  </NavLink>
  <NavLink
    to="activity"
    id="alink"
    className="list-group-item shadow-sm p-3 mb-1 rounded" style={{display:"flex"}} >
   <svg xmlns="http://www.w3.org/2000/svg" id="icons" width="16" height="16" fill="currentColor" class="bi bi-chat-right-fill" viewBox="0 0 16 16">
  <path d="M14 0a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
</svg>
<p className="text-center">Activity</p> 
  </NavLink>
  <NavLink
    to="profile"
    id="alink"
className="list-group-item shadow-sm p-3 mb-1  rounded" style={{display:"flex"}} >
    <svg xmlns="http://www.w3.org/2000/svg" id="icons" width="26" height="26" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg>
<p className="text-center">Profile</p> 
  </NavLink>
  
  
</div>

        </>
    )
}