import React from 'react'

function Package() {
  return (
   <>
   <section class="package" id="package">
    <div class="package-title">
        <h2>Packages</h2>
    </div>

    <div class="package-content">
        
        <div class="box">
            <div class="image">
                <img src="https://ik.imagekit.io/mohdrahil101/files/p1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668283939144" alt=""/>
                <h3>Rs.9,999/-</h3>
            </div>
        
        <div class="dest-content">
            <div class="location">
                <h4>Bronze</h4>
                <ul class="pac-details">
                    <li>2 Star Hotel</li>
                    <li>5 Nights Stay</li>
                    <li>Free photo Session</li>
                    <li>Friendly Tour Guide</li>
                    <li>24/7 Customer Help Center</li>
                </ul>
            </div>
        </div>
        </div>
        
        <div class="box">
            <div class="image">
                <img src="https://ik.imagekit.io/mohdrahil101/files/p2.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668283938017" alt=""/>
                <h3>Rs.19,999/-</h3>
            </div>
        
        <div class="dest-content">
            <div class="location">
                <h4>Silver</h4>
                <ul class="pac-details">
                    <li>3 Star Hotel</li>
                    <li>7 Nights Stay</li>
                    <li>Free photo Session</li>
                    <li>Friendly Tour Guide</li>
                    <li>24/7 Customer Help Center</li>
                </ul>
            </div>
        </div>
        </div>

        <div class="box">
            <div class="image">
                <img src="https://ik.imagekit.io/mohdrahil101/files/p3.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668283938426" alt=""/>
                <h3>Rs.29,999/-</h3>
            </div>
        
        <div class="dest-content">
            <div class="location">
                <h4>Gold</h4>
                <ul class="pac-details">
                    <li>4 Star Hotel</li>
                    <li>10 Nights Stay</li>
                    <li>Breakfast and Dinner</li>
                    <li>Free photo Session</li>
                    <li>Friendly Tour Guide</li>
                    <li>24/7 Customer Help Center</li>
                </ul>
            </div>
        </div>
        </div>

        <div class="box">
            <div class="image">
                <img src="https://ik.imagekit.io/mohdrahil101/files/p4.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668283939593" alt=""/>
                <h3>Rs.39,999/-</h3>
            </div>
        
        <div class="dest-content">
            <div class="location">
                <h4>Platinum</h4>
                <ul class="pac-details">
                    <li>5 Star Hotel</li>
                    <li>14 Nights Stay</li>
                    <li>Breakfast, Lunch and Dinner</li>
                    <li>Bornfire</li>
                    <li>Free photo Session</li>
                    <li>Friendly Tour Guide</li>
                    <li>24/7 Customer Help Center</li>
                </ul>
            </div>
        </div>
        </div>

    </div>
    </section>

{/* <!-- Newsletter --> */}

<section class="newsletter">
    <div class="newstext">
        {/* <h2>Newsletter</h2> */}
        <p>Subscribe to get offers and latest<br/>updates every week!</p>
    </div>

    <div class="send">
        <form action="">
            <input type="email" name="emailid" placeholder="E-mail" required/>
            <input type="submit" value="Subscribe"/>
        </form>
    </div>

</section>
   
   </>
  )
}

export default Package