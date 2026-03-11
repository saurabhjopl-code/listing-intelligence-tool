let bar;

export function startProgress(){

bar = document.getElementById("progressBar");

if(!bar) return;

bar.style.display = "block";
bar.style.width = "10%";

}

export function updateProgress(value){

if(!bar) return;

bar.style.width = value + "%";

}

export function finishProgress(){

if(!bar) return;

bar.style.width = "100%";

setTimeout(()=>{
bar.style.display = "none";
},500);

}
