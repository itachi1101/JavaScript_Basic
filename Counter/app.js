const dec=document.getElementById('decrease');
const inc=document.getElementById('increase');
const res=document.getElementById('reset');
const change=document.getElementById('number');
let val=0;
inc.addEventListener('click',function(){
    val=val+1;
    if(val>=1){
        change.style.color="green";
    }
    change.textContent=val;
});
dec.addEventListener('click',function(){
    val=val-1;
    if(val<0)change.style.color="red";
    change.textContent=val;
});
res.addEventListener('click',function(){
    val=0;

    change.textContent=val;
});