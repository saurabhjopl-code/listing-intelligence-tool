export function buildListingMap(sheets){

const data = sheets.data;
const channels = sheets.channel_name;

const map = {};

channels.forEach(r=>{
map[r.channel_name] = {
mp:r.mp,
account:r.account
};
});

return data.map(r=>{

const c = map[r.channel_name] || {};

return {
uniware_sku:r.uniware_sku,
mp:c.mp || "",
account:c.account || "",
mp_sku:r.mp_sku,
pid:r.pid
};

});

}
