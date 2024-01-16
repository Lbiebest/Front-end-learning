function print(event) {
    // alert(event.target.value + " 被点击了");
    console.log(event.target.value + " 被点击了");
}

//  event get tag attributes
function on(event) {
    print(event);
}

/* button onclick */
document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("button2");
    btn.onclick = function (event) {
        print(event);
    };
    // 鼠标移入移出效果变化
    btn.onmouseover = function () {
        btn.style.color = "red";
    };
    btn.onmouseout = function () {
        btn.style.color = "";
    }
});



/* 输入框焦点得失 */
document.addEventListener("DOMContentLoaded", function () {
    const text = document.getElementById("text");
    text.onblur = function out(event) {
        event.target.value = "输入框";
        console.log(event.target.value + " 失去焦点");
    };
    text.onfocus = function down(event) {
        console.log(event.target.value + " 获得焦点");
        event.target.value = "";
    }
});