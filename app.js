const p1Button = document.querySelector('#p1button')
const p2Button = document.querySelector('#p2button')
const p1Display = document.querySelector('#p1Display')
const p2Display = document.querySelector('#p2Display')
const resetDisplay = document.querySelector("#reset")
const winningScoreSelect = document.querySelector('#playto')

let p1Score =0;
let p2Score =0;
let winningScore =null;
let isGameOver =false;

winningScoreSelect.addEventListener('change',function(){
        winningScore =parseInt(this.value)
        reset()
})

p1Button.addEventListener('click',function(){
if(!isGameOver){
        p1Score+=1;
}
        if(winningScore === p1Score){
                isGameOver =true;
                p1Display.classList.add('has-text-success')
                p2Display.classList.add('has-text-danger')
                p1Button.disabled=true;
                p2Button.disabled=true;
        }
        p1Display.textContent= p1Score;
})
p2Button.addEventListener('click',function(){
        if(!isGameOver){
                p2Score+=1;
        }
                if(winningScore === p2Score){
                        isGameOver =true;
                        p2Display.classList.add('has-text-success')
                p1Display.classList.add('has-text-danger')
                p1Button.disabled=true;
                p2Button.disabled=true;
                }
                p2Display.textContent= p2Score;
        })

resetDisplay.addEventListener('click',reset)

function reset(){
        isGameOver= false;
        p1Score =0;
        p2Score=0;
        p1Display.textContent=0;
        p2Display.textContent=0;
        p1Display.classList.remove('has-text-danger','has-text-success')
        p2Display.classList.remove('has-text-danger','has-text-success')
        p1Button.disabled=false;
        p2Button.disabled=false;
}