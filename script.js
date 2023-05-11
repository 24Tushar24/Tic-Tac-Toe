console.log("Welcome to Tic Tac Toe")
let gamemusic= new Audio("music.mp3")
let gameover=new Audio("gameover.wav")
let victory=new Audio("victory.wav")
let turn="X"
let gameend=false;



//Function to change the turn
const changeturn=()=>{
    return turn ==="X"?0: "X"
}


//Function to Check for Win
const checkwin=()=>{
  let boxtext=document.getElementsByClassName('boxtext');
  let win=  
  [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]
 win.forEach(e=>{
  if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
    document.querySelector('.info').innerText= boxtext[e[0]].innerText + " Won"
    gameend=true;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px"
  }
 })
}





//Game Logic
gamemusic.play();
let boxes=document.getElementsByClassName("box");

Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText=turn;
            turn=changeturn();
            checkwin();
            if(!gameend){
              document.getElementsByClassName("info")[0].innerText="Turn for " + turn;
            }
            

        }
    })
})


// Add onclick Listener on Reset button

reset.addEventListener('click', ()=>{
  let boxtext=document.querySelectorAll('.boxtext');
  Array.from(boxtext).forEach(element=>{
    element.innerText=""
  });
  turn="X";
  gameend=true;
  document.getElementsByClassName("info")[0].innerText="Turn for " + turn;
  document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px"

})