
var array =  [
    [
        "The sun did not shine. It was too wet to play. So we sat in the house all that cold, cold, wet day. I sat there with Sally. We sat there, we two. And I said, 'How I wish we had something to do!'",
        "Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference. And both that morning equally lay In leaves no step had trodden black.Nulla facilisi. Sed tincidunt vulputate eleifend. Maecenas quis congue justo",
        "Praesent varius justo sed ex interdum, a ultrices velit commodo. Vestibulum facilisis nulla non aliquam. Nulla facilisi. Sed tincidunt vulputate eleifend. Maecenas quis congue justo.Nulla facilisi. Sed tincidunt vulputate eleifend. Maecenas quis congue justo",
    ],
    [
        "To be or not to be, that is the question. Whether 'tis nobler in the mind to suffer the slings and arrows of outrageous fortune, Or to take arms against a sea of troubles And, by opposing, end them? Fusce consectetur urna sit amet tincidunt ultricies. Nullam ac erat in orci hendrerit rhoncus. And all that's best of dark and bright Meet in her aspect and her eyes.",
        "She walks in beauty, like the night Of cloudless climes and starry skies; And all that's best of dark and bright Meet in her aspect and her eyes. Thus mellowed to that tender light Which heaven to gaudy day denies. Fusce consectetur urna sit amet tincidunt ultricies. Nullam ac erat in orci hendrerit rhoncus. And all that's best of dark and bright Meet in her aspect and her eyes.",
        "Quisque euismod, lectus sit amet consectetur laoreet, arcu lectus tincidunt arcu, nec bibendum est augue ac elit. Fusce consectetur urna sit amet tincidunt ultricies. Nullam ac erat in orci hendrerit rhoncus. And all that's best of dark and bright Meet in her aspect and her eyes. Thus mellowed to that tender light Which heaven to gaudy day denies. And all that's best of dark and bright Meet in her aspect and her eyes.",
    ],
    [
        "Baby sister candy water paper people quick lode saw book using while become population question write vine zoo pound later being looking were fall moment plate opinion right human assume location monogamy children university anniversary vitamin despite music smoke dance west teacher love creative conversation helping intelligent driven emotionally confident married certainly last painter restorer hobby year tap kept sink walks climbing family friends vegetarian obviously jokes pet occasionally socially varies degree every know life bad tea short enterprising better half inclusive general stand feet neglected bite unless vaccinated masters often.",
        "Quick brown fox jumps over a lazy dog. Zebra yells, 'Next time, I'll give it a go!' Gazelle hollers, 'Please invite me too! Jack's quirky big velvet glove packed quite an extra punch for whizzing kite. Unexpectedly, the frisky yellow dog nabbed it mid-air. Unexpectedly, the frisky yellow dog nabbed it mid-air. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Typing is the process of writing or inputting text by pressing keys on a typewriter, computer keyboard, mobile phone, or calculator.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Typing is the process of writing or inputting text by pressing keys on a typewriter, computer keyboard, mobile phone, or calculator. Quick brown fox jumps over a lazy dog. Zebra yells, 'Next time, I'll give it a go!' Gazelle hollers, 'Please invite me too! Jack's quirky big velvet glove packed quite an extra punch for whizzing kite. Unexpectedly, the frisky yellow dog nabbed it mid-air. Unexpectedly, the frisky yellow dog nabbed it mid-air.",
    ],
    [
        "Many of our components require the use of JavaScript to function. Specifically, they require jQuery, Popper.js, and our own JavaScript plugins. Place the following <script>s near the end of your pages, right before the closing </body> tag, to enable them. jQuery must come first, then Popper.js, and then our JavaScript plugins. It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Typing is the process of writing or inputting text by pressing keys on a typewriter, computer keyboard, mobile phone, or calculator",
        "Now is the winter of our discontent made glorious summer by this sun of York; And all the clouds that loured upon our house In the deep bosom of the ocean buried. Now are our brows bound with victorious wreaths. Now is the winter of our discontent made glorious summer by this sun of York; And all the clouds that loured upon our house In the deep bosom of the ocean buried. Now are our brows bound with victorious wreaths. Now is the winter of our discontent made glorious summer by this sun of York; And all the clouds that loured upon our house In the deep bosom of the ocean buried. Now are our brows bound with victorious wreaths. Now is the winter of our discontent made glorious summer by this sun of York; And all the clouds that loured upon our house In the deep bosom of the ocean buried. Now are our brows bound with victorious wreaths",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta. It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness. Now is the winter of our discontent made glorious summer by this sun of York; And all the clouds that loured upon our house In the deep bosom of the ocean buried. Now are our brows bound with victorious wreaths. Now is the winter of our discontent made glorious summer by this sun of York; And all the clouds that loured upon our house In the deep bosom of the ocean buried.",
    ],
]


var minutes = 1
var level = "Medium"
var text = ""
var count = 0
var count1 = 0
var wrongWords = 0
var bool = true
var WPM = 0
var acc = 0
var totalTyped = 0
var letters = 0
var Seconds = 60
let timer // seconds function


function loadContent(){
    document.getElementById("displayPara").innerHTML = ""
    var levelDigit = 0
    var testDificulty = 0
    var options = document.getElementsByTagName("option")
    var selectLevelBool = true

    for(let i = 0; i < options.length; i++){
        if(options[i].selected){
            if(selectLevelBool){
                minutes = options[i].innerText.split(" ")[0]
                selectLevelBool = false
            }else{
                level = options[i].innerText
            }
            
        }
    
    }
    minutes = Number(minutes)

    if(minutes == 1){
        levelDigit = 0

    }else if(minutes == 2 ){
        levelDigit = 1

    }else if(minutes == 5){
        levelDigit = 2

    }else{
        levelDigit = 3
    }

    if(level == "Easy"){
        testDificulty = 0
    }else if( level == "Medium"){
        testDificulty = 1
    }else{
        testDificulty = 2
    }

    text = array[levelDigit][testDificulty].split(" ")

    for(let i = 0; i < text.length; i++){

        var span = document.createElement("span")
        span.className = "displayElements"
        span.innerText = text[i] + " "
        if(i == 0){
            span.style.color = "lightblue"
        }
        document.getElementById("displayPara").append(span)
        
    }
    document.getElementById("displayMinutes").innerText = minutes-1 + " :"

    console.log(text)
    
}


document.getElementById("input").addEventListener("keydown",keypressed)
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
    var widthofSpan = document.getElementsByTagName("span")[count1].offsetWidth
    
    var input = document.getElementById("input").value

    var span = document.createElement("span")

    span.innerText = input
    span.className = "typedElements"
    
    input = input.split(" ").join("")

    if(text[count1] == input){
        WPM++
        span.style.color = "green"
    }else{
        if(text[count1].toString().length > input.length){
            span.style.width = widthofSpan+"px"
            console.log("less")
        }else{
            
        }
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

    // Seconds = minutes*60
    // var timeout = minutes * 60400
    var timeout = 1000
    setTimeout(() => {
        // run()

        var div1 = document.getElementById("totalTyped")
        var div3 = document.getElementById("accurecy")
        var div2 = document.getElementById("WPM")
        var div4 = document.getElementById("typos")

        div1.style.visibility = "visible"
        div2.style.visibility = "visible"
        div3.style.visibility = "visible"
        div4.style.visibility = "visible"

        div1.innerText = "Total Typed " + count1
        div2.innerText = "WPM " + WPM / minutes
        div3.innerText =  "Accurecy " + Math.floor((WPM/count1)*100) 
        div4.innerText =  "Typos " + wrongWords

        //seseion storage

        document.getElementById("input").style.display = "none"

        clearInterval(timer);

        document.getElementById("timeUp").style.visibility = "visible"
        document.getElementById("timeUp").innerText = "Time's up!";

    }, timeout);

}
function scroll() {
    var div = document.getElementById("displayPara");
    div.scrollTop += 47;
}    


function startTimer() {

    timer = setInterval(() => {
        document.getElementById("displaySeconds").innerText = Seconds;
        document.getElementById("displayMinutes").innerText ="0" + minutes - 1 + " :";
        if(Seconds==0){
            Seconds = 60
            minutes--
        }
        Seconds--;
    }, 1000);
 
}


