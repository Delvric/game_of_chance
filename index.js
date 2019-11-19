var answers = ["it is certain, try again", "next life time", "be patient", "Yes", "most definitely", 
"you may rely on it", "as i see it", "most likely", "out look not so good", "very doubtful", "reply hazy",
"ask again later", "better not tell you now", "cannot predict now", "concentrate and ask again"]




    var answer = document.getElementById("answer")
    var eightball = document.getElementById("eight-ball") 
    var question = document.getElementById("question")

eightball.addEventListener("click" , function(){
if (question.value.length <1){
    alert ('Enter a question');
} 
else{
    var num = Math.floor(Math.random() * Math.floor(answers.length));
    answer.innerText = answers[num];
    
};


}


)
