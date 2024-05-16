 const submit=document.getElementById("submit");
 const btn1=document.getElementById("btn1");
const nametxt=document.getElementById("hide");
 const h=document.getElementById("h1");

 submit.addEventListener("click" ,()=>{
     let username=document.getElementById("txt1").value;
     let password=document.getElementById("pas1").value;
     let name=document.getElementById("nametxt").value;
     username=username.trim();
     password=password.trim();
       if(username!=""&& password!="" && btn1.textContent !="Login"){
      
       fetch(`http://localhost:8080/userLogin/${username}`).then(data=>{
         if(!data.ok){
          throw new Error("User Not found");
         }  
         return data.json();    
    }).then(data=>{
            if(data.password==password){
              test2();
              async function test2(){
                localStorage.setItem("username",data.username);
               let obj={
                    "username":data.username,
                    "password":data.password,
                    "status":true,
                    "name":data.name             
                    }
                    await fetch("http://localhost:8080/userLogin",{
                      method:"POST",
                      body:JSON.stringify(obj), 
                      headers:{"Content-type":"application/json"},
                     });
                 
                   } 
                location.href="QuizHomePage.html";
            }else{
              window.alert("Wrong Password")
            }
        
       }).catch(error=>window.alert(error));

 } else if(btn1.textContent=="Login" && username!=""&& password!=""&& name!="" ){
  let flage=false;
  test();
 async function test(){
 await fetch(`http://localhost:8080/userLogin/${username}`).then(data=>{
    if(data.ok){
      window.alert("Username already exists");
 }
    else{
      flage=true;
    }

}).catch(error=>window.alert(error));
if(flage){
  test2();
 async function test2(){

  let obj={
        "username":username,
       "password":password,
        "status":false,
        "name":name

       }
       await fetch("http://localhost:8080/userLogin",{
         method:"POST",
         body:JSON.stringify(obj), 
         headers:{"Content-type":"application/json"},
        });
        window.alert("User Created now you can login "); 
        location.reload(true); 
      } 
}
 }
}
 }
 );

 
 
 
 btn1.onclick=()=>{
  if(btn1.textContent!="Login"){
   document.getElementById("img1").style.display="none";
   document.getElementById("img2").style.display="none";
    nametxt.style.display="block";
    document.getElementById("ptag").textContent="Already have an account?";
    submit.textContent="Sign Up";
    document.getElementById("main-div").style.height="450px";
   let temp= document.getElementById("h1")
   temp.textContent="Register";
   temp.style.fontSize="30px";
   temp.style.marginTop="10px";
   btn1.textContent="Login";
  
     
   }else{
    location.reload(true);
   }

   

 }
 


 
 //  submit.addEventListener("click" ,()=>{
//      let username=document.getElementById("txt1").value;
//      let password=document.getElementById("pas1").value;
    //    let obj={
    //     "username":username,
    //    "password":password,
    //     "status":true
    //    }
    //    fetch("http://localhost:8080/userLogin",{
    //      method:"POST",
    //      body:JSON.stringify(obj), 
    //      headers:{"Content-type":"application/json"},
    //     });



//   location.href="pr.html"

//  });