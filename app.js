// JS comments

//to check itis link correctly
//alert("Hello from App.js")

var pics = [
   "images/Imal6.jpg", //0
   "images/Imal7.jpg", //1
   "images/Imal8.jpg", //2
   "images/Imal10.jpg", //3
   "images/Imal11.jpg", //4
   "images/Imal14.jpg"//5
   
];

//go to te document(html file) and search for key word called button

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;  // here 1 because, already pics[0]have, by clicking need to move 1

//when findout when need to be activated,,,here when it is clicked then need to run the code
btn.addEventListener("click", function(){
	//alert("CLICKED")
	
	//button is work when it is clicked. now need to change image according to order 
	//alert(img.src)
	
	//img.src = "images/Imal11.jpg";  ----source of image is ok
	
	//need to change image by click
	if(counter === 6){  // to reset when it come to last image
		counter = 0;
	}
	img.src = pics[counter]
	counter = counter + 1;
});

