export function computeStyleCoverage(skuStatus){

const map = {};

skuStatus.forEach(row=>{

if(!map[row.styleid]){

map[row.styleid]={

styleid:row.styleid,

total:0,

live:0

};

}

map[row.styleid].total++;

if(row.status==="LIVE"){

map[row.styleid].live++;

}

});

return Object.values(map);

}
