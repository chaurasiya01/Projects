const submitBtn=document.getElementById("submit");
// const value=document.getElementById("input").value;
// const result=document.getElementById("result");
// const img=document.getElementById("img");
// const values=[];
// const images=[];

submitBtn.onclick=()=>{
    const value=document.getElementById("input").value;
const result=document.getElementById("result");
const img=document.getElementById("img");
const values=[];
const images=[];
     for(let i=0;i<value;i++){
        let val=Math.floor(Math.random()*6)+1;
        values.push(val);
        images.push(`<img src="diceImg/${val}.png" alt="Dice ${val}">`);
 
     }
      result.textContent=`Dice:${values.join(',')}`;
     img.innerHTML=images.join('');

}
