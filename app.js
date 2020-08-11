
 function ready(){

const total=4;
var score=0;


var res=document.querySelector('.result');


const q1=document.forms['quiz']["q1"].value;
const q2=document.forms['quiz']["q2"].value;
const q3=document.forms['quiz']["q3"].value;
const q4=document.forms['quiz']["q4"].value;
const fa=document.querySelector('.fa')
//validation

for(var i=1; i<=total; i++){
    if(eval('q'+i)==null || eval('q'+i)==''){
        alert('you have missed question ' + i);
     return false;
    }
}

//right answeres
const ans=['b','b','a','b'];



for(var i=1; i<=total; i++){
    if(eval('q'+i)== ans[i-1]){
        score++;
       
    }
}
alert(score);
fa.innerHTML=score;
 return false;

 }