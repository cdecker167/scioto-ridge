const templates = `
<template id='nav-template'>
<style>
:root {
	--red: #EF3E3D;
	--blue: #32C5F4;
	--tan: #E6DADA;
	--navy: #185f76;
}

html{
	
	font-family: 'Raleway', sans-serif;
	/*font-weight: bold;*/
}

/*NAV BAR*/

nav{
	position: fixed;
	margin: 0 auto;
	height:auto; 
	background-color:#E6DADA;
	font-size: calc(10px + 1vw);
	vertical-align: middle;
	padding: 16px;
	display: flex;
	justify-content: space-between;
	width:100%;
	box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
	z-index: 2;
}

.links{
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.navbutt{
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.navbutt a{
	margin-right: 40px;
	margin-left: 0px;
}

nav .button, footer .button, header .button{
	font-size: 1.6vw;
	padding:  calc(5px + .3vw) calc(15px + .75vw);
	color: #E6DADA;
	background-color: #EF3E3D;
	border: none;
	border-radius: 8px;
	box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
	font-family: 'Raleway', sans-serif;
	text-decoration: none;
	
}



nav img{
	height: calc(30px + 2vw);
	
}

.attractionsdrop:hover .dropdown-content {
	display: block;
}

.infodrop:hover .dropdown-content {
	display: block;
}

.dropdown-content {
	display: none;
	position: absolute;
	/* z-index: 1; */
	background-color:transparent;
	text-align: center;
	border-radius: 8px;
	
	

}


.tan{
	box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
	background-color: #E6DADA;
	border-radius: 0px 0px 8px 8px;
}

nav a{
	color: #32C5F4;
	text-decoration: none;
	margin: 0px 4vw 0px 4vw;
}

nav a:hover{
	color: #EF3E3D;
}

nav .button:hover{
	color: var(--tan);
}

.attractionsdrop, .infodrop{
	position: relative;
	display: inline-block;
	text-align: center;

	
}

#red{
	height: 1.2vw;
	background-color:#EF3E3D;
	border-radius: 8px 8px 0px 0px;
	
}

.triangle {
  width: 0; 
  height: 0; 
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid #EF3E3D;
  margin: 0 auto;
  
}

#burger{
	display: none;
	color: #32C5F4;
	font-size: 40px;
	z-index: 12;
	margin-right: 15px;
}

#responsive{
	display: none;
}

@media screen and (max-width: 800px) {
	.links{
		display: none;
	}

	#burger{
		display: block;
		z-index: 5;
	}
  }

</style>
<nav>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<script src='assets/scripts/burger.js'></script>

    <a href="index.html"> <img src="assets/images/logo3-02.png" /> </a>
    
    <div class='links'>

    <a href="reserve.html">Reserve</a>	
	
    <div class="attractionsdrop">	
        <a href="attractions.html">Attractions</a>
            <div class="dropdown-content">
                <div class="triangle"> </div>
                <div id="red"> </div>
                <div class="tan">
                    <a href="attractions.html#rides">Rides</a>
                    <a href="attractions.html#restaurants">Resturaunts</a>
                    <a href="reserve.html">Shows</a>
                    <a href="reserve.html">Reviews</a>
                </div>
            </div>
    </div>
    
    	
        <a href="info.html">Info</a>
            
    
		
	<div class="navbutt">
    <a class="button"  id='login-button' href="login.html">Login</a>
        
    <a class="button"  href="register.html">Register</a>
    </div>
	</div>

	<div onclick='burgFunc()'id='burger'>
		<a id="burg"><i class='fa fa-bars'></i></a>
			<div id='responsive'>
				<a href="reserve.html">Reserve</a>	
				<a href="attractions.html">Attractions</a>
				<a href="info.html">Info</a>
				<a href="register.html">Register</a>
			</div>
	</div>

	
	
</nav>

	

</template>

<template id='footer-template'>
<style>

html{
	
	font-family: 'Raleway', sans-serif;
	/*font-weight: bold;*/
}

h1{
	color: #32C5F4;
	text-align: center;
}

footer .button{
	font-size: 20px;
	padding: 15px 30px;
	color: #E6DADA;
	background-color: #EF3E3D;
	border: none;
	border-radius: 8px;
	box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
	font-family: 'Raleway', sans-serif;
	text-decoration: none;
	margin: 20px;
	
}

/*FOOTER*/

footer{
	text-align: center;
	background-color:#185f76;
	height: auto;
	padding: 20px;
	color: #e6dada;
	font-weight: normal;
	display: grid;
	grid-template-columns: 33% 33% 33%;
	align-items: center;
	font-size: 15px;
	margin: 0 auto;
	bottom:0;
	
	
}

.socials{
	display: flex;
	justify-content: center;
	align-items: center;
	 

}

footer img{
	height: 85px;
}

.socials img{
	height: 40px;
	width: auto;
	margin: 20px;
	max-height: 100px;
	
}

.foot-right{
	
	text-align: center;
}

.foot-left{
	justify-content: center;
	display:flex;
}

#footertext{
	text-align: right;
	
	
	
}

.foot-middle{
	
	
	text-align: center;
}

.footbutt{
	display: flex;
	justify-content: center;
}

input {
	height: 30px;
	background-color: #E6DADA;

}
button{
	width: 50px;
	height: 35px
	
}

@media screen and (max-width: 1050px) {
	.foot-left{
		display: none;
	}
	footer{
		grid-template-columns: 50% 50%;
	}
  }

  @media screen and (max-width: 700px) {
	.foot-left{
		display: none;
	}

	.foot-middle{
		display: none;
	}

	footer{
		grid-template-columns: 100%;
	}
  }


</style>

<footer>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<div class='foot-left'>
<div id="footertext"> 
<a href='index.html'><img src="assets/images/logo3-02.png" /></a>
<p> <em>7800 Refugee Road<br/> Pickerington, OH <br/> 43147 </em></p>
</div>
</div>

<div class='foot-middle'>

<div class='footbutt'>
	<a class="button" id='login-button' href="login.html">Login</a>
	<a class="button" id='register-button' href="register.html">Register</a>
</div>
	<form style="margin-top: 30px; height: 50px;" action="">
	<input style='border-radius: 6px; border-color: #32C5F4;'type="text" placeholder="Search Scioto Ridge" name="search">
	<button style='background-color: #32C5F4; border-radius: 8px; border-color: #32C5F4;' type="submit"><i class="fa fa-search"></i></button>
	</form>
</div>

<div class="foot-right">
    
    <p> <em> Follow Us </em> </p>

    <div class="socials">
        <a href=""><img src ="assets/images/foot1.png"></a>
        <a href=""><img src ="assets/images/foot2.png"></a>
        <a href=""><img src ="assets/images/foot3.png"></a>
        <a href=""><img src ="assets/images/foot4.png"></a>
	</div>
	
	
    
  
    
	<p> &copy 2021 High Thrills Entertainment, LLC </p>
	
</div>




</footer>


</template>
`

/*The stuff above here is important. All of the code you want to 
reuse will live in the 'templates' variable. Copy and paste the 
entire <template> into it. Formatting is not necessary but makes 
less headache*/
const house = document.querySelector('#templates-house');
house.insertAdjacentHTML('beforeend', templates);
/*These two lines inject the entirety of the templates variable 
into an invisible div on whatever page this is attached to,
allowing them to be read by later scripts.*/

/*Constructor for TestTemplate. A class like this would be made
for each element like nav, footer, etc.*/ 
class NavClass extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});
        const template = document.querySelector('#nav-template');
        shadowRoot.appendChild(template.content.cloneNode(true));
    }
    connectedCallback() {
		
		
	}
	

}

class FooterClass extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});
        const template = document.querySelector('#footer-template');
        shadowRoot.appendChild(template.content.cloneNode(true));
    }
    connectedCallback() {
        console.log('connected!');
    }
}

/*The class creates the element by selecting a <template> element
from <templates-house>, and then instantiates it.The formula for the
class/structure will be identical with each template */

window.customElements.define('nav-bar' , NavClass);
window.customElements.define('footer-pro' , FooterClass);


//This line must be included outside of the class. ^
/*The way the arguments work for that is like this: 
(name of element in html doc , class name)
here, 'test-template' becomes <test-template></test-template> and 
gains life from the class TestTemplate. */


/*To use a new element you have to create a new class for it.
to make one for navbar, just copy and paste the whole class, 
change the name, and change the querySelector('#test-template')
to #whatever-the-name-of-the-template-is

The template MUST be added into the variable at the top of this file.
After the class the next line should be window.customElements.define()
in the same format as the test one above. And thats it. */

console.log('connection active'); //debug
