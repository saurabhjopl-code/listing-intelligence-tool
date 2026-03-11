export function computeStyleCoverage(styleSkuIndex, skuStatus){

if(!styleSkuIndex) return [];

const skuStatusMap = {};

skuStatus.forEach(row=>{
    skuStatusMap[row.uniware_sku] = row.status;
});

const result = [];

Object.keys(styleSkuIndex).forEach(styleid=>{

    const skus = styleSkuIndex[styleid];

    let live = 0;

    skus.forEach(sku=>{
        if(skuStatusMap[sku] === "LIVE"){
            live++;
        }
    });

    result.push({
        styleid,
        live,
        total: skus.length
    });

});

return result;

}
