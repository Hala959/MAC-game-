
console.log("test");




let time=6;
let score=0;


const words=[
    'hi',
    'hat',
    'saad',
    'yasir',
    'river',
    'lucky',
    'atheer',
    'developer',
    'javascript',
    'establishement',
    'cocktail',
    'java',
    'nutrition',
    'linux',
    'windows',
    'school',
    'university',
    'Ghadeer',
    'Antidisestablishmentarianism'
    ];
   var text= $("#current-word").text(words[0])
      
var i=0;



$("#word-input").change(function(e){  

console.log(e.target.value)

if(e.target.value==words[i]){
    //incres score 
    score++;
    time=5;

//change the score in html 
$(".score>text").text(score)
// correct comment 
$(".Correct").text("Correct..")

//clear the input field 

$(".word-input").val('');



//the next word in screen 

    i++;
    var text= $("#current-word").text(words[i])



}



})



//time Y
setInterval(countdown,1000 );



// counter timer
function countdown(){
	

    if (time==0)
    {
        $(".Correct").text("")
        //get class print game over 
        $(".gameOver").text("Game Over!!")
    }
    
    else{
         
    $(".timeLeft>text").text(--time)

    }

}




//trnsfer page game 
//id p1 if they click they  tranfer to p game 
$("#start").click(function(){

//اظهار  البيج القيم
$("#page2").show();
//اخفاء
$("#page1").hide();


})


//audio
var audio=new Audio('./saw.mp3');
audio.play();