let textInput = document.getElementById("textbox");
let uppercaseButton = document.querySelector("#uppercase");
let lowercaseButton = document.querySelector("#lowercase");
let reverseButton = document.querySelector("#reverse");
let colorButton = document.querySelector("#color");

uppercaseButton.addEventListener("click", function() {
	textInput.value = textInput.value.toUpperCase();
})

lowercaseButton.addEventListener("click", function() {
	textInput.value = textInput.value.toLowerCase();
})

reverseButton.addEventListener("click", function() {
	textInput.value = textInput.value.split("").reverse().join("");
})

colorButton.addEventListener("change", function() {
	textInput.style.color = colorButton.value;
})




