const slider = document.querySelector(".slider");
const length = document.querySelector(".length");


const includeUppercase = document.querySelector("#upper");
const includeLowercase = document.querySelector("#lower");
const includenumbers = document.querySelector("#numbers");
const includeSymbols = document.querySelector("#Symbols");
 
const passwordDisplay = document.querySelector(".password");
const copyButton = document.querySelector(".password-copy");

slider.addEventListener('input', () => {
    length.textContent = slider.value
})