let key1=document.querySelector("#key");
let key2=document.querySelector("#keycode");
document.addEventListener("keyup",(event)=>{
key1.innerText=event.key;
key2.innerText=event.keyCode;
})
