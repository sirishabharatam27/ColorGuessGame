
var colors=["blue", "cyan","gold","grey", "magenta","orange","red","white","yellow"];
colors.sort();
var user_value;
var guess=0;
var finished= false;
var target;
function do_game()
{
	var target_index=Math.random()*(colors.length-1);
	target_index=Math.floor(target_index);
	target= colors[target_index];
	alert(target); 
	while(!finished)
		{
		user_value=prompt("I am thinking of one of these colors: \n \n" +  colors.join()+"\n \n What color am i thinking of? ");			
			 if(target==user_value)
				 {
				 	prompt("YAY!! you got it right");
				 	finished="true";
				 	myBody=document.getElementsByTagName("body")[0];
				 	myBody.style.background=target;
					guess++;
				 }
			 else
				 prompt("try again");
			 
			 guess++;
		}
	
}


/**
 * 
 */
