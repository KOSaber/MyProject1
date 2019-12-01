window.onload = function () {
    this.alert("let's start the game ..")
   

var turn = 0;

function play(divnumber){

 var id = divnumber.attr("id");
 var newid= "#"+id;

 //console.log($(`${newid} > span:first-child` ));

  if(!($(`${newid} > span:first-child` ).hasClass(" red")) && !($(`${newid} > span:first-child`).hasClass(" yellow"))){
  
    if(turn==0){
      $(`${newid} > span:first-child`).addClass(" red");
      changeturn();
      // here check code
               }
    else if(turn==1) {
      $(`${newid} > span:first-child`).addClass(" yellow");
      changeturn();
      // here check code
          }

                                                              }
  else if(!$( `${newid} > span:nth-child(2)` ).hasClass(" red") && !$(`${newid} > span:nth-child(2)`).hasClass(" yellow")){
    if(turn==0){
      $(`${newid} > span:nth-child(2)`).addClass(" red")
      changeturn();
      // here check code
               }
    else if(turn==1)  {
      $(`${newid} > span:nth-child(2)`).addClass(" yellow")
      changeturn();
      // here check code
          }
                                                                      }                                                         
   else if(!$( `${newid} > span:nth-child(3)` ).hasClass(" red") && !$( `${newid} > span:nth-child(3)` ).hasClass(" yellow")){
    if(turn==0){
      $( `${newid} > span:nth-child(3)` ).addClass(" red")
      changeturn();
      // here check code
               }
   else if(turn==1) {
      $( `${newid} > span:nth-child(3)` ).addClass(" yellow")
      changeturn();
      // here check code
         }
                                                                    }
  else if(!$( `${newid} > span:nth-child(4)` ).hasClass(" red") && !$( `${newid} > span:nth-child(4)` ).hasClass(" yellow")){
    if(turn==0){
       $( `${newid} > span:nth-child(4)` ).addClass(" red")
       changeturn();
       // here check code
               }
    else if(turn==1) {
       $( `${newid} > span:nth-child(4)` ).addClass(" yellow")
       changeturn();
       // here check code
       }
  else return 0;                                                                  } 

}

function changeturn()
{
if(turn==0){
  $(".playerdot").addClass(" red");
  turn=1;
}
else if(turn==1){
  $(".computerdot").addClass(" yellow");
    turn=0;
  }
}

$(document).ready(function(){
  $("#board > div").hover(function(){
    $(this).css("background-color", "green");
}, function(){
    $(this).css("background-color", "rgb(34, 34, 110)");
})
});

 

    $("#board > div").click(function(){
      play($(this));
    });

    $("#normalbutton").click(function(){
      window.onload();
    });
  

  }