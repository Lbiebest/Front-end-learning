import { createApp, ref, nextTick } from "https://cdn.jsdelivr.net/npm/vue@3/dist/vue.esm-browser.js";
const todoapp = createApp({
    setup() {
        // 参数部分
        const items = ref([
            "写代码",
            "吃饭饭",
            "睡觉觉"
        ]);
        const inputValue = ref("");

        // 函数部分
        const add = () => {
            // 获取元素添加进 items
            if (inputValue.value == "") {
                alert("请输入内容");
            } else {
                items.value.push(inputValue.value);
                inputValue.value = "";
            }
        };

        const remove = (index) => {
            // 删除单个元素
            items.value.splice(index, 1);
        };

        const clear = () => {
            // 删除所有元素
            items.value = [];
        };

        return {
            items, inputValue,
            add, remove, clear,
        }
    }
});
todoapp.mount("#todoapp") 