var cer=document.querySelector("#curser")
var cerBlur=document.querySelector("#curserBlur")

document.addEventListener("mousemove",function(dets){
  cer.style.left=dets.x+"px"
  cer.style.top=dets.y+"px"
  
  cerBlur.style.left=dets.x-150+"px"
  cerBlur.style.top=dets.y-150+"px"
})

 

gsap.to("#nav",{
  backgroundColor:"#000",
height:"110px",
 
duration:1,
scrollTrigger:{
  trigeer:"#nav",
  scroller:"body", 
   start:"top -10%",
  end:"top -11%",
  scrub:1


}

})
gsap .to("#main",{
backgroundColor:"#000",
duration:2,
scrollTrigger:{
      trigeer:"#main",
      scroller:"body",
      start:"25%",
      end:"70%",
      
      scrub:2
}

})

 
 