
// creating an array for storing leads
let myLeads = [];

const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("inpul-el")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    renderLeads()

})

// create a function that display leads from the array using innerHTML
function renderLeads(){
    let listItems = ""
for (let i = 0; i < myLeads.length; i++) {
    
    listItems += "<li>" + myLeads[i] + "</li>"
}
ulEl.innerHTML = listItems
}
