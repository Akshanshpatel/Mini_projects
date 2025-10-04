let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newGamebtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg");


let turnO=true; // true for O's turn, false for X's turn

const winPatterns=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
]

const resetGame=()=>{
turnO=true;
enableBoxes();
msgContainer.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showWinner=(winner)=>{
    msg.innerHTML=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        const [i, j, k] = pattern;
        let pos1 = boxes[i].innerText;
        let pos2 = boxes[j].innerText;
        let pos3 = boxes[k].innerText;

        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
            showWinner(pos1);
            return;
        }
        else{
            let isDraw = true;
            for (let box of boxes) {
                if (box.innerText === "") {
                    isDraw = false;
                    break;
                }
            }
            if (isDraw) {
                msg.innerHTML = "It's a Draw!";
                msgContainer.classList.remove("hide");
                disableBoxes();
                return;
            }
        }
    }
};

newGamebtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);