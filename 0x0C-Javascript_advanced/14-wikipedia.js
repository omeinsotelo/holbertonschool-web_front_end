/*
	Simple callback
*/
function createElement(data) {
	let par = document.createElement("p");
	let valpar = document.createTextNode(data);
	par.appendChild(valpar);
	document.body.appendChild(par);
}

function queryWikipedia(callback) {
	let xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == XMLHttpRequest.DONE) {
			response = JSON.parse(xhttp.responseText);
			callback(response.query.pages["21721040"].extract)
		}
	}
	xhttp.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*", true);
	xhttp.send();
}

queryWikipedia(createElement);