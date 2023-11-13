// Data

let name = 'it-incubator';
let graduatesCount = 2000;
let areYouChampion = true;

// Ui program, render

document.write('<h1>', name, '</h1>');

//
document.write('<input type="number" value="' + graduatesCount + '">');
document.write('<input type="checkbox"', areYouChampion ? ' checked ' : '', '>');
document.write('<hr>')
document.write(`<input type="number" value="${graduatesCount}">`);
document.write(`<input type="checkbox"${areYouChampion ? ' checked ' : ''}>`);
//
// document.write('<input type="number" value="' + graduatesCount + '">');
// document.write('<input type="checkbox"', areYouChampion ? ' checked ': '', '>');
// document.write('<input type="checkbox"' + (areYouChampion ? ' checked ': '') + '>');
// '...' + graduatesCount-areYouChampion + `...` >>> `... ${...}`
