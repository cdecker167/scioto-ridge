     function burgFunc(){
     const burg = document.querySelector('nav-bar').shadowRoot.querySelector('#burger');
      const varName = document.querySelector('nav-bar').shadowRoot.querySelector('#responsive');
      burg.addEventListener('click', () => {
        varName.style.display = "block";
    })
  }

    /* function burgFunc() {
        
      const loginButton = document.querySelector('nav-bar').shadowRoot.querySelector('.navbutt');
			var exists = document.getElementById("responsive");
			
			if (exists.style.display == 'none'){
				exists.style.display = "block";
			}
			else{
				exists.style.display = "none";
			}
		  } */