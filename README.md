# MyProject1 solution ..


<h1 align="center">
  <br>
  <img src="https://github.com/akashnimare/foco/blob/master/app/img/foco.png" alt="Foco" width="160">
</h1>

<h4 align="center"> Connect4 Game .</h4>

A Connect4 Game which designed for 2 playeres each player has color by clicking start the game it will start and change turn after each play and alert if any player win or it's tie .

# Used Technologies

- [x] Offline support
- [x] Cross-platform
- [x] Awesome sounds
- [x] No singup/login required
- [ ] Auto launch
- [ ] Auto updates



### wireframes 
👉 Watch it <img src="https://j.gifs.com/BBqE8Y.gif">
<br>

[![Watch demo](https://cloud.githubusercontent.com/assets/2263909/18597112/0622a3b0-7c6a-11e6-897d-13f0aa36b6e4.png)]

### User stories

Build app for OSX
```sh
$ npm run build:osx
```
Build app for Linux
```sh
$ npm run build:linux
```

## Development Process and problem-solving strategy


## Future plans



## Winner code 
```sh
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
        if((winnerc==4) || (winnerr==4) ){
          
          setTimeout(function(){ alert("Player2 won!!"); }, 200);
          setTimeout(function(){ reset(); }, 300);

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

## Favorite functions


## Created by KS ..

