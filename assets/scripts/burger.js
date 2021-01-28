
/* Onclick function that makes the responsive menu appear    */

    function burgFunc() {
        
      const exists = document.querySelector('nav-bar').shadowRoot.querySelector('#responsive');
			
			if (exists.style.display !== 'block'){
        exists.style.display = "block";
      
			}
			else{
				exists.style.display = "none";
			}
		  }