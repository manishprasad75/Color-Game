// var howManyColors = 6;
var square = document.querySelectorAll(".square");
var rgbHeader = document.querySelector(".rgbHeader");
var message = document.querySelector(".message");
var button = document.getElementsByTagName("button");
var h1 = document.getElementsByTagName("h1");
var num = 6;
var color = getColor(num);
getColor(num);

var correctColor = square[Math.floor(Math.random()*num)].style.backgroundColor;
var pickColor;

rgbHeader.textContent = correctColor;

function getColor(howManyColors){
	for(var i=0;i<howManyColors;i++)
	{
		square[i].style.background = randomColor();
	}
};


function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + " ," + g + " ," + b + ")";
}

for(var i=0;i<num;i++){
	square[i].addEventListener("click",function(){
		pickColor = this.style.backgroundColor;
		if(pickColor === correctColor){
			message.textContent = "Correct!";
			for(var i=0;i<num;i++)
				square[i].style.background = pickColor;
			h1[0].style.background = pickColor;
			button[0].textContent = "Play Again?";
			
		}
		else{
			this.style.background = "#232323";
			message.textContent = "Try Again"
		}
	})
}

function reset(){
	h1[0].style.background = "steelblue";
	getColor(num);
	correctColor = square[Math.floor(Math.random()*num)].style.backgroundColor;
	rgbHeader.textContent = correctColor;
	message.textContent = "";
	button[0].textContent = "New Colors";

}

button[0].addEventListener("click",reset);

button[1].addEventListener("click",easyMode);
button[2].addEventListener("click",hardMode);

function easyMode(){
	button[1].classList.add("selected");
	button[2].classList.remove("selected");
	num = 3;
	h1[0].style.background = "steelblue";
	getColor(num);
	correctColor = square[Math.floor(Math.random()*num)].style.backgroundColor;
	rgbHeader.textContent = correctColor;
	message.textContent = "";
	button[0].textContent = "New Colors";
	for(var i=3;i<6;i++)
		square[i].style.display = "none";

}


function hardMode(){
	button[1].classList.remove("selected");
	button[2].classList.add("selected");
	num = 6;
	for(var i=3;i<6;i++)
		square[i].style.display = "";
	reset();
}