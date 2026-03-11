export function computeStyleCoverage(styleSkuIndex, skuStatus, catalog){

const skuMap = {};

skuStatus.forEach(r=>{
skuMap[r.uniware_sku] = r.status;
});

const catalogMap = {};

catalog.forEach(r=>{
catalogMap[r.styleid] = r;
});

const result = [];

Object.keys(styleSkuIndex).forEach(style=>{

const skus = styleSkuIndex[style];

let live = 0;

skus.forEach(sku=>{

if(skuMap[sku]==="LIVE") live++;

});

result.push({

styleid:style,
category:catalogMap[style]?.category || "",
parent_remark:catalogMap[style]?.parent_remark || "",
live,
total:skus.length

});

});

return result;

}
