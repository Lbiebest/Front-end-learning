

function function1() {
    const title = document.getElementById('title');
    title.innerHTML = '新的成绩表名';
}

function function2() {
    const table = document.getElementById("title");
    table.style.color = "blue"

}

function function3() {
    const table = document.querySelector('table');
    const rows = table.rows;
    if (rows.length > 1) {
        const lastRow = rows[rows.length - 1];
        lastRow.parentNode.removeChild(lastRow);
    } else {
        console.warn("Table has no rows to remove.");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let div = document.getElementById("title");
    if (div) {
        setTimeout(() => {
            div.innerHTML += "<font color='black'> very good</font>";
        }, 5000);
    } else {
        console.error("Element with ID 'title' not found");
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const img = document.getElementById("img");
    if (img) {
        setTimeout(() => {
            img.src = "resource\\p (4).jpg";
        }, 5000);
    } else {
        console.error("img not found");
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const checkBoxs = document.querySelectorAll("#hobby");
    setTimeout(() => {
        if (checkBoxs.length > 0) {
            checkBoxs.forEach((checkBox) => {
                checkBox.checked = true; 
            })
        } else {
            console.error("checkBox not found");
        }
    }, 5000);
})



