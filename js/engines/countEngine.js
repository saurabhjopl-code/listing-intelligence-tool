export function buildCount(master,data){

const map={};

data.forEach(r=>{

if(!map[r.uniware_sku]){
map[r.uniware_sku]=new Set();
}

map[r.uniware_sku].add(r.mp_sku);

});

return master.map(r=>({

uniware_sku:r.uniware_sku,
styleid:r.styleid,
category:r.category,
count: map[r.uniware_sku] ? map[r.uniware_sku].size : 0

}));

}
