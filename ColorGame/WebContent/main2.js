var colors = ["cyan", "gold", "grey", "magenta", "orange", "red","white", "yellow","blue" ];
colors.sort();
var user_value;
var guess = 0;
var finished = false;
var target;
function do_game() {
	var target_index = Math.random() * (colors.length - 1);
	target_index = Math.floor(target_index);
	target = colors[target_index];

	alert(target);

	while (!finished) {
		user_value = prompt("I am thinking of one of these colors: \n \n"
				+ colors.join() + "\n \n What color am i thinking of? ");
		user_value = String(user_value);
		guess++;
		finished = check_guess();
	}

	alert("Congratulations! You have guessed the color! \n \n It took you"
			+ guess
			+ "guesses to finish the game\n\n You can see the color in the background ");
	myBody = document.getElementsByTagName("body")[0];
	myBody.style.background = target;

}

function check_guess() {
	var i;
	if ((user_value < colors[0]) || (user_value > colors[colors.length])) {
		alert("Sorry your guess is incorrect. \n\n I don't recognize the color \n \n Please try again");
        return false;
    }
	/*for (i = 0; i < colors.length; i++)	{
		if (user_value == colors[i]) {
			return true;
		} else{
			
			return false;			
		}
	}*/
	if (target > user_value) {
		alert("Sorry your guess is incorrect.\n\n The color you entered is alphabatically lower than mine. \n \n Please try again");
		return false;
	}
	if (target < user_value) {
		alert(" Sorry your guess is incorrect. \n\n The color you entered is alphabatically higher than mine. \n \n Please try again");
		return false;
	}

	return true;

}