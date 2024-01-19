<!-- ElementView.vue -->

<!-- 组件的模板，用于定义组件的结构和布局 -->
<template>
    <div>
        <!-- 不同样式的 button 按钮 -->
        <el-row class="mb-4">
            <el-button>Default</el-button>
            <el-button type="primary">Primary</el-button>
            <el-button type="success">Success</el-button>
            <el-button type="info">Info</el-button>
            <el-button type="warning">Warning</el-button>
            <el-button type="danger">Danger</el-button>
        </el-row>
        <el-row class="mb-4">
            <el-button plain>Plain</el-button>
            <el-button type="primary" plain>Primary</el-button>
            <el-button type="success" plain>Success</el-button>
            <el-button type="info" plain>Info</el-button>
            <el-button type="warning" plain>Warning</el-button>
            <el-button type="danger" plain>Danger</el-button>
        </el-row>

        <el-row class="mb-4">
            <el-button round>Round</el-button>
            <el-button type="primary" round>Primary</el-button>
            <el-button type="success" round>Success</el-button>
            <el-button type="info" round>Info</el-button>
            <el-button type="warning" round>Warning</el-button>
            <el-button type="danger" round>Danger</el-button>
        </el-row>

        <el-row>
            <el-button :icon="Search" circle />
            <el-button type="primary" :icon="Edit" circle />
            <el-button type="success" :icon="Check" circle />
            <el-button type="info" :icon="Message" circle />
            <el-button type="warning" :icon="Star" circle />
            <el-button type="danger" :icon="Delete" circle />
        </el-row>
    </div>
</template>

<script>
// 导出当前组件的默认配置
export default {
    name: "ElementView", // 组件自定义命名，可以在调试和开发中追踪组件
    props: {
        // 定义接受外部传入的属性
    },
    setup() {
        // vue3 中的新特性，用于配置组件
        return {
            // 返回值，可以在模板中使用
        };
    },
};
</script>

<!-- 组件的样式，使用 scoped 保证只在当前组件生效 -->
<style scoped>
/* Your styles here */
</style>
