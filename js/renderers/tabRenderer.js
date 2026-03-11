export function initTabs(callback){

const buttons = document.querySelectorAll(".tabs button");

buttons.forEach(btn=>{

btn.addEventListener("click",()=>{

const tab = btn.dataset.tab;

callback(tab);

});

});

}
