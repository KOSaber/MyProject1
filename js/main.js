window.onload = function () {
    this.alert("let's start the game ..")
   

var turn = 0;
var countertie=0;


function play(divnumber){

 var id = divnumber.attr("id");
 var newid= "#"+id;
 

for(i=1; i<=4 ; i++){


    if(!($(`${newid} > span:nth-child(`+ i +`)` ).hasClass("cir red")) && !($(`${newid} > span:nth-child(` + i + `)`).hasClass("cir yellow")))
    {
  
      if(turn==0){
        $(`${newid} > span:nth-child(`+ i +`)`).addClass(" red");
        countertie +=1;

        //chick winner
        var winnerc=0;
        var winnerr=0;

        for(j=1;j<=4;j++){
          //----check win col
          if($(`${newid} > span:nth-child(`+ j +`)` ).hasClass("cir red"))
          {
            winnerc +=1;
          }
          //-----check win row
          if($(`${"#colum"}`+ j + ` > span:nth-child(`+ i +`)`).hasClass("cir red"))
          {
            winnerr +=1;
          }

        }
        if((winnerc==4) || (winnerr==4))
        {
          setTimeout(function(){ alert("you won!!"); }, 200);
          setTimeout(function(){ reset(); }, 300);
          // alert("you won!!"); 
          // reset();
        }

        // -------------
        changeturn();
                 }
      else if(turn==1) {
        $(`${newid} > span:nth-child(`+ i +`)`).addClass(" yellow");
        countertie +=1;
        // chick win
        winnerc=0;
        winnerr=0;

        for(j=1;j<=4;j++){
          //==== ckick win col
          if($(`${newid} > span:nth-child(`+j+`)` ).hasClass("cir yellow"))
          {
            winnerc += 1;
          }
          //-----check win row
          if($(`${"#colum"}`+ j + ` > span:nth-child(`+ i +`)`).hasClass("cir yellow"))
          {
            winnerr +=1;
          }

        }
        if((winnerc==4) || (winnerr==4)){
          
          setTimeout(function(){ alert("Computer won!!"); }, 200);
          setTimeout(function(){ reset(); }, 300);
          // alert("Computer won!!");
          // reset();
        }
        

        changeturn();
        
            }
break;

    }
                    }

    if(countertie == 16)
    {
      setTimeout(function(){ alert("it's tie!!"); }, 300);
      // alert("it's tie!!");
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

    function reset(){
  
      $("[class*='cir']").removeClass("red yellow");
      $(".playerdot").removeClass("red");
      $(".computerdot").removeClass("yellow");
      countertie=0;
      setTimeout(function(){ changeturn(); }, 500);

    }

  $("#restartbutton").click(function(){
    reset();
  });
    
  


  }