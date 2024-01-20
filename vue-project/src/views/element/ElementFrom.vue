<template>
    <!-- 组件 -->
    <div>
        <el-button type="primary" plain text @click="dialogTableVisible = true">
            打开一个内置表单的 Dialog
        </el-button>

        <el-dialog v-model="dialogTableVisible" title="内置表单">
            <el-form :model="form" label-width="120px">
                <el-form-item label="Activity name">
                    <el-input v-model="form.name" />
                </el-form-item>
                <el-form-item label="Activity zone">
                    <el-select v-model="form.region" placeholder="please select your zone">
                        <el-option label="Zone one" value="shanghai" />
                        <el-option label="Zone two" value="beijing" />
                    </el-select>
                </el-form-item>
                <el-form-item label="Activity time">
                    <el-col :span="11">
                        <el-date-picker v-model="form.date1" type="date" placeholder="Pick a date" style="width: 100%" />
                    </el-col>
                    <el-col :span="2" class="text-center">
                        <span class="text-gray-500">-</span>
                    </el-col>
                    <el-col :span="11">
                        <el-time-picker v-model="form.date2" placeholder="Pick a time" style="width: 100%" />
                    </el-col>
                </el-form-item>
                <el-form-item label="Instant delivery">
                    <el-switch v-model="form.delivery" />
                </el-form-item>
                <el-form-item label="Activity type">
                    <el-checkbox-group v-model="form.type">
                        <el-checkbox label="Online activities" name="type" />
                        <el-checkbox label="Promotion activities" name="type" />
                        <el-checkbox label="Offline activities" name="type" />
                        <el-checkbox label="Simple brand exposure" name="type" />
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="Resources">
                    <el-radio-group v-model="form.resource">
                        <el-radio label="Sponsor" />
                        <el-radio label="Venue" />
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="Activity form">
                    <el-input v-model="form.desc" type="textarea" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">Create</el-button>
                    <el-button @click="onCancel">Cancel</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>

    </div>
</template>

<script> 
import { ref, reactive } from 'vue';

export default {
    name: 'ElementFrom',
    props: {
        // 外部传入的参数
    },
    setup() {
        const dialogTableVisible = ref(false);
        const form = reactive({
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: '',
        });
        const onSubmit = () => {
            alert(`内置表单已提交`);
        };
        const onCancel = () => {
            dialogTableVisible.value = false;
        }
        return {
            // 返回数据
            dialogTableVisible, form, onSubmit, onCancel
        };
    },
};
</script>

<script setup>

</script>

<style scoped>
/* 你的样式 */
</style>