/*
    Simple Password generator in JS
    Created incase I'm too bothered to think of a strong password myself.
*/

const _randomint = (n=1) => Math.floor(n * Math.random())

const lowerChar = "abcdefghijklmnopqrstuvwxyz";
const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numChar = "0123456789";


let numCharKey = (Math.random() < 0.5);
let lowerCharKey = (Math.random() < 0.5);
let upperCharKey = (Math.random() < 0.5);


const passLength = 16
let createdPass = ""

while(createdPass.length < passLength)
{
    if (lowerCharKey === true)
        createdPass += lowerChar[_randomint(lowerChar.length)];
        lowerCharKey = (Math.random() < 0.5);
    if (numCharKey === true)
        createdPass += numChar[_randomint(numChar.length)];
        numCharKey = (Math.random() < 0.5);
    if (upperCharKey === true)
        setTimeout(1);
        createdPass += upperChar[_randomint(upperChar.length)];
        upperCharKey = (Math.random() < 0.5);
}
console.log("Generated Password:", createdPass);
