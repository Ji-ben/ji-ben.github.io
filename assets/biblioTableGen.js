//#region 表格生成
//表格隐藏列控件
function labelGen(columnTitle, appendId) {
    const container = document.getElementById(appendId);
    for (let i = 0; i < columnTitle.length; i++) {
        const labelTag = document.createElement("label");
        labelTag.htmlFor = "LabelId" + i;
        if (i == 0) labelTag.innerText = columnTitle[i].labelName;
        else labelTag.innerText = " | " + columnTitle[i].labelName;
        container.appendChild(labelTag);

        const inputTag = document.createElement("input");
        inputTag.type = "checkbox";
        inputTag.id = "LabelId" + i;
        inputTag.checked = true;
        inputTag.addEventListener("click", () => toggleColumn(event, columnTitle[i].collapseCol));
        container.appendChild(inputTag);
    }
}
//隐藏表格列
function toggleColumn(ev, columnIndex) {
    const lab = ev.currentTarget;
    const columnNumber = columnIndex.split("&");
    for (let i = 0; i < columnNumber.length; i++) {
        const col = document.querySelectorAll(`table tr *:nth-child(${columnNumber[i]})`);
        if (lab.checked) {
            for (let i = 0; i < col.length; i++) { col[i].style.display = "table-cell"; }
        } else {
            for (let i = 0; i < col.length; i++) { col[i].style.display = "none"; }
        }
    }
}

//表格头生成
function tableHeadGen(tableHead, appendId) {
    const container = document.getElementById(appendId);
    for (let i = 0; i < tableHead.length; i++) {
        const thTag = document.createElement("th");
        thTag.innerText = tableHead[i].headName;
        if (tableHead[i].sortable) {
            thTag.innerText += "⇵";
            thTag.className = "sortable pointerCursor";
            thTag.addEventListener("click", () => sortTable(event, tableHead[i].sortable));
        }
        container.appendChild(thTag);
    }
}
//表格体生成
function tableBodyGen(tableHead, works, appendId, checkedData) {
    const container = document.getElementById(appendId);
    for (i = 0; i < works.length; i++) {
        const trTag = document.createElement("tr");
        container.appendChild(trTag);
        let tdColumn = 0;//当前行的单元格列数
        for (const key in works[i]) {
            const tdTag = document.createElement("td");
            switch (tableHead[tdColumn].columnType) {
                case "center":
                    tdTag.classList.add("alignCenter");
                    tdTag.innerText = works[i][key];
                    break;
                case "right":
                    tdTag.classList.add("alignRight");
                    tdTag.innerText = works[i][key];
                    break;
                case "CNWorks":
                    if (works[i][key] == "--") { tdTag.innerText = "尚未出版"; }
                    else { tdTag.innerText = `《${works[i][key]}》`; }
                    break;
                case "JPWorks":
                    tdTag.innerText = `『${works[i][key]}』`;
                    break;
                case "ENWorks":
                    tdTag.classList.add("fontOblique");
                    tdTag.innerText = works[i][key];
                    break;
                case "checkStatus":
                    tdTag.className = "alignCenter chkList";
                    const checkKey = tdTag.id = "chk" + i;
                    if (checkedData[checkKey]) { tdTag.innerText = checkedData[checkKey]; }
                    break
                default:
                    tdTag.innerText = works[i][key];
                    break;
            }
            tdColumn++;
            trTag.appendChild(tdTag);
        }
    }
}
//#endregion
//#region 表格排序
function sortTableRowsByColumn(table, columnIndex, ascending, sortType) {
    const rows = Array.from(table.querySelectorAll(":scope > tbody > tr"));

    rows.sort((x, y) => {
        const xValue = x.cells[columnIndex].textContent;
        const yValue = y.cells[columnIndex].textContent;

        switch (sortType) {
            case "string":
                return ascending ? (xValue.localeCompare(yValue)) : (yValue.localeCompare(xValue));
            case "number":
                // PLEASE use parseInt or parseFloat
                const xNum = parseFloat(xValue);
                const yNum = parseFloat(yValue);
                return ascending ? (xNum - yNum) : (yNum - xNum);
            default:
                break;
        }
    });
    for (let row of rows) { table.tBodies[0].appendChild(row); }
}
function sortTable(ev, sortType) {
    const th = ev.currentTarget;
    const table = th.closest("table");
    const thIndex = Array.from(th.parentElement.children).indexOf(th);

    const ascending = (th.dataset).sort != "asc";

    sortTableRowsByColumn(table, thIndex, ascending, sortType);

    const allTh = table.querySelectorAll(":scope > thead > tr > th");
    for (let th2 of allTh) { delete th2.dataset["sort"]; }

    th.dataset["sort"] = ascending ? "asc" : "desc";

    // 排序符号表示
    let thText = th.innerText.slice(0, -1);
    if (ascending) th.innerText = thText + " ↑";
    else th.innerText = thText += " ↓";
}
//#endregion
//#region 已读单元格
function tableCellCheck(symbol, storageName, checkedData) {
    const chkTd = document.getElementsByClassName("alignCenter chkList");
    for (let i = 0; i < chkTd.length; i++) {
        chkTd[i].addEventListener("click", () => tdCheck(event, checkedData, symbol, storageName))
    }
}
function tdCheck(ev, checkedData, symbol, storageName) {
    const currentTd = ev.currentTarget;
    const chkDataKey = currentTd.id;

    if (currentTd.innerText) { checkedData[chkDataKey] = currentTd.innerText = ""; }
    else { checkedData[chkDataKey] = currentTd.innerText = symbol; }

    localStorage.setItem(storageName, JSON.stringify(checkedData));
}
//#endregion
//#region 置顶按钮，向下滚动 20px 时，显示按钮

function scrollFunction(btn) {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    } else { btn.style.display = "none"; }
}
function goTopFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
//#endregion
