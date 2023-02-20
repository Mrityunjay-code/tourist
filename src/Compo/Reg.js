import React from 'react'
// import Reg from './Compo/Reg';

function Reg() {
  return (
    <>
    <body class="register-body"/>

<nav>
    <img src="https://ik.imagekit.io/mohdrahil101/files/logo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668283934802" class="logo" alt="Logo" title="FirstFlight Travels"/>

    <ul class="navbar">
        <li>
            <a href="./index.html">Home</a>
            <a href="./index.html#locations">Locations</a>
            <a href="./index.html#package">Packages</a>
            <a href="./about.html">About Us</a>
            <a href="./contact.html">Contact Us</a>
        </li>
    </ul>
</nav>
        

<section class="registration">
    <div class="register-form">
        <h1>Register <span>Here</span></h1>
        <form action="" onsubmit="return validateform()">

        <input type="text" name="myname1" placeholder="Name" id="name" required/>
        <input type="email" name="myemail" placeholder="Email-Id" id="" required/>
        <input type="tel" name="myphone" placeholder="Phone No." id="phonenum" required/>
        <input type="number" name="myage" placeholder="Age" id="" required/>
        <h4>Gender</h4>
        <input type="radio" name="mygender" id="" required/> Male &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
        <input type="radio" name="mygender" id=""/> Female
        <h4>Departure</h4>
        <input type="datetime-local" name="departuredate" id="" required/>
        <h4>Return</h4>
        <input type="datetime-local" name="returndate" id="" required/>
        <h4>Travel Destination</h4>
        <input type="checkbox" name="td" id=""/> Kashmir &nbsp; &nbsp; &nbsp;
        <input type="checkbox" name="td" id=""/> Istanbul &nbsp; &nbsp; &nbsp;
        <input type="checkbox" name="td" id=""/> Paris &nbsp; &nbsp; &nbsp;
        <input type="checkbox" name="td" id=""/> Bali &nbsp; &nbsp; &nbsp;
        <input type="checkbox" name="td" id=""/> Dubai &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <input type="checkbox" name="td" id=""/> Geneva &nbsp; &nbsp; &nbsp; 
        <input type="checkbox" name="td" id=""/> Port Blair &nbsp; &nbsp; &nbsp;
        <input type="checkbox" name="td" id=""/> Rome &nbsp; &nbsp; &nbsp;
        <br/> <br/>
        <h4>Package</h4>
        <input type="radio" name="locations" id="loc1" required/> Bronze &nbsp; &nbsp; &nbsp;
        <input type="radio" name="locations" id="loc1"/> Silver &nbsp; &nbsp; &nbsp;
        <input type="radio" name="locations" id="loc1"/> Gold &nbsp; &nbsp; &nbsp;
        <input type="radio" name="locations" id="loc1"/> Platinum &nbsp; &nbsp; &nbsp;
        <br/> <br/> 
        <input type="checkbox" name="t&c" id="" checked required/> I accept the Terms & Conditions.
        <br/> <br/> 
        <input type="submit" value="Submit" class="submitbtn"/>

    </form>
    </div>
</section>
    
    </>
  )
}

export default Reg