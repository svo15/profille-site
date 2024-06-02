const button = document.getElementById("btn");
const svg= document.getElementById("share");
const shareMenu = document.getElementById("share-menu");
var change =true;

button.addEventListener("click",()=>{
    if(change){
    button.style.backgroundColor="#6E8098";
    svg.style.fill="#ffffff";
    shareMenu.style.visibility="visible"
    change=false;
}
else if (!change) {
    button.style.backgroundColor="#ffffff";
    svg.style.fill="#6E8098";
    shareMenu.style.visibility="hidden"
    change=true;
}
    
});