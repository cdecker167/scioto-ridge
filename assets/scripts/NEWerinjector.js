

/*    A script that lets us to re-use our navbar and 
	  footer across all pages, so changes to that code don't need 
	  to be annoyingly copied. Created by Garrett Cox, backend coder  */



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
}

/*      NAV BAR        */

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
	font-weight:600;
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

/*      DROP DOWN CONTENT       */

.attractionsdrop:hover .dropdown-content {
	display: block;
}

.infodrop:hover .dropdown-content {
	display: block;
}

.dropdown-content {
	display: none;
	position: absolute;
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
	margin: 0px 3vw 0px 3vw;
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

/*      RESPONSIVENESS, MOBILE HAMBURGER MENU            */

#burger{
	display: none;
	color: #32C5F4;
	font-size: 40px;
	z-index: 12;
	margin-right: 15px;
	text-align: right;
	position: static;
	cursor: pointer;
	
}

#responsive{
	display: none;
	font-size: .75em;
	text-align: right;
	padding-left: -400px;
	
}

#responsive a{
	display: block;
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

  @media screen and (min-width: 800px) {
	#responsive{
		display: none;
	}
}

</style>
<nav>

<!-- TEMPLATE FOR NAV BAR -->

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<script src='assets/scripts/burger.js'></script>

    <a href="index.html"> <img src="assets/images/logo3-02.png" alt='scioto ridge logo' /> </a>
    
    <div class='links'>

	<a href="index.html">Home</a>

    <a href="reserve.html">Reserve</a>	
	
    <div class="attractionsdrop">	
        <a href="attractions.html">Attractions</a>
            <div class="dropdown-content">
                <div class="triangle"> </div>
                <div id="red"> </div>
                <div class="tan">
                    <a href="attractions.html#rides">Rides</a>
                    <a href="attractions.html#restaurants">Resturaunts</a>
                    <a href="attractions.html#shows">Shows</a>
                </div>
            </div>
    </div>
    	
        <a href="info.html">Info</a>
		
	<div class="navbutt">
    <a class="button"  id='login-button' href="login.html">Login</a>
        
    <a class="button"  id='register-button' href="register.html">Register</a>
    </div>
	</div>

	<div  id='burger'>
		<a id="burg"><i onclick='burgFunc()'class='fa fa-bars'></i></a>
		<div id='responsive'>
		<a href="index.html">Home</a>
		<a href="reserve.html">Reserve</a>	
		<a href="attractions.html">Attractions</a>
		<a href="info.html">Info</a>
		<a id='burgLog' href="login.html">Login</a>
		<a id='burgReg' href="register.html">Register</a>
	</div>
	</div>

</nav>

</template>

<template id='footer-template'>
<style>

html{
	font-family: 'Raleway', sans-serif;
}

h1{
	color: #32C5F4;
	text-align: center;
}

/*     FOOTER         */

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
	border-radius: 12px;
}

/*      FOOTER GRID     */

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

#backtotop{
	margin-top: 35px;
	line-height: 20px;
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

.button{
	font-size: 18px;
	padding: 15px 20px;
	color: #E6DADA;
	background-color: #EF3E3D;
	border: none;
	border-radius: 8px;
	box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.5);
	font-family: 'Raleway', sans-serif;
	text-decoration: none;
	margin: 10px;
	cursor: pointer;
	margin-bottom: 40px;
}

/*      RESPONSIVENESS,  PARTS OF FOOTER GO AWAY ON SMALLER SCREENS       */

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
<a href='index.html'><img src="assets/images/logo3-02.png" alt='scioto ridge logo'/></a>
<p> <em>7800 Refugee Road<br/> Pickerington, OH <br/> 43147 </em></p>
</div>
</div>

<div class='foot-middle'>

<div class='footbutt'>
	<a class="button" id='login-button' href="login.html">Login</a>
	<a class="button" id='register-button' href="register.html">Register</a>
</div>
	
<a href="about.html" style=' color: var(--tan); font-size: 1.5em'>About Us</a><br><br>
<a id='backtotop' href="#top" style=' color: var(--tan); font-size: 1.5em; ' >Back to Top</a>

</div>

<div class="foot-right">
    
    <p> <em> Follow Us </em> </p>

    <div class="socials">
        <a href="https://www.facebook.com/scioto.ridge.18" target='_blank'><img src ="assets/images/foot1.png" alt='facebook logo'></a>
        <a href="https://instagram.com/sciotoridge?igshid=112puuc4s6hsw"target='_blank'><img src ="assets/images/foot2.png" alt='instagram logo'></a>
        <a href="https://twitter.com/ridgescioto?s=21"target='_blank'><img src ="assets/images/foot3.png"alt='twitter logo'></a>
        <a href="https://youtube.com/channel/UCakxFp_VzCdsfKUa6ToFUTQ" target='_blank'><img src ="assets/images/foot4.png" alt='youtube logo'></a>
	</div>
    
	<p> &copy 2021 High Thrills Entertainment, LLC </p>
	
</div>




</footer>


</template>
`

/*All of the code we  reuse lives in the 'templates' variable. */

const house = document.querySelector('#templates-house');
house.insertAdjacentHTML('beforeend', templates);

/*These two lines inject the entirety of the templates variable 
into an invisible div on whatever page this is attached to,
allowing them to be read by later scripts.*/

/* A Class Is made for each element */ 


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
    }
}

/*The class creates the element by selecting a <template> element
from <templates-house>, and then instantiates it.The formula for the
class/structure will be identical with each template */

window.customElements.define('nav-bar' , NavClass);
window.customElements.define('footer-pro' , FooterClass);





