function role() {
	var role = [
		"developer",
		"visual designer",
		"tech lead",
		"stakeholder",
		"business analyst",
		"project manager"
	];
	return role[Math.floor(Math.random()*role.length)];
}

function testing_technique() {
	var techn = [
		"competitor analysis",
		"user surveys",
		"interviews",
		"contextual enquiry",
		"focus groups",
		"brainstorming",
		"ideation session",
		"affinity diagramming",
		"task analysis",
		"paper prototyping",
		"heuristic evaluation",
		"storyboarding",
		"performance testing",
		"subjective evaluation",
		"critical incidence technique",
		"remote evaluation",
		"personas",
		"user journeys",
		"longitudinal study",
		"ethnography research",
		"cultural probe",
		"Participant Observation",
	];
	return techn[Math.floor(Math.random()*techn.length)];
}

function adjective() {
	var adj = [
		"in-house",
		"empowering",
		"end-to-end",
		"future",
		"low hanging fruit",
	];
	return adj[Math.floor(Math.random()*adj.length)];
}

function company() {
	var company = [
		"Google",
		"Microsoft",
		"Apple",
		"Amazon",
		"Twitter",
		"ThoughtWorks"
	];
	return company[Math.floor(Math.random()*company.length)]; 
}

function testing_bullshit() {
	var result = [
		// "You should try a " + adjective() +" " + testing_technique() + " with a " + role(),
		// "Go and fire a " + role(),
		// testing_technique() + " is the new " + testing_technique(),
		company() + " is killing " + testing_technique(),
 	];
	return result[Math.floor(Math.random()*result.length)];
}

var item = document.getElementById("technique");
setInterval(function(){
	item.textContent = '“' + testing_bullshit() + '”';
},2000);

