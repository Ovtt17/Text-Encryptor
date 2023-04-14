
let textContent = document.querySelector('#text-content');
let encryptButton = document.querySelector('.encrypt-btn');
let decryptButton = document.querySelector('.decrypt-btn');

//text container
let textContainer = document.querySelector('.text-container');  

//text img
let textImage = document.querySelector('.text-img');
//text image container
let textImageContainer = document.querySelector('.text-image-container');

//listening buttons
encryptButton.addEventListener('click', encryptText);
// decryptButton.addEventListener('click', );


let encryptedText = document.createElement('p');
encryptedText.classList.add('encrypted-text');

let copybutton = document.createElement('button');
copybutton.classList.add('copy-btn');
copybutton.innerText = 'Copy';

textContainer.appendChild(encryptedText);
textContainer.appendChild(copybutton);

function encryptText() {
  copybutton.style.display = 'block';
  textImage.style.display = 'none';
  textImageContainer.style.display = 'none';
  encryptedText.textContent = "";
  encryptedText.innerText = textContent.value.toLowerCase();
}