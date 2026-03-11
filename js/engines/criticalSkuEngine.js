export function getCriticalSkus(skuStatus){

return skuStatus.filter(row=>{

return row.status === "CRITICAL";

});

}
