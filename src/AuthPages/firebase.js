import React from "react";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes,getDownloadURL } from "firebase/storage";

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
   var data;
  const imageHandler=async(userImg)=>{
           
    const mountainsRef = ref(storage,`postimg/${userImg.name}` );

    // Create a reference to 'images/mountains.jpg'
    const mountainImagesRef = ref(storage, `postimg/${userImg}`);
    const res=await uploadBytes(mountainsRef,userImg)
     if(res){
 const url=await getDownloadURL(ref(storage, `postimg/${userImg.name}`))
 return url;
     }


}

const videoSender=async(userVideo)=>{
  
const videoRef=ref(storage,`postvideo/${userVideo.name}`);
const myvideoRef=ref(storage,`postvideo/${userVideo}`);
const res=await uploadBytes(videoRef,userVideo)
if(res){
 const url=await getDownloadURL(ref(storage,`postvideo/${userVideo.name}`))

  return url;
}
}

export{imageHandler,videoSender}
 