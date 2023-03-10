
// creating an array for storing leads
let myLeads = [];

const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("inpul-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const tabBtn = document.getElementById("tab-btn")



//checking the leaqds before rendering//
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}


tabBtn.addEventListener("click", function(){
    // Save the url instead of logging it out
    // console.log(tabs[0].url)
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
})


function render(leads){
    let listItems = ""
for (let i = 0; i < leads.length; i++) {
    
    listItems += `
    <li>
        <a target='_blank' href='${leads[i]}'>
            ${leads[i]}
        </a>
    </li>
        `
}
ulEl.innerHTML = listItems
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
    render(myLeads)

})


