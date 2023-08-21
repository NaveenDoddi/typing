var text = "this is naveen kumar naidu reddy shuklam baradharam matharam vandhe matharam...".split("")
var count = 0
var wrongWords = 0
var bool = true

for(let i = 0; i < text.length; i++){
    var span = document.createElement("span")
    span.innerText = text[i]
    document.getElementById("para").append(span)
}
 
document.getElementById("input").addEventListener("keydown",backpressed)
function backpressed(event){
    if(event.key === "Backspace"){
        event.preventDefault()
    }
}

function run(){
    
    document.getElementsByTagName("span")[count+1].style.color = "red"
    
    var current = document.getElementById("input").value

    // console.log(text[count] == current[count])
    var span = document.createElement("span")
    span.innerText = current[count]

    if (text[count] == current[count]){
        document.getElementById("result").append(span)

    }else{
        bool = false
        span.style.color = "red"
        document.getElementById("result").append(span)
    }

    if(bool == false && text[count] == " "){
        wrongWords++
        bool = true
        console.log(wrongWords)
    }
    count++
    document.getElementsByTagName("span")[count-1].style.color = "black"
    
}

function start(){
    setTimeout(() => {
        window.location.reload()
    }, 60000);
}
