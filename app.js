
// creating an array for storing leads
let myLeads = [];

const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("inpul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})