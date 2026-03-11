export function createTable(columns,data){

let html = "<table class='table'>";

html += "<thead><tr>";

columns.forEach(col=>{

html += `<th>${col}</th>`;

});

html += "</tr></thead>";

html += "<tbody>";

data.forEach(row=>{

html += "<tr>";

columns.forEach(col=>{

html += `<td>${row[col] || ""}</td>`;

});

html += "</tr>";

});

html += "</tbody></table>";

return html;

}
