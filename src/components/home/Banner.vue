<template>
    <div class="banner">
        <transition enter-active-class="fadeInLeft"  leave-active-class="fadeOutLeft">
            <div class="banner-left animated" v-show='toshow'></div>
        </transition>

        <div class="banner-header">
            <div class="banner-top">
                <div class="top-left" @click="toCity">
                    {{cityName}}<i class="iconfont">&#xe60a;</i>
                </div>
                <div class="top-search">
                    <i class="iconfont">&#xe60c;</i>泰国
                </div>
                <div class="top-right">
                    <img src="@/assets/img/show.png" @click='toShow'>
                </div>
            </div>
            <div class="banner-swiper">
                <swiper :options="swiperOption">
                    <!-- slides -->
                    <swiper-slide><img src="@/assets/img/banner1.png" alt=""></swiper-slide>
                    <swiper-slide><img src="@/assets/img/banner2.png" alt=""></swiper-slide>
                    <swiper-slide><img src="@/assets/img/banner3.png" alt=""></swiper-slide>
                    <!-- Optional controls -->
                    <div class="swiper-pagination"  slot="pagination"></div>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data(){
        return {
            toshow:false,
            swiperOption:{
                loop:true,
                pagination: {
                    el: '.swiper-pagination',
                }
            }
        }
    },
    computed:{
        ...mapState(['cityName'])
    },
    methods: {
        toShow(){
            this.toshow = !this.toshow;
        },
        toCity(){
            this.$router.push({
                path:'/city'
            })
        }
    },
}
</script>
<style>
.banner-left{
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 6.6666rem;
    z-index: 999;
    background: #000;
}
.banner-header{
    position: relative;
    width: 100%;
    height:5.6rem;
    font-size: .42666rem;
}
.banner-top{
    z-index:2;
    position: absolute;
    left: 0;
    height: .8rem;
    width: 100%;
    top: .2rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.top-left{
    padding: .2rem;
    color:#fff;
}
.top-search{
    flex: 1;
    color: #ccc;
    background: #fff;
    border-radius: .1rem;
    padding: .2rem;
    font-size: .37333rem;
}
.top-right{
    padding: .2rem;
}
.top-right img{
    width: .63rem;
    height: .53rem;
}
.banner-swiper{
    width: 100%;
    height:5.6rem;
}
.banner-swiper img{
    width: 100%;
    height:100%;
}
.swiper-pagination  >>> .swiper-pagination-bullet-active{
    background: orange;
}
</style>