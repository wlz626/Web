<template>
    <div class="banner">
        <div class="banner-img"><img :src="item.imgUrl" alt=""></div>
        <div class="banner-title">{{item.title+":"+Introduction}}</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            item:'',
            Introduction:''
        }
    },

    activated(){
        console.log(this.$route.query.item);
        this.item = this.$route.query.item;
        if(this.$route.query.item.Introduction){
            this.Introduction = this.$route.query.item.Introduction;
        }

    }
}
</script>
<style lang="stylus" scoped>
    .banner
        height 5.64rem
        width 100%
        .banner-img
            img
                width 100%
                height 100%
        .banner-title
            padding .3rem
            font-size .52rem

</style>