const SHEETS={

data:"https://docs.google.com/spreadsheets/d/e/2PACX-1vT-JkfNtpddZXlSelTeFcrXsS4lZaZQdZu2ZdApqtaB7PDGTfeBnH_zhGQB3yQuqvvBRotFfD-q0HV7/pub?gid=765260582&single=true&output=csv",

channel:"https://docs.google.com/spreadsheets/d/e/2PACX-1vT-JkfNtpddZXlSelTeFcrXsS4lZaZQdZu2ZdApqtaB7PDGTfeBnH_zhGQB3yQuqvvBRotFfD-q0HV7/pub?gid=1645772386&single=true&output=csv",

master:"https://docs.google.com/spreadsheets/d/e/2PACX-1vT-JkfNtpddZXlSelTeFcrXsS4lZaZQdZu2ZdApqtaB7PDGTfeBnH_zhGQB3yQuqvvBRotFfD-q0HV7/pub?gid=69497712&single=true&output=csv"

};

async function loadCSV(url){

const res=await fetch(url);
const text=await res.text();

const lines=text.trim().split("\n");

const headers=lines[0].split(",");

return lines.slice(1).map(l=>{

const v=l.split(",");
const obj={};

headers.forEach((h,i)=>obj[h.trim()]=v[i]);

return obj;

});

}

export async function loadSheets(){

return{

data:await loadCSV(SHEETS.data),
channel:await loadCSV(SHEETS.channel),
master:await loadCSV(SHEETS.master)

};

}
