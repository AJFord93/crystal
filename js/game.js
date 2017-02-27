// Page loads
// Game Initializes 
// Random Number is Generated
// Crystals Gain Values 

// User Clicks Crystals 
// Value Added to Score 
// If value exceeds random number -- lose
// If value < random number -- continue
// If value === random num; win. 

// Add win or Loss 
// Reset Game 

$(document).ready(function(){

var score = 0;
var wins = 0;
var loss = 0;

var randomNum = Math.floor(Math.random() * 31) + 50;
console.log(randomNum);

function newNum(){
	Math.floor(Math.random() * 31) + 50;
}

// Check if win or lose

 function check(){
		if(score === randomNum){
	alert("You win!");
	wins++
	$("#wins").html(wins);
	resetScore();
	

} else if(score > randomNum){ 
	alert("You Lose!");
	loss++;
	$("#losses").html(loss);
	resetScore();

	}
}

// Reset Score

function resetScore(){
	score = 0;
	$("#random-number").html(randomNum);
	$("#myScore").html(score);
	update();

	$("#random-number").html(newNum);
	newNum();

}


// Update Rupee Score

 function update(){ 
 	$("#myScore").html(score); 
 }

$("#random-number").html(randomNum);

// Click Functionality 

$("#rupee-silver").on("click", function(){
	score ++;
	update();
	check();
});

$("#rupee-red").on("click", function(){
	score += 5;
	update();
	check();
});

$("#rupee-purple").on("click", function(){
	score += 2;
	update();
	check();
});

$("#rupee-blue").on("click", function(){
	score += 10;
	update();
	check();
});

//Reset




	













//End Page Load

});


