canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)){
		//write a code to check the type of key pressed
		document.getElementById("d1").innerHTML="you pressed a key that is called the alphabet key";
		img_image="Alpkey.png";
		add();
		}
	    else if (keyPressed >=48 && keyPressed<=57){
			img_image="numkey.png";
			add();
			document.getElementById("d1").innerHTML="You clicked the number key";
		}

		else if (keyPressed >=37 && keyPressed<=40){
			img_image="Arrkey.png";
			add();
			document.getElementById("d1").innerHTML="You clicked the arrow key";
		}
		
		else if (keyPressed ==17 || keyPressed==18 || keyPressed==27){
			img_image="spkey.png";
			add();
			document.getElementById("d1").innerHTML="You clicked the *special* key TOTALLY SPECIAL";
		}

		else{
		img_image="otherkey.png";
		add();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";


	}
}

function aplhabetkey()
{
	//upload respective image with the message. 

}
function numberkey()
{
	
}
function arrowkey()
{
}
function specialkey()
{
	
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
