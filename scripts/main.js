const myHeding = document.querySelector('h1');
myHeding.textContent = 'Hello Fixcer';

let image1 = document.querySelector('img');

image1.onclick = function() {
    let mysrc = image1.getAttribute('src');
    if(mysrc === 'images/images.png') {
        image1.setAttribute('src', 'images/Jslogo.png');
    } else {
        image1.setAttribute('src', 'images/images.png');
    }
}

let button = document.querySelector('button');
let heading = document.querySelector('h1');

function setUserName() {
    let name = prompt("Enter the your name");
    localStorage.setItem('name', name);
    myHeding.textContent = "I love " + name;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storeName = localStorage.getItem('name');
    myHeding.textContent = "I love " + storeName;
}

button.onclick = function() {
    setUserName();
}


