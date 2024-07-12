// script.js

const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.innerHTML === '=') {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = 'Error';
            }
        } else if (button.innerHTML === 'AC') {
            display.value = '';
        } else if (button.innerHTML === 'sin') {
            display.value = Math.sin(display.value);
        } else if (button.innerHTML === 'cos') {
            display.value = Math.cos(display.value);
        } else if (button.innerHTML === 'tan') {
            display.value = Math.tan(display.value);
        } else if (button.innerHTML === 'sqrt') {
            display.value = Math.sqrt(display.value);
        } else if (button.innerHTML === '^') {
            display.value += '**';
        } else if (button.innerHTML === 'ln') {
            display.value = Math.log(display.value);
        } else if (button.innerHTML === 'log') {
            display.value = Math.log10(display.value);
        } else if (button.innerHTML === 'pi') {
            display.value += Math.PI;
        } else if (button.innerHTML === 'e') {
            display.value += Math.E;
        } else {
            display.value += button.innerHTML;
        }
    });
});
