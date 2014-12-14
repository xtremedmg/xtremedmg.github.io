function testing_bullshit() {
	var result = [
		"You should try " + adjective() +" " + testing_technique() + " with a " + role() + " to " + outcome(),
		"Go and fire a " + role(),
		"Think " + testing_technique() + " as the new " + testing_technique(),
		company() + " is killing " + testing_technique(),
		"You should use " + adjective() +" " + testing_technique() + " to " + outcome(),
		"Don't trust " + testing_people() + " and use " + adjective() +" " + testing_technique() + " if you need to " + outcome(),
		"Follow " + testing_people() + " and " + outcome() + " using " + adjective() +" " + adjective() + " " + testing_technique(),
	    "To " + outcome() + " try thinking in a " + adjective() +" " + testing_technique(),
	    "A wise man would use " + adjective() + " " + testing_technique() + " to " + outcome(),
	    "Think outside the box to " + outcome() + " and " + outcome(),
	    "You can simply " + outcome() + " applying a " + adjective() +" " + testing_technique(),
	    "Stop using " + adjective() +' '+ adjective() +" " + testing_technique() + " if you need to " + outcome(),
 	];
	return result[Math.floor(Math.random()*result.length)];
}
