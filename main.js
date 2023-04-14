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


let encryptedText = document.createElement('p');
encryptedText.classList.add('encrypted-text');

let copybutton = document.createElement('button');
copybutton.classList.add('copy-btn');
copybutton.innerText = 'Copy';


textContainer.appendChild(encryptedText);
textContainer.appendChild(copybutton);

function displaySettings() {
  copybutton.style.display = 'block';
  textImage.style.display = 'none';
  textImageContainer.style.display = 'none';
  encryptedText.textContent = "";
}

function encryptingText () {
  if(textContent.value == '') return;

  displaySettings();
  //put the lowerCase and Split the string into individual words using the split() method.
  let words = textContent.value.toLowerCase().split(" ");
  
  for (let i = 0; i < words.length; i++) {
    // Iterate through each word and check if it ends with the letter "a".
    // If the word ends with the letter "a", replace it with the new word using the replace() method.
    if (words[i].endsWith("a")) words[i] = words[i].replace(/a$/, "ai");
    
    else if (words[i].endsWith("e")) words[i] = words[i].replace(/e$/, "enter");
    
    else if (words[i].endsWith("i")) words[i] = words[i].replace(/i$/, "imes");
    
    else if (words[i].endsWith("o")) words[i] = words[i].replace(/o$/, "ober");
    
    else if (words[i].endsWith("u")) words[i] = words[i].replace(/u$/, "ufat"); 
    
  }
  
  // Join the words back into a string using the join() method.
  let newString = words.join(" ");
  encryptedText.innerText = newString;

  copybutton.addEventListener("click", async function () {
    try {
      // Write the text to the user's clipboard
      await navigator.clipboard.writeText(newString);

    } catch (error) {
      console.error("Error copying text: ", error);
    }
  });
}

function decryptingText () {
  if(textContent.value == '') return;

  displaySettings();
  //Split the string into individual words using the split() method.
  let words = textContent.value.toLowerCase().split(" ");
  
  for (let i = 0; i < words.length; i++) {
    // Iterate through each word and check if it ends with the letter "a".
    // If the word ends with the letter "a", replace it with the new word using the replace() method.
    if (words[i].endsWith("ai")) words[i] = words[i].replace(/ai$/, "a");
    
    else if (words[i].endsWith("enter")) words[i] = words[i].replace(/enter$/, "e");
    
    else if (words[i].endsWith("imes")) words[i] = words[i].replace(/imes$/, "i");
    
    else if (words[i].endsWith("ober")) words[i] = words[i].replace(/ober$/, "o");
    
    else if (words[i].endsWith("ufat")) words[i] = words[i].replace(/ufat$/, "u"); 
    
  }
  
  // Join the words back into a string using the join() method.
  let newString = words.join(" ");
  encryptedText.innerText = newString;

  copybutton.addEventListener("click", async function () {
    try {
      // Write the text to the user's clipboard
      await navigator.clipboard.writeText(newString);

    } catch (error) {
      console.error("Error copying text: ", error);
    }
  });
}