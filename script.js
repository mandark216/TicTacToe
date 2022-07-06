console.log("welcome to tic toc toe")

let music = new Audio("Music.mp3");
let cli = new Audio("Click.mp3");
let end = new Audio('Win.mp3');
let turn = "X";

// function to change the turmn
const changeturn = () => {
    return turn === 'X' ? '0' : 'X'

}


// function check for win

const checkwin = () => {
    let boxtext=document.getElementsByClassName("boxtext");
    let wins=[

[0,1,2,5,4,0],
[3,4,5,5,14,0],
[6,7,8,5,24,0],
[0,3,6,-5,14,90],
[1,4,7,5,14,90],
[2,5,8,15,14,90],
[0,4,8,5,15,45],
[2,4,6,5,15,135]  ]

wins.forEach(e=>{

    if (( boxtext[e[0]].innerText=== boxtext[e[1]].innerText) &&  ( boxtext[e[2]].innerText=== boxtext[e[1]].innerText) && ( boxtext[e[0]].innerText !=='') )
     {
        console.log("jeet gaya")
        document.getElementById("jeet").innerText= boxtext[e[0]].innerText + '  Won'
        let c=document.querySelector('.imginfo')
        c.getElementsByTagName('img')[0].style.width = "236px"
        end.play();
        document.querySelector(".line").style.width="20vw"
        document.querySelector(".line").style.transform=`translate(${e[3]}vw ,${e[4]}vw) rotate(${e[5]}deg)`
        

    }
})

}




// game logic 
let boxes = document.getElementsByClassName('box')


Array.from(boxes).forEach(element=>{

    let boxtext= element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        
        if(boxtext.innerText===""){
            cli.play();
            music.play();


            boxtext.innerText=turn;
            turn=changeturn();
            checkwin();
        
 document.getElementById('info').innerText="Turn on "+turn;
    

        }
    })
   
})

//  add on clike on reset buuton

reset.addEventListener('click',()=>{
    let boxtext= document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element=>{
        element.innerText=" "
    })
    turn="X"
    document.getElementById('info').innerText="Turn on "+turn;
    let c=document.querySelector('.imginfo')
    c.getElementsByTagName('img')[0].style.width = "0px"
    document.getElementById("jeet").innerText= " "
    document.querySelector(".line").style.width="0"


})