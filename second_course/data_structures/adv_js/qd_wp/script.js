function sayHello(){
	console.log("Hello");
}


let sayGoodbye = function sayGoodbye(){
	console.log("Good bye");
}

function sing(song, lyrics){
	console.log(song);
	console.log(lyrics);
}

function multiply(a, b){
	console.log(a * b);
	return a * b;
}	

function new_multiply(a, b){
	if (a > 10 || b > 10){
		return "Too large";
	} else{
		return a * b;
		}
}

sayHello();
sayGoodbye();
sing("random title", "wth");
multiply(5, 10);
new_multiply(1, 1);
multiply(100, 100);
