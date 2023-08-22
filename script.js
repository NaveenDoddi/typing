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
        run()
    }
}


function run(){

    if(count1 == 0){start()}

    document.getElementsByTagName("span")[count1+1].style.color = "lightblue"
    
    var input = document.getElementById("input").value

    var span = document.createElement("span")
    span.innerText = input
    input = input.split(" ").join("")

    if(text[count1] == input){
        WPM++
    }else{
        wrongWords++
        span.style.color = "red"
    }

    document.getElementById("mainresult").append(span)
    document.getElementById("mainresult").append(" ")

    document.getElementById("input").value = ""
    document.getElementsByTagName("span")[count1].style.color = "black"
    count1++

    // text = text.join(" ")
}

function start(){
    
    setTimeout(() => {
        run()

        var div2 = document.getElementById("accurecy")
        var div1 = document.getElementById("WPM")

        div1.style.visibility = "visible"
        div2.style.visibility = "visible"

        div1.innerText = WPM + " WPM"
        div2.innerText = (WPM/count1)*100 + " accurecy"
        document.getElementById("input").style.display = "none"
        
    }, 5000);
    var sec = 59
    setInterval(seconds=()=>{
        
        document.getElementById("time").innerText = sec
        sec--
        
    }, 1000);
}
