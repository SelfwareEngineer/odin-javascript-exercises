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

// Create container div first so children have something to append to
let subContainer = document.createElement("div");
subContainer.style.border = "4px solid black";
subContainer.style.backgroundColor = "pink";

// Create and append children
let divH1 = document.createElement("h1");
divH1.textContent = "I'm in a div";
subContainer.appendChild(divH1);

let divP = document.createElement("p");
divP.textContent = "ME TOO!";
subContainer.appendChild(divP);

// Don't ship parent node to the DOM until everyone's on board
container.appendChild(subContainer);
