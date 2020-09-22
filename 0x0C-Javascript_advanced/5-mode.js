/*
	Function that prompt adition and div
*/
function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
}
function main() {
    let spooky = changeMode("9", "bold", "uppercase", "pink", "green");
    let darkMode = changeMode("12", "bold", "capitalize", "black", "white");
    let screamMode = changeMode("12", "normal", "lowercase", "white", "black");

    /* Creating p*/
    let p = document.createElement('p');
    p.innerHTML = "Welcome Holberton!";
    document.body.appendChild(p);

    /* Creating Button 1*/
    let button1 = document.createElement('button');
    button1.innerHTML = "Spooky";
    document.body.appendChild(button1);
    button1.onclick = spooky;

    /* Creating Button 2*/
    let button2 = document.createElement('button');
    button2.innerHTML = "darkModey";
    document.body.appendChild(button2);
    button2.onclick = darkMode;

    /* Creating Button 3*/
    let button3 = document.createElement('button');
    button3.innerHTML = "screamMode";
    document.body.appendChild(button3);
    button3.onclick = screamMode;

}
main();