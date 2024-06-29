function addItem() {
  let itemContainer = document.createElement("div");

  let itemText = document.createElement("p");
  // Default response hopefully avoids glitchy-looking UI if user accidentally doesn't respond
  itemText.textContent =
    "- " + prompt("What would you like to add?", "Empty item");
  itemContainer.appendChild(itemText);

  let removeButton = document.createElement("button");
  removeButton.onclick = () => itemContainer.remove();
  removeButton.textContent = "Remove";
  itemContainer.appendChild(removeButton);
}
