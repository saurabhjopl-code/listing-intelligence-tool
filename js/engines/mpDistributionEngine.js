export function buildDistribution(data){

const dist={}

data.forEach(r=>{

if(!dist[r.uniware_sku]){
dist[r.uniware_sku]={}
}

if(!dist[r.uniware_sku][r.channel_name]){
dist[r.uniware_sku][r.channel_name]=0
}

dist[r.uniware_sku][r.channel_name]++

})

return dist

}
