
var array = [
    "this is naveen shuklam baradharam matharam vandhe matharam...",
    "Many of our components require the use of JavaScript to function. Specifically, they require jQuery, Popper.js, and our own JavaScript plugins. Place the following <script>s near the end of your pages, right before the closing </body> tag, to enable them. jQuery must come first, then Popper.js, and then our JavaScript plugins.",
]

var text = array[1].split(" ")
var count = 0
var wrongWords = 0
var bool = true
var WPM = 0
var acc = 0
var totalTyped = 0

var letters = 0
for(let i = 0; i < text.length; i++){

    var span = document.createElement("span")
    span.className = "displayElements"
    span.innerText = text[i] + " "
    if(i == 0){
        span.style.color = "lightblue"
    }
    document.getElementById("displayPara").append(span)
    
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

function run1(){
    if(count1 == 0){start()}

    var currentWord = document.getElementById("input").value
    currentWord = currentWord[currentWord.length-1]
    if(currentWord != " "){
        bool = true
    }
    
}

function run(){

    document.getElementsByTagName("span")[count1+1].style.color = "lightblue"
    
    var input = document.getElementById("input").value

    var span = document.createElement("span")
    span.innerText = input
    span.className = "typedElements"
    input = input.split(" ").join("")

    if(text[count1] == input){
        WPM++
    }else{
        wrongWords++
        span.style.color = "red"
    }

    letters += text[count1].length
    
    if(letters >= 70){
        scroll()
        letters = 35
    }

    document.getElementById("mainResult").append(span)
    document.getElementById("mainResult").append(" ")

    document.getElementById("input").value = ""
    document.getElementsByTagName("span")[count1].style.color = "black"

    count1++
    bool = false
    // text = text.join(" ")
}

function start(){
    var seconds = setInterval(()=>{
        sec--
        document.getElementById("time").innerText = sec + " seconds"
    
    }, 1000);

    setTimeout(() => {
        // run()

        var div1 = document.getElementById("totalTyped")
        var div3 = document.getElementById("accurecy")
        var div2 = document.getElementById("WPM")

        div1.style.visibility = "visible"
        div2.style.visibility = "visible"
        div3.style.visibility = "visible"

        div1.innerText = "Total Typed " + count1
        div2.innerText = "WPM " + WPM 
        div3.innerText =  "Accurecy " + Math.floor((WPM/count1)*100) 
        document.getElementById("input").style.display = "none"
        clearInterval(seconds)
    }, 30000);
    var sec = 60
   
}

function scroll() {
    var div = document.getElementById("displayPara");
    div.scrollTop += 47;
}