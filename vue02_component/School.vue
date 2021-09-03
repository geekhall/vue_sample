<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学校名称{{name}}</h2>
        <h2>学校地址{{address}}</h2>
        <button @click="showName">点我提示名字</button>
    </div>
</template>

<script>
    // 组件交互相关的代码（数据、方法等等）
    /*
        完全写法：
        const school = Vue.extend({...})
        export default school
    */
    // 简写方式：
    export default {
        name: 'School',
        data(){
            return {
                name: '极客堂',
                address: '北京'
            }
        },
        methods: {
            showName(){
                console.log(this.name)
            }
        },
    }
</script>

<style>
    /* 组件的样式 */
    .demo {        
        background-color: aqua 
    }
</style>
