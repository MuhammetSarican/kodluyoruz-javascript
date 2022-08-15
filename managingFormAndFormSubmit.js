// FORM SUBMIT

let formDom=document.querySelector("#userForm")
formDom.addEventListener("submit", formSubmit)

function formSubmit(event){
    event.preventDefault() // we blocked default process
    console.log("Process is done.")
}