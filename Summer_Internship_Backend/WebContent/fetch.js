var page = 0;
const table_limit = 10;

function addOpenModal() {
    addModal.style.display = 'block';
}

function addCloseModel() {
    clearAll();
    addModal.style.display = 'none';
}



function createRows(data_elements) {
    var rows_delete = document.querySelectorAll(".main-table-rows");
    if (rows_delete && rows_delete.length > 0) {
        for (let j of rows_delete) {
            j.remove();
        }
    }
    for (let i = 0; i < data_elements.length; i++) {
        insertRowinTable(i, data_elements[i]);
    }
}

window.onload = function fetching() {
    console.log("inside");
    (fetch(`http://localhost:8080/Summer_Internship_Backend/fetch.do`)
        .then(response => response.json())
        .then(data_array => {
            console.log(data_array);
            createRows(data_array);
        })
        .catch((error) => {
            console.error('Error:', error);
        })

    );
}

function fetching_newpage() {
    console.log("inside");
    (fetch(`http://localhost:8080/Summer_Internship_Backend/fetch.do`)
        .then(response => response.json())
        .then(data_array => {
            console.log(data_array);
            createRows(data_array);
        })
        .catch((error) => {
            console.error('Error:', error);
        })

    );
}

/*
function previous_page() {
    page = page - 10;
    if (page < 0) {
        page = 0;
    }
    fetching_newpage();
}*/
/*
function buildTable(data) {
    const table = document.getElementById('table_body');
    for (let i in data) {
        let tableRowEle = `<tr>
        <td><img src='images\check_box_outline_blank-black-18dp.svg' id ='chk'+${i}></td>
        <td>${data[i].name}</td>
        <td>${data[i].cust_n}</td>
        <td>${data[i].invoice_n}</td>
        <td>${data[i].amt}</td>
        <td>${data[i].due_date}</td>
        <td>${data[i].predicted_date}</td>
        <td>${data[i].notes}</td>
        </tr>`;
        table.innerHTML += tableRowEle;
    }
}*/

function insertRowinTable(i, ele) {
    var table = document.getElementById("table_id");
    /*const note = '-----';
    let invoice_id = ele.invoice_id;
    if (invoice_id.endsWith('.0')) {
        invoice_id = invoice_id.substr(0, invoice_id.length - 2);
    }*/
    var rowCount = table.rows.length;
    if (rowCount > 12) return;
    var row = table.insertRow(rowCount);
    row.setAttribute("class", "main-table-rows");
    //row.setAttribute("id", ele.FIELD1.toString());
    console.log(row.id);
    var og_ckbox = document.createElement('input');
    og_ckbox.type = "checkbox";
    og_ckbox.setAttribute("class", "og-ck-box");
    var ckbox = new Image();
    ckbox.src = "images/check_box_outline_blank-black-18dp.svg";
    ckbox.setAttribute("class", "checkbox-image");
    // row.addEventListener("click", rowClick);
    row.insertCell(0).append(ckbox);
    //row.addEventListener("click", rowClick);
    // row.insertCell(0).appendChild(og_ckbox);
    row.insertCell(1).innerHTML = ele.title;
    row.insertCell(2).innerHTML = ele.des;
    row.insertCell(3).innerHTML = ele.cate;
    row.insertCell(4).innerHTML = ele.ddate;
}