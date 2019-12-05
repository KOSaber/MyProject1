# connect4 game solution ..
<br>
<img src="https://github.com/KOSaber/MyProject1/blob/master/img/connect4 starting.jpg">
<br>

A Connect4 Game which designed for 2 playeres each player has color by clicking start the game it will start and change turn after each play and alert if any player win or it's tie .

# Used Technologies:
- [x] JavaScript
- [x] DOM with Jquery
- [x] CSS
- [x] HTML

### wireframes :
👉 Watch it 
<br><br>
<img src="https://github.com/KOSaber/MyProject1/blob/master/img/connect4.jpg" width="400" height="400">
<br>
<img src="https://github.com/KOSaber/MyProject1/blob/master/img/wireframe.jpg" width="400" height="400">
<br>
<img src="https://github.com/KOSaber/MyProject1/blob/master/img/wireframe2.jpg" width="400" height="400">
<br>

### User stories:
As a user, I should be able to start a new connect 4 game.
As a user, I should be able to click on a square to add marker first and then the other marker, and so on.
As a user, I should be shown a message after each turn for if I win, lose, tie or who's turn it is next.
As a user, I should not be able to click the same square twice.
As a user, I should be shown a message when I win, lose or tie.
As a user, I should not be able to continue playing once I win, lose, or tie
As a user, I should be able to play the game again without refreshing the page (after finishing the game they can restart the game)
<br>
https://github.com/KOSaber/MyProject1/blob/master/vid/diagonal%20win.mp4
https://github.com/KOSaber/MyProject1/blob/master/vid/diagonal2%20win.mp4
https://github.com/KOSaber/MyProject1/blob/master/vid/horizantal%20win.mp4
https://github.com/KOSaber/MyProject1/blob/master/vid/vertical%20win.mp4
https://github.com/KOSaber/MyProject1/blob/master/vid/tie.mp4


## Development Process and problem-solving strategy:

- [x]  functions
- [x]  methods
- [x]  variables
- [x]  loops
- [x]  alert
- [x]  if else
- [x]  if condition
- [x]  selectores

## Game Features :
- [x]  alert the winner name
- [x]  alert if its tie
- [x]  restart game button
- [x]  user color switching
- [x]  alert dialog

## Future plans:
- [x]  artificial intelligence (computer play againest the player and try to peat me)
- [x]  user can add his name 
- [x]  user can choose color
- [x]  make it 7*6

## Winner code:
```sh
// chick win
        winnerc=0;
        winnerr=0;
        for(j=1;j<=4;j++){
          //-- ckick win col ckeck when col if all circles in col div has same color he win 
          if($(`${newid} > span:nth-child(`+j+`)` ).hasClass("cir yellow"))
          {
            winnerc += 1;
          }
          //-----check win row ckeck when he click the div at row he add at it if all circles at same livel in other colums have same color 
          if($(`${"#colum"}`+ j + ` > span:nth-child(`+ i +`)`).hasClass("cir yellow"))
          {
            winnerr +=1;
          }
        }
        if((winnerc==4) || (winnerr==4) ){
          
          setTimeout(function(){ alert("Player2 won!!"); }, 200);
          setTimeout(function(){ reset(); }, 300);
        }
```
```sh
// my new check diagonal win function 
function diagwin(){
    if($(".diag").not(".red").length == 0 || $(".diag2").not(".red").length == 0)
    {
      win1();
      setTimeout(function(){ reset(); }, 300);
    }
    if($(".diag").not(".yellow").length == 0 || $(".diag2").not(".yellow").length == 0)
    {
      win2();
      setTimeout(function(){ reset(); }, 300);
    }
}
```
```sh
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
```

## Favorite functions:
changeturn function check if its player1 turn or player2 turn to change turn color and remove previous color of other player
```sh
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
```
reset function make clearfor the bored of the game by remove color classes from circles and turn colores and reset tie counter and call changeturn function 
```sh
    function reset(){
  
      $("[class*='cir']").removeClass("red yellow");
      $(".playerdot").removeClass("red");
      $(".computerdot").removeClass("yellow");
      countertie=0;
      setTimeout(function(){ changeturn(); }, 500);

    }
```
## Created by KS ..
https://kosaber.github.io/MyProject1/