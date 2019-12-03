window.onload = function () {
    this.alert("let's start the game ..")
   

var turn = 0;
var countertie=0;

/* play function called whenever any div clicked and take it as aparameter so that it check first circle in div that is clicked 
if its didnt have color class it will add color class to it by seeing which player turn is now and check if there is vertical or 
horizantal winner if yes finish the game and reset it if no increase the increment counter and check if there is diagonal winner 
if yes reset the game if no it will change turn and go out of the function 
*/
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
          // ======
        }
        if((winnerc==4) || (winnerr==4) )
        {
          setTimeout(function(){ alert("Player1 won!!"); }, 200);
          setTimeout(function(){ reset(); }, 300);
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
          //==== check win row ckeck when he click the div at row he add at it if all circles at same livel
          // in other colums have same color 
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
        if((winnerc==4) || (winnerr==4) ){
          
          setTimeout(function(){ alert("Player2 won!!"); }, 200);
          setTimeout(function(){ reset(); }, 300);

        }
        
        changeturn();
        
            }
break;

    }
                    }
      //------ check diagonal win 
    if($(`${"#colum1"} > span:nth-child(1)`).hasClass("cir red") && $(`${"#colum2"} > span:nth-child(2)`).hasClass("cir red") && $(`${"#colum3"} > span:nth-child(3)`).hasClass("cir red") && $(`${"#colum4"} > span:nth-child(4)`).hasClass("cir red"))
      {
        setTimeout(function(){ alert("Player1 won!!"); }, 200);
        setTimeout(function(){ reset(); }, 300);
      }
    if($(`${"#colum1"} > span:nth-child(1)`).hasClass("cir yellow") && $(`${"#colum2"} > span:nth-child(2)`).hasClass("cir yellow") && $(`${"#colum3"} > span:nth-child(3)`).hasClass("cir yellow") && $(`${"#colum4"} > span:nth-child(4)`).hasClass("cir yellow"))
      {
        setTimeout(function(){ alert("Player2 won!!"); }, 200);
        setTimeout(function(){ reset(); }, 300);
      }
      //
    if($(`${"#colum1"} > span:nth-child(4)`).hasClass("cir red") && $(`${"#colum2"} > span:nth-child(3)`).hasClass("cir red") && $(`${"#colum3"} > span:nth-child(2)`).hasClass("cir red") && $(`${"#colum4"} > span:nth-child(1)`).hasClass("cir red"))
      {
        setTimeout(function(){ alert("Player1 won!!"); }, 200);
        setTimeout(function(){ reset(); }, 300);
      }
    if($(`${"#colum1"} > span:nth-child(4)`).hasClass("cir yellow") && $(`${"#colum2"} > span:nth-child(3)`).hasClass("cir yellow") && $(`${"#colum3"} > span:nth-child(2)`).hasClass("cir yellow") && $(`${"#colum4"} > span:nth-child(1)`).hasClass("cir yellow"))
      {
        setTimeout(function(){ alert("Player2 won!!"); }, 200);
        setTimeout(function(){ reset(); }, 300);
      }

      //----   check tie   by make counter start from 0 and chick it if equal 16 and no one win its be tie          

    if(countertie == 16)
    {
      setTimeout(function(){ alert("it's tie!!"); }, 300);
      setTimeout(function(){ reset(); }, 300);
    }
                       } 

// changeturn function check if its player1 turn or player2 turn to change turn color and remove previous color of other player

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
// function change div color when mouse over it and return its color when mouse move out its range
$(document).ready(function(){
  $("#board > div").hover(function(){
    $(this).css("background-color", "green");
}, function(){
    $(this).css("background-color", "rgb(34, 34, 110)");
})
});

changeturn();
// each time any div clicked it will call play function and send div that is clicked as parameter 
    $("#board > div").click(function(){
      play($(this));
    });
//reset function make clearfor the bored of the game by remove color classes from circles and turn colores
//and reset tie counter and call changeturn function 
    function reset(){
  
      $("[class*='cir']").removeClass("red yellow");
      $(".playerdot").removeClass("red");
      $(".computerdot").removeClass("yellow");
      countertie=0;
      setTimeout(function(){ changeturn(); }, 500);

    }
// if restart game button clicked it will call reset function
  $("#restartbutton").click(function(){
    reset();
  });
    
  


  }