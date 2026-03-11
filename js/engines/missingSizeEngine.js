export function getPartialStyles(styleMpIndex){

const result = [];

Object.values(styleMpIndex).forEach(mpData=>{

Object.values(mpData).forEach(row=>{

if(row.live_sizes > 0 && row.live_sizes < row.total_sizes){

result.push(row);

}

});

});

return result;

}
