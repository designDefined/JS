let value = 0;

const addBtn = document.querySelector(".add");
const resetBtn = document.querySelector(".reset");
const valueBox = document.querySelector(".box");
const VALUE_LS = "value";

if(localStorage.getItem("value")){
  value=JSON.parse(localStorage.getItem("value"));
} else {
}

addBtn.addEventListener("click", addValue);
resetBtn.addEventListener("click", resetValue);
valueBox.innerHTML = value;

function addValue() {
  value = value + 1;
  localStorage.setItem(VALUE_LS, value);
  valueBox.innerHTML = value;
}

function resetValue(){
  value = 0;
  localStorage.setItem(VALUE_LS, value);
  valueBox.innerHTML = value;
}
