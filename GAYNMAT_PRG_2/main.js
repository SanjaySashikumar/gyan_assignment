let b=document.getElementById('addToDo');
let chores=document.getElementById('inputtext');
let cont=document.getElementById('to_do');

b.addEventListener('click', function(){
	//create a para tag in the to_do ID
	var text = document.createElement('p');
	//styling the added list elements
	text.classList.add('para-styling');
	text.innerText = chores.value;
	//add the input text into the pata tag
	cont.appendChild(text);
	inputtext.value="";
		text.addEventListener('click',function(){
		text.style.textDecoration = "line-through";
		
		text.addEventListener('click',function(){
			cont.removeChild(text);
		}) 
		})
})
