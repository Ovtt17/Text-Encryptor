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
encryptButton.addEventListener('click', encryptingText);
decryptButton.addEventListener('click', decryptingText);


let encryptedTextContainer = document.createElement('p');
encryptedTextContainer.classList.add('encrypted-text');

let copybutton = document.createElement('button');
copybutton.classList.add('copy-btn');
copybutton.innerText = 'Copy';


textContainer.appendChild(encryptedTextContainer);
textContainer.appendChild(copybutton);

function displaySettings() {
  copybutton.style.display = 'block';
  textImage.style.display = 'none';
  textImageContainer.style.display = 'none';
  encryptedTextContainer.textContent = "";
}

function encryptingText () {
  if(textContent.value == '') return;

  displaySettings();
  
  //put the lowerCase and replace the letter.
  let words = textContent.value.toLowerCase().replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat").replace(/ames/g, "a");

  encryptedTextContainer.innerText = words;

  copybutton.addEventListener("click", async function () {
    try {
      // Write the text to the user's clipboard
      await navigator.clipboard.writeText(words);

    } catch (error) {
      console.error("Error copying text: ", error);
    }
  });
}

function decryptingText () {
  if(textContent.value == '') return;

  displaySettings();
  
  let words = textContent.value.toLowerCase().replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

  encryptedTextContainer.innerText = words;

  copybutton.addEventListener("click", async function () {
    try {
      // Write the text to the user's clipboard
      await navigator.clipboard.writeText(words);

    } catch (error) {
      console.error("Error copying text: ", error);
    }
  });
}