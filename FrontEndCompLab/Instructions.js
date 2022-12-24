var button = document.createElement("button");
button.innerText = "Press me for Instructions!";

button.id ='Instructions';

button.addEventListener ("click", function() {
 alert("Place circles around all of the differences in the images by clicking! You MUST spot all of the differences to change images!");
});
document.body.appendChild(button);