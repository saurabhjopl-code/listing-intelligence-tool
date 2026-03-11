export function applyFilters(data, filters){

return data.filter(row=>{

if(filters.mp && row.mp !== filters.mp) return false;

if(filters.acc && row.account !== filters.acc) return false;

if(filters.category && row.category !== filters.category) return false;

return true;

});

}
