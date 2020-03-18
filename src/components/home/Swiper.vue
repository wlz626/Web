<template>
    <div class="swiper">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide><img src="@/assets/img/swiper1.png" alt=""></swiper-slide>
            <swiper-slide><img src="@/assets/img/swiper2.png" alt=""></swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    data(){
        return {
            swiperOption:{
                pagination: {
                    el: '.swiper-pagination',
                },
            }
        }
    }
}
</script>
<style scoped>
    .swiper{
        background: #fff9db;
        width: 100%;
        height: 3.2rem;
    }
    .swiper img{
        width: 100%;
        height: 100%;
        display: block;
    }
    .swiper-pagination >>> .swiper-pagination-bullet-active{
        background: orange!important;
    }
    .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal >>> .swiper-pagination-bullets {
        bottom: 4px!important;
    }
</style>