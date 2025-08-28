const add = document.getElementById("add")
const clear = document.getElementById("clear")
const sub = document.getElementById("sub-container")
const divs = document.querySelectorAll("div")


divs.forEach(div => {
  div.style["background-color"] = "red"
  div.style["width"] = "fit-content"
});

num = 0
add.addEventListener("click", increment)
clear.addEventListener("click", remove)

function increment(){
  num+=1
  sub.innerHTML = num
}

function remove(){
  sub.innerHTML = ''
}