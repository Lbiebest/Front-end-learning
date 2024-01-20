<template>
    <!-- dialog 组件 -->
    <div>
        <el-button type="primary" plain text @click="dialogTableVisible = true">
            打开一个内置表格的 Dialog
        </el-button>

        <el-dialog v-model="dialogTableVisible" title="内置表格">
            <el-table v-if="dialogTableVisible" :data="gridData">
                <el-table-column property="date" label="Date" width="150" />
                <el-table-column property="name" label="Name" width="200" />
                <el-table-column property="address" label="Address" />
            </el-table>
        </el-dialog>
    </div>
</template>

<script>
import { ref } from "vue";

export default {
    name: 'ElementDialog',
    props: {
        // 外部传入的参数 
    },
    setup() {
        const dialogTableVisible = ref(false);
        const gridData = ref([
            {
                date: '2016-05-02',
                name: 'John Smith',
                address: 'No.1518,  Jinshajiang Road, Putuo District',
            },
            {
                date: '2016-05-04',
                name: 'John Smith',
                address: 'No.1518,  Jinshajiang Road, Putuo District',
            },
            {
                date: '2016-05-01',
                name: 'John Smith',
                address: 'No.1518,  Jinshajiang Road, Putuo District',
            },
            {
                date: '2016-05-03',
                name: 'John Smith',
                address: 'No.1518,  Jinshajiang Road, Putuo District',
            },
        ]);

        return {
            // 返回数据
            dialogTableVisible, gridData
        };
    },
};
</script>

<script setup>

</script>

<style scoped>
/* 你的样式 */

.el-button--text {
    margin-right: 15px;
}

.el-select {
    width: 300px;
}

.el-input {
    width: 300px;
}

.dialog-footer button:first-child {
    margin-right: 10px;
}
</style>