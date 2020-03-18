<template>
    <header>
        <div class='header-left' @click="toHome">&lt;</div>
        <div class="header-title">活动详情</div>
        <div class="header-right"><img src="@/assets/img/show.png" alt=""></div>
    </header>
</template>
<script>
export default {
    methods:{
        toHome(){
            this.$router.push({path:'/'})
        }
    }
}
</script>

<style lang="stylus" scoped>
    header
        height 1.2rem
        background-color #ccc
        display flex
        align-items center
        justify-content space-between
    .header-left
        padding-left .3rem
    .header-title
        font-size .5rem
    .header-right
        padding-right .5rem
        img
            width .63rem
            height .53rem

</style>

