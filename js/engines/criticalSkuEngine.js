export function getCriticalSkus(skuStatus){

return skuStatus
.filter(r=>r.status==="CRITICAL")
.map(r=>({

uniware_sku:r.uniware_sku,
styleid:r.styleid,
stock:r.stock,
status:r.status

}));

}
