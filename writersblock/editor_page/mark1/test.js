/* Written by DeisgnDefined */
"use strict";

const textbox = document.querySelector("#input");
const result = document.querySelector(".result");

function ch (){
  console.dir(textbox);
  console.log(textbox.value);
}


function refresh(){
  const text = textbox.value;
  const newText = text.replace(/\n/g, '<br>');
  result.innerHTML = newText;
}

textbox.addEventListener("change", refresh);
