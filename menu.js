// TOGGLE DISABLE CLASS FOR BUTTON
const buttons = document.querySelectorAll(".menu button");

let currentDisabled = buttons[0]; // State

buttons[0].addEventListener('click', function() {
    this.toggleAttribute('disabled');
    currentDisabled.toggleAttribute('disabled');
    currentDisabled = this;
})

buttons[1].addEventListener('click', function() {
    this.toggleAttribute('disabled');
    currentDisabled.toggleAttribute('disabled');
    currentDisabled = this;
})

buttons[2].addEventListener('click', function() {
    this.toggleAttribute('disabled');
    currentDisabled.toggleAttribute('disabled');
    currentDisabled = this;
})
