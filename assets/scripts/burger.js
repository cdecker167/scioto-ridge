

/* function burgFunc1(){

  const burg = document.querySelector('nav-bar').shadowRoot.querySelector('#burger');
  const varName = document.querySelector('nav-bar').shadowRoot.querySelector('#responsive');

      burg.addEventListener('click', () => {
        varName.style.display = "block";
    })
  } */

    function burgFunc() {
        
      const exists = document.querySelector('nav-bar').shadowRoot.querySelector('#responsive');
			
			if (exists.style.display !== 'block'){
        exists.style.display = "block";
      
			}
			else{
				exists.style.display = "none";
			}
		  }