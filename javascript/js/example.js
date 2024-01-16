/* 图片切换 */
document.addEventListener("DOMContentLoaded", function () {
    const image = ["./resource/p (4).jpg", "./resource/p (5).jpg"];
    const buttons = document.getElementsByClassName("button1");
    const imageElement = document.getElementById("image");
 
    // 添加图片大小裁剪功能
    function selectImage(newCase) {
        switch (newCase) {
            case "上一张":
                imageElement.src = image[0];
                imageElement.width = imageElement.width;
                imageElement.height = imageElement.height;
                break;
            case "下一张":
                imageElement.src = image[1];
                imageElement.width = imageElement.width;
                imageElement.height = imageElement.height;
                break;
            default:
                console.error("Unknown button value");
        }
    }

    for (let index = 0; index < buttons.length; index++) {
        const button = buttons[index];
        const value = button.value;

        // 两种不同的写法
        /*  button.onclick = function () {
             selectImage(value);
         }; */
        button.addEventListener("click", () => selectImage(value));

    }
});


/* 输入框效果 */
document.addEventListener("DOMContentLoaded", function () {
    const text = document.getElementById("text");
    function changeTextCase(newCase) {
        switch (newCase) {
            case "lowercase":
                text.value = text.value.toLowerCase();
                break;
            case "uppercase":
                text.value = text.value.toUpperCase();
                break;
            default:
                console.error("Unknown case type");
        }
    }

    text.addEventListener("mouseover", () => changeTextCase("lowercase"));
    text.addEventListener("mouseleave", () => changeTextCase("uppercase"));
    text.addEventListener("focus", () => text.value = "");
    text.addEventListener("blur", () => text.value = "ITCAST");
});

/* 复选框状态 */
document.addEventListener("DOMContentLoaded", function () {
    const checkBoxs = document.getElementsByClassName("checkbox");
    const buttons = document.getElementsByClassName("button2");

    function handleButtonClick(value) {
        for (let index = 0; index < checkBoxs.length; index++) {
            const checkbox = checkBoxs[index];
            if (value === "全选") {
                checkbox.checked = true;
            } else if (value === "反选") {
                checkbox.checked = !checkbox.checked;
            } else {
                console.error("Unknown button value");
            }
        }
    }

    for (let index = 0; index < buttons.length; index++) {
        const button = buttons[index];
        const value = button.value;
        /* button.onclick = function () {
            handleButtonClick(value);
        } */
        button.addEventListener("click", () => handleButtonClick(value))
    }
});


