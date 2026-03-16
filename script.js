const text = ["Developer","Cybersecurity Engineer","Network Engineer"]

let i=0
let j=0
let current=""
let isDeleting=false

function type(){

current=text[i]

if(isDeleting){
j--
}else{
j++
}

document.querySelector(".typing").textContent=current.substring(0,j)

if(!isDeleting && j===current.length){
isDeleting=true
setTimeout(type,1000)
return
}

if(isDeleting && j===0){
isDeleting=false
i++
if(i===text.length){
i=0
}
}

setTimeout(type,100)

}

type()
