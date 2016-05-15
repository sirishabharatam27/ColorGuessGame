var colors=["blue", "cyan","gold","grey", "magenta","orange","red","white","yellow"];
colors.sort();
var user_value;
var guess=0;
var finished= false;
var target
function do_game()
{
	var target_index=Math.random()*(colors.length-1);
	target_index=Math.floor(target_index);
	target= colors[target_index];
	alert(target); 
	
	
		while(!finished)
		{
			user_value=prompt("I am thinking of one of these colors: \n \n" + colors.join()+"/n /n What color am i thinking of? ");
			check_guess(user_value);
			guess++;	 	
			finished=check_guess();
		
		}
		
	
} 

function check_guess()
{
	
	
	if(target!=user_value)
	{
		prompt("I am sorry. \n I don't recognize the color \n  Please try again");
		return false;
	}
	if(target>user_value)
	{
		prompt(" The color you entered is alphabatically lower than mine. \n \n Please try again");
		return false;
	}
	if(target<user_value)
	{
		prompt(" The color you entered is alphabatically higher than mine. \n \n Please try again");
		return false;
	}
	
}