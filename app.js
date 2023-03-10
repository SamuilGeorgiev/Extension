
// creating an array for storing leads
let myLeads = [];

const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("inpul-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")


localStorage.clear()
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

//checking the leaqds before rendering//
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    renderLeads()
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myleads", JSON.stringify(myLeads))
    renderLeads()

})

// create a function that display leads from the array using innerHTML
function renderLeads(){
    let listItems = ""
for (let i = 0; i < myLeads.length; i++) {
    
    listItems += `
    <li>
        <a target='_blank' href='${myLeads[i]}'>
            ${myLeads[i]}
        </a>
    </li>
        `
}
ulEl.innerHTML = listItems
}
