<template>
    <div>
        <header-top></header-top>
        <Swipe></Swipe>
        <Gastylebox></Gastylebox>
    </div>
</template>
<script>
    import HeaderTop from '@/components/header.vue';
    import Swipe from '@/components/swipe.vue';
    import Gastylebox from '@/components/gastylebox.vue';
    export default{
        name:'home',
        components:{
            HeaderTop,
            Swipe,
            Gastylebox
        }
    }
</script>
<style>
    .pull-left{
        float: left;
    }
    .pull-right{
        float: right;
    }
</style>
