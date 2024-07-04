
let quote = document.querySelector(".advice");
let adviceId = document.querySelector(".advice-id span");
let btn = document.querySelector("button");

window.onload=()=>
{
getQuote();
}
btn.addEventListener("click",()=>{
  getQuote();
})
function getQuote()
{
  
  fetch("https://api.adviceslip.com/advice")
    .then((json) => json.json())
    .then((data) => {
      adviceId.innerHTML=data.slip.id;
      quote.innerHTML = `"${data.slip.advice}"`;
    });
}
