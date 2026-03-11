export function buildCount(master,data){

const map={}

data.forEach(r=>{

if(!map[r.uniware_sku]){
map[r.uniware_sku]=0
}

map[r.uniware_sku]++

})

return master.map(r=>({

uniware_sku:r.uniware_sku,
styleid:r.styleid,
category:r.category,
count: map[r.uniware_sku] || 0

}))

}
