let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#rt");
let newgame=document.querySelector("#new-btn");
let msgcon=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let tern0=true;
const win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box)=>{
    box.addEventListener("click", () =>{
            console.log("box is clicked");
            if(tern0){
                box.innerText="0";
                tern0=false;
            }
            else{
                box.innerText="X";
                tern0=true;
            }
            box.disabled=true;
            checkwin();
    }); 
});
const disablebtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enable=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const winpr=(pos1)=>{
    
    msg.innerText="Congratulation Winner is "+pos1;
    msgcon.classList.remove("hide");
    disablebtn();

}
const checkwin =()=>{
for(let pa of win){
    let pos1=boxes[pa[0]].innerText;
    let pos2=boxes[pa[1]].innerText;
    let pos3=boxes[pa[2]].innerText;
    if(pos1 !="" && pos2 !="" && pos3 !=""){

        if(pos1==pos2 && pos2==pos3){
            winpr(pos1);
        }
         
    }
    }
};
let resetgame=()=>{
    tern0=true;
    enable();
    msgcon.classList.add("hide");
}
newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);