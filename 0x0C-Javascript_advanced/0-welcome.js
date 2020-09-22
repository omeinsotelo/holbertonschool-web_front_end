/*
	Display three popups one by one with the text Welcome, Welcome Holberton, and Welcome Holberton!
*/
function welcome(firstName, lastName) {
    let fullName = firstName + " " + lastName;
    
    function displayFullName() {
        alert("Welcome " + fullName + "!");
    }
    displayFullName();
}