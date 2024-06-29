const container = document.querySelector("#container");

// 1.
let redP = document.createElement("p");
redP.style.color = "red";
redP.textContent = "Hey I'm red!";
container.appendChild(redP);

// 2.
let blueH3 = document.createElement("h3");
blueH3.style.color = "blue";
blueH3.textContent = "I'm a blue h3!";
container.appendChild(blueH3);

// 3.

// create and append container div first to avoid using `innerHTML()`
let subContainer;
