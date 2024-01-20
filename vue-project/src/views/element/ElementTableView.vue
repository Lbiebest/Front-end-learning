<template>
    <div>
        <!-- 固定表头的 Table -->
        <el-table :data="tableData" height="250" style="width: 100%">
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address" />
        </el-table>

        <!-- Paination 分页 -->
        <el-pagination background layout="sizes, prev, pager, next, jumper" @size-change="handleSizeChange"
            @current-change="handleCurrentChange" :total="1000" />
    </div>
</template>
   
<script>
import { ref } from "vue";
export default {
    name: "ElementTable",
    setup() {
        const tableData = ref([
            {
                date: '2016-05-03',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                date: '2016-05-02',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                date: '2016-05-04',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                date: '2016-05-04',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
        ]);

        const handleSizeChange = (val) => {
            alert(`每页记录数变化${val}`);
        };
        const handleCurrentChange = (val) => {
            alert(`页码变化${val}`);
        };
        return {
            tableData,
            handleSizeChange, handleCurrentChange
        }
    }
}
</script>

<style scoped>
.demo-pagination-block+.demo-pagination-block {
    margin-top: 10px;
}

.demo-pagination-block .demonstration {
    margin-bottom: 16px;
}
</style>
  