<template>
    <div class="demo">
        <h2>学生名称{{name}}</h2>
        <h2>学生年龄{{age}}</h2>
        <button @click="showName">点我提示名字</button>
    </div>
</template>

<script>
    export default {
        name: 'Student',
        data(){
            return {
                name: '宋小宝',
                age: 30
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
    .demo {        
        background-color: azure 
    }
</style>
