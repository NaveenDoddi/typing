
var array = [
    "Quick brown fox jumps over a lazy dog. Zebra yells, 'Next time, I'll give it a go!' Gazelle hollers, 'Please invite me too! Jack's quirky big velvet glove packed quite an extra punch for whizzing kite. Unexpectedly, the frisky yellow dog nabbed it mid-air. Unexpectedly, the frisky yellow dog nabbed it mid-air.",
    "Baby sister candy water paper people quick lode saw book using while become population question write vine zoo pound later being looking were fall moment plate opinion right human assume location monogamy children university anniversary vitamin despite music smoke dance west teacher love creative conversation helping intelligent driven emotionally confident married certainly last painter restorer hobby year tap kept sink walks climbing family friends vegetarian obviously jokes pet occasionally socially varies degree every know life bad tea short enterprising better half inclusive general stand feet neglected bite unless vaccinated masters often",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Typing is the process of writing or inputting text by pressing keys on a typewriter, computer keyboard, mobile phone, or calculator",
    "Many of our components require the use of JavaScript to function. Specifically, they require jQuery, Popper.js, and our own JavaScript plugins. Place the following <script>s near the end of your pages, right before the closing </body> tag, to enable them. jQuery must come first, then Popper.js, and then our JavaScript plugins.",
]

var text = array[Math. floor(Math. random() * 3)].split(" ")
var count = 0
var wrongWords = 0
var bool = true
var WPM = 0
var acc = 0
var totalTyped = 0
var letters = 0
var Seconds = 59
let timer // seconds function

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
    if(count == 0){
        start()
        startTimer()
    }

    var currentWord = document.getElementById("input").value
    currentWord = currentWord[currentWord.length-1]
    if(currentWord != " "){
        bool = true
    }
    count++
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
        span.style.color = "green"
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
    
}

function start(){

    
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

        clearInterval(timer);
        document.getElementById("time").innerText = "Time's up!";

    }, 60000);

}
function scroll() {
    var div = document.getElementById("displayPara");
    div.scrollTop += 47;
}    


function startTimer() {

    timer = setInterval(() => {
        document.getElementById("time").innerText = Seconds +" Seconds";
        Seconds--;
    }, 1000);
 
}

