let trendFoods = document.querySelectorAll(".trendFood");
let foodCard = document.querySelectorAll(".foodCard");

let count = 0;
//console.log(typeof trendFoods);

trendFoods.forEach((imgs, index) => {
  imgs.style.left = `${index * 100}%`;
});
const myFun = () => {
  trendFoods.forEach((curImg) => {
    curImg.style.transform = `translateX(-${count * 100}%)`;
  });
};
setInterval(() => {
  count++;
  if (count == trendFoods.length) {
    count = 0;
  }
  myFun();
}, 4000);
foodCard.forEach((curCard) => {
  curCard.addEventListener("click", () => {
    console.log(curCard);

    let div = document.createElement("div");
    div.classList.add("cardDetail");
    div.innerHTML = `
        <img id="icon" src=cancelIcon.svg alt="">
        <img src=${curCard.firstElementChild.src} alt="">
        <h1>Food Details</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt autem doloremque error modi, quam 
            nulla velit voluptates magnam eligendi perferendis assumenda magni illo 
            ipsum. Incidunt ducimus doloribus blanditiis ipsum. Voluptatum?</p>`
    document.querySelector("body").appendChild(div);
    document.getElementById("icon").onclick = () => {
      div.remove();
    };
  });
});
