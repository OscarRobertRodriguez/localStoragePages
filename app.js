

localStorage.setItem('username', '340'); 

var greeting = document.getElementById('340p'); 

 window.addEventListener('load', doesValue340Exist); 

function doesValue340Exist () {
	var value; 

  for(var i = 0; i < localStorage.length; i++) {
  	value = localStorage.getItem(localStorage.key(i)) === '340' ? true : false; 
  }

  value === true ?  greeting.textContent = 'I exist on this page' : greeting.textContent = "I don't exist on this page" ; 
}




console.log(doesValue340Exist()); 