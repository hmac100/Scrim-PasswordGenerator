

let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let passwordOne = document.getElementById('password-one');
let passwordTwo = document.getElementById('password-two');
let button = document.getElementById('button');

function createPassword(){
let passwordLength = 15;

function randomChar(){
let randChar = Math.floor(Math.random() * characters.length);
return characters[randChar];
}




function generatePassword(){

let passwordString = ""
for(let i = 0; i < passwordLength; i++) {
passwordString += randomChar();
}
return passwordString;
}

passwordOne.textContent = generatePassword()
passwordTwo.textContent = generatePassword()

}