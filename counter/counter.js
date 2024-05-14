const dec=document.getElementById("decreseBtn");
const inc=document.getElementById("increaseBtn");
const res=document.getElementById("resetBtn");
const lable=document.getElementById("countLable");
let count=0;
dec.onclick=()=>{
    count--;
    lable.textContent=count;
}
inc.onclick=()=>{
    count++;
    lable.textContent=count;
}
res.onclick=()=>{
    count=0;
    lable.textContent=count;
     
}
