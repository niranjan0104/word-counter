let charSpan = document.getElementById("char-span");
let wordSpan = document.getElementById("word-span");
let textArea = document.getElementById("text-area");


textArea.addEventListener("input" , function(){
    let char = this.value;
    let charCount = char.length;
    charSpan.innerHTML = charCount;
 
    char = char.trim()
    let word = char.split(" ");
    let cleanList = word.filter(function(elm){
        return elm != ""
    })
    let wordCount = cleanList.length;
    wordSpan.innerHTML = wordCount;
})
   

