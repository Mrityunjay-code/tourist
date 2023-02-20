import React from 'react'
// import{Link} from 'react-router-dom'
import video from "./video.mp4"

function Nav() {
  return (
   <>
     <div class="banner">
     <video src={video} autoPlay="true" />
    
    

    <div class="content" id="home"> 
        <nav>
            <img src="https://ik.imagekit.io/mohdrahil101/files/logo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668283934802" class="logo" alt="Logo" title="FirstFlight Travels"/>
            
            <ul class="navbar">
                <li>
                    <a href="/">Home</a>
                    <a href="/location">Locations</a>
                    <a href="/package">Packages</a>
                    <a href="./about.html">About Us</a>
                    <a href="./contact.html">Contact Us</a>
                </li>
            </ul>
        </nav>
 
        <div class="title">
            <h1>INDIA TRAVELS</h1>
            <p>Plan your trip with us and travel around the world with the most affordable packages!</p>
            <a href="/Reg" class="button">Register Now!</a>
        </div>
        </div>
    </div>




    
   
   </>
  )
}

export default Nav