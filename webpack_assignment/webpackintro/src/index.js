

import("./index.css")
import img from './note2.jpg'


let image = document.createElement("img")

image.src = img
image.style.width="5%"
image.display = "block"

let h1 = document.createElement("h1")


let input = document.createElement("input")
let button = document.createElement("button")

button.textContent="Submit"

input.placeholder = "Take a note..."

h1.innerText = "Noteapp"
h1.classList.add("redcolor")

let root = document.getElementById("root")

root.append(image,h1,input,button)


button.onclick = function() {show();}

function show(){
    
    let note = document.createElement("h3")
    note.textContent = input.value
    note.style.display="block"
    note.style.margin = "10px"
    let cont = document.createElement("div")
cont.classList.add("cont")
    root.append(cont)
    cont.append(note)
}
