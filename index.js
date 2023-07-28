// Mouse event
const mousemove = document.querySelector(".mousemove");
window.addEventListener('mousemove', (e)=> {
    mousemove.style.left = e.pageX + 'px';
    mousemove.style.top = e.pageY + 'px';
});
//scroll title , Illustration and paragraphe
const body = document.querySelector('body');
const tip = document.querySelector('article');
body.addEventListener('click', ()=>{
    body.classList.add("show-body");
});
//-------------------------
const Name = document.querySelector('.text');
const email = document.querySelector('.email');
const message = document.querySelector('textarea');
const form = document.querySelector('.submit');
const signiale =document.querySelector('.formula2 p');
console.log("signiale");
let pseudo = "";
let adress = "";
let text= "";
Name.addEventListener("input",(e)=>{
    pseudo = e.target.value;
})
email.addEventListener("input",(e)=>{
    adress = e.target.value;
})
message.addEventListener("input",(e)=>{
    text = e.target.value;
})
form.addEventListener("click",(e)=>{
    e.preventDefault(); 
})
form.addEventListener("click",()=>{
  signiale.style.visibility = "visible";
})


