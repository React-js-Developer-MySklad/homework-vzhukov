import html from "./app.html";
import './app.css'
import table from './contragent/table/table.js'
import modal from './contragent/modal/modal.js'


const rootElement = document.getElementById('root');
rootElement.innerHTML = html;

const tb = table(document.getElementById("table-container"), data);
const md = modal(document.getElementById("modal-container"), data, tb.refresh);
document.getElementById("add-button").onclick = md.open;