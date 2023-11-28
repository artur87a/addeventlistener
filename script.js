const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector(".btn2")

console.log(btn1,btn2)



function clicked(){
    console.log("you have clicked button nr1")
}

function addNumbers(){
    console.log(2+2)
}

btn1.addEventListener("click", clicked)

btn2.addEventListener("click", addNumbers)