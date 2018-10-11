var i;
var hits=0;
var inputResult= document.getElementById('scoreResult');
const btnCheck = document.getElementById("check");
var lists= document.querySelectorAll(".alternatives");
const modal = document.querySelector("#score");
const btnRestart = document.getElementById('restart');
const listItens = document.getElementsByTagName('li');

btnCheck.addEventListener('click', checkResult);
btnRestart.addEventListener('click', restart);

for(i = 0; i<lists.length; i++){
    lists[i].addEventListener('click', chooseOption); 
}
function  chooseOption(e){
    var target= e.target;
    
    target.className = "picked";
    if(target.getAttribute('id')=='correct'){
        hits++;
        console.log(hits);        
    }
    }
function checkResult(){
    inputResult.innerHTML = hits;  
    modal.className= 'descendo';
    for(i=0;i<listItens.length;i++){
        if(listItens[i].classList.contains('picked')){
            listItens[i].classList.remove('picked');
        }};
}
function restart(){
    if(modal.classList.contains('descendo')){
        modal.classList.remove('descendo');
        modal.classList.add('hideModal');
    }
    hits=0;    
    chooseOption();
}

