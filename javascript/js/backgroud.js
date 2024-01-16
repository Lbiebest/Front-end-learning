document.addEventListener("DOMContentLoaded", function () {
    // 获取按钮和图片元素
    const buttons = document.querySelectorAll('.center span button');
    const img = document.querySelector('.center img');
    // 为每个按钮添加点击事件监听器
    buttons.forEach((button, index) => {
        button.addEventListener('click', function () {
            // 根据按钮索引设置对应的图片路径
            img.src = `resource/p (${index + 1}).jpg`;
        });
    });
});


// function
/* var add = function (a, b) {
    return a + b;
};
var b = add(1, 1);
alert(b); */




