/*
	Function that prompt an alert with this content: Welcome Holberton School!
*/
let globalVariable = "Welcome";

function outer() {
    let course = "Holberton";
    alert(globalVariable);

    function inner() {
        let exclamation = "!";
        alert(globalVariable + " " + course);

        function inception() {
            alert(globalVariable + " " + course + " " + exclamation);
        }
        inception();
    }
    inner();
}
outer();