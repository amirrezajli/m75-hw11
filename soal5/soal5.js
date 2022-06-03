// add input1

const input1 = document.createElement("input");
document.body.appendChild(input1);

// add input2

const input2 = document.createElement("input");
document.body.appendChild(input2);

// add button

const addBtn = document.createElement("button");
addBtn.textContent = "add"
document.body.appendChild(addBtn);

// add  p to show result 

const result = document.createElement("p")
document.body.appendChild(result);

// concat value & change result color   

addBtn.addEventListener("click", () => {
let value = +input1.value + +input2.value
if(value%2 === 0) result.style.color = "red"
else result.style.color = "blue"
result.innerHTML = value
})