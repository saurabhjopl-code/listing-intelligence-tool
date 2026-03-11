let expandedSKU = null
let visibleRows = 50


export function renderMatrix(container,data,mpGroups){

const slice = data.slice(0,visibleRows)

let html="<table><thead><tr>"

html+="<th>uniware_sku</th>"
html+="<th>styleid</th>"
html+="<th>category</th>"
html+="<th>size</th>"

Object.keys(mpGroups).forEach(mp=>{

html+=`<th>${mp} (${mpGroups[mp].length})</th>`

})

html+="</tr></thead><tbody>"

slice.forEach(r=>{

html+="<tr>"

html+=`<td>${r.uniware_sku}</td>`
html+=`<td>${r.styleid}</td>`
html+=`<td>${r.category}</td>`
html+=`<td>${r.size}</td>`

Object.keys(mpGroups).forEach(mp=>{

const cls=r[mp]==="LIVE"?"live":"nonlive"

html+=`<td class="${cls}">${r[mp]}</td>`

})

html+="</tr>"

})

html+="</tbody></table>"

if(data.length>visibleRows){

html+=`
<div style="padding:20px;text-align:center">
<button id="loadMore">Load More</button>
</div>
`

}

container.innerHTML=html

const btn=document.getElementById("loadMore")

if(btn){

btn.onclick=()=>{

visibleRows+=50

renderMatrix(container,data,mpGroups)

}

}

}



export function renderCount(container,data,distribution){

const slice=data.slice(0,visibleRows)

let html="<table><thead><tr>"

html+="<th></th>"
html+="<th>uniware_sku</th>"
html+="<th>styleid</th>"
html+="<th>category</th>"
html+="<th>LIVE mp_sku count</th>"

html+="</tr></thead><tbody>"

slice.forEach(r=>{

const expanded = expandedSKU===r.uniware_sku

html+="<tr>"

html+=`
<td class="expandBtn" data-sku="${r.uniware_sku}">
${expanded?"▼":"▶"}
</td>
`

html+=`<td>${r.uniware_sku}</td>`
html+=`<td>${r.styleid}</td>`
html+=`<td>${r.category}</td>`
html+=`<td>${r.count}</td>`

html+="</tr>"

if(expanded){

const dist=distribution[r.uniware_sku]||{}

Object.keys(dist).forEach(mp=>{

html+="<tr class='distRow'>"

html+="<td></td>"
html+=`<td colspan="2">${mp}</td>`
html+=`<td colspan="2">${dist[mp]}</td>`

html+="</tr>"

})

}

})

html+="</tbody></table>"

container.innerHTML=html


document.querySelectorAll(".expandBtn").forEach(btn=>{

btn.onclick=()=>{

const sku=btn.dataset.sku

expandedSKU = expandedSKU===sku ? null : sku

renderCount(container,data,distribution)

}

})

}
