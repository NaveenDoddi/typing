var text = "this is naveen kumar naidu reddy shuklam baradharam matharam vandhe matharam...".split(" ")
var count = 0
var wrongWords = 0
var bool = true
var WPM = 0
var acc = 0
var totalTyped = 0

for(let i = 0; i < text.length; i++){
    var span = document.createElement("span")
    span.className = "displayElements"
    span.innerText = text[i] + " "
    document.getElementById("para").append(span)
}

document.getElementById("input").addEventListener("keydown",keypressed)
var count1 = 0
function keypressed(event){
    if(event.key === "Backspace"){
        event.preventDefault()
    }
    if(event.key === " " && bool){
        run1()
    }
}


function run(){
    if(count == 0){start()}

    var current = document.getElementById("input").value
    document.getElementById("result").append(current[count])

    count++
    
}

function run1(){
    document.getElementsByTagName("span")[count1+1].style.color = "lightblue"
    
    var input = document.getElementById("result").innerText

    var span = document.createElement("span")
    span.innerText = input

    if(text[count1] == input){
        WPM++
    }else{
        wrongWords++
        span.style.color = "red"
    }
    document.getElementById("mainresult").append(span)
    document.getElementById("mainresult").append(" ")

    document.getElementById("result").innerText = " "
    document.getElementsByTagName("span")[count1].style.color = "black"
    count1++

    // text = text.join(" ")
}

function start(){
    
    setTimeout(() => {
        run1()
        var div2 = document.getElementById("accurecy")

        var div1 = document.getElementById("WPM")
        div1.style.visibility = "visible"
        div2.style.visibility = "visible"
        div1.innerText = WPM + " WPM"
        div2.innerText = (WPM/count1)*100 + " accurecy"

    }, 5000);
}
