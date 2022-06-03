document.getElementById('Primary').style.backgroundColor = 'rgb(219,234,254)';
document.getElementById('Secondary').style.backgroundColor = 'rgb(243,232,255)';
document.getElementById('Success').style.backgroundColor = 'rgb(220,252,231)';
document.getElementById('Danger').style.backgroundColor = 'rgb(254,226,226)';
document.getElementById('Warning').style.backgroundColor = 'rgb(254,249,195)';
document.getElementById('info').style.backgroundColor = 'rgb(224,231,255)';
document.getElementById('light').style.backgroundColor = 'rgb(249,250,251)';
document.getElementById('dark').style.backgroundColor = 'rgb(31,41,55)';
let tBody = document.querySelector("tbody")
let addBtn = document.getElementById("btn")
let removeBtn = document.getElementById("BTN")

document.querySelectorAll("tr").forEach(el => {
    let color = el.style.backgroundColor
    el.addEventListener("mouseover", () => {
        el.style.backgroundColor = "gray";
    })
    el.addEventListener("mouseleave", () => {
        el.style.backgroundColor = color;
    })

})

addBtn.addEventListener("click", () => {
    `  <tr class="border-b  boder-gray-900"id="dark">
      <td class="text-sm text-white font-medium px-6 py-4 whitespace-nowrap">
          Dark
      </td>
      <td class="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
          Cell
      </td>
      <td class="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
          Cell
      </td>
  </tr>`
    for (let index = 0; index < 3; index++) {
        let tr = document.createElement("tr")
        tr.classList.add("border-b", "boder-gray-900")
        let td1 = document.createElement("td")

        td1.classList.add("text-sm", "text-white", "font-medium", "px-6", "py-4", "whitespace-nowrap", "text-black")
        td1.innerHTML = "orange"
        tr.appendChild(td1)

        let td2 = document.createElement("td")
        td2.classList.add("text-sm", "text-white", "font-medium", "px-6", "py-4", "whitespace-nowrap", "text-black")
        td2.innerHTML = "cell"
        tr.appendChild(td2)

        let td3 = document.createElement("td")
        td3.classList.add("text-sm", "text-white", "font-medium", "px-6", "py-4", "whitespace-nowrap", "text-black")
        td3.innerHTML = "cell"
        tr.appendChild(td3)
        tBody.appendChild(tr)
    }

})
removeBtn.addEventListener("click", () => {
for (let index = 0; index < 5; index++) {
    let d = document.getElementById("myTable").deleteRow(0);
}
})
