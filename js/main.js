window.onload = function () {
    this.alert("let's start the game ..")
   

var turn = 0;


function play(divnumber){

 var id = divnumber.attr("id");
 var newid= "#"+id;

for(i=1; i<=4 ; i++){


    if(!($(`${newid} > span:nth-child(`+ i +`)` ).hasClass("cir red")) && !($(`${newid} > span:nth-child(` + i + `)`).hasClass("cir yellow")))
    {
  
      if(turn==0){
        $(`${newid} > span:nth-child(`+ i +`)`).addClass(" red");
        changeturn();
        // here check code
                 }
      else if(turn==1) {
        $(`${newid} > span:nth-child(`+ i +`)`).addClass(" yellow");
        changeturn();
        // here check code
            }
break;

    }
                    }
                       } 



function changeturn()
{
if(turn==1){
  $(".computerdot").removeClass(" yellow");
  $(".playerdot").addClass(" red");
  turn=0;
}
else if(turn==0){
  $(".playerdot").removeClass(" red");
  $(".computerdot").addClass(" yellow");
    turn=1;

  }
}

$(document).ready(function(){
  $("#board > div").hover(function(){
    $(this).css("background-color", "green");
}, function(){
    $(this).css("background-color", "rgb(34, 34, 110)");
})
});

changeturn();

    $("#board > div").click(function(){
      play($(this));
    });

    $("#normalbutton").click(function(){
      $("[class*='cir']").removeClass("red yellow");
      $(".playerdot").removeClass("red");
      $(".computerdot").removeClass("yellow");
      changeturn();
    });
  

  }