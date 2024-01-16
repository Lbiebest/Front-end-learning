import { createApp, ref, nextTick } from "https://cdn.jsdelivr.net/npm/vue@3/dist/vue.esm-browser.js";
const todoapp = createApp({
    setup() {
        const list = [
            "写代码",
            "吃饭饭",
            "睡觉觉"
        ];
        const items = ref(list);
        const inputValue = ref("");

        // function
        const add = () => {
            // 获取元素添加进 items
            items.value.push(inputValue.value);
            inputValue.value = "";
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