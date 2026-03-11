import { loadSheets } from "./core/sheetLoader.js";
import { buildMatrix } from "./engines/matrixEngine.js";
import { buildCount } from "./engines/countEngine.js";
import { buildDistribution } from "./engines/mpDistributionEngine.js";
import { renderMatrix, renderCount } from "./renderers/tableRenderer.js";

let MATRIX = [];
let COUNT = [];
let MPGROUPS = {};
let LISTINGSET = new Set();
let DISTRIBUTION = {};

let TAB = "matrix";

const tableArea = document.getElementById("tableArea");
const bar = document.getElementById("progressBar");

function showProgress(v) {

    bar.style.display = "block";
    bar.style.width = v + "%";

    if (v === 100) {
        setTimeout(() => {
            bar.style.display = "none";
        }, 400);
    }
}

async function init() {

    showProgress(10);

    const sheets = await loadSheets();

    showProgress(40);

    const result = buildMatrix(
        sheets.master,
        sheets.data,
        sheets.channel
    );

    MATRIX = result.matrix;
    MPGROUPS = result.mpGroups;
    LISTINGSET = result.listingSet;

    showProgress(60);

    COUNT = buildCount(
        sheets.master,
        sheets.data
    );

    showProgress(80);

    DISTRIBUTION = buildDistribution(
        sheets.data
    );

    showProgress(90);

    render();

    showProgress(100);
}

function render() {

    if (TAB === "matrix") {
        renderMatrix(
            tableArea,
            MATRIX,
            MPGROUPS,
            LISTINGSET,
            DISTRIBUTION
        );
    } else {
        renderCount(
            tableArea,
            COUNT
        );
    }

}

document.querySelectorAll(".tabs button").forEach(b => {

    b.onclick = () => {

        document.querySelectorAll(".tabs button")
            .forEach(x => x.classList.remove("active"));

        b.classList.add("active");

        TAB = b.dataset.tab;

        render();
    };

});

const search = document.getElementById("searchBox");

let timer;

search.oninput = () => {

    clearTimeout(timer);

    timer = setTimeout(() => {

        const t = search.value.toLowerCase();

        const filtered = MATRIX.filter(r =>
            JSON.stringify(r).toLowerCase().includes(t)
        );

        renderMatrix(
            tableArea,
            filtered,
            MPGROUPS,
            LISTINGSET,
            DISTRIBUTION
        );

    }, 300);
};

init();
