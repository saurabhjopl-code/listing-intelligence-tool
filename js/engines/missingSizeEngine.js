export function getMissingSizes(catalog, listings){

const listingSet = new Set();

listings.forEach(r=>{
listingSet.add(r.uniware_sku);
});

return catalog.filter(r=>!listingSet.has(r.uniware_sku));

}
