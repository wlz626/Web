<template>
    <div class="tabs">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="tabs in tabslist" :key="tabs.id"><div class="tabs-content"><img :src="tabs.imgurl" alt=""><p>{{tabs.title}}</p></div></swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
    data(){
        return {
            tabslist:[
                {
                    id:0,
                    imgurl:"img/tabs1.gif",
                    title:"签证"
                },
                {
                    id:1,
                    imgurl:"img/tabs2.png",
                    title:"游侠超市"
                },
                {
                    id:2,
                    imgurl:"img/tabs3.png",
                    title:"分享会"
                },
                {
                    id:3,
                    imgurl:"img/tabs4.gif",
                    title:"别young之旅"
                },
                {
                    id:4,
                    imgurl:"img/tabs5.gif",
                    title:"瑜伽"
                },
                {
                    id:5,
                    imgurl:"img/tabs6.png",
                    title:"签证"
                },
                {
                    id:6,
                    imgurl:"img/tabs7.png",
                    title:"签证"
                },
                {
                    id:7,
                    imgurl:"img/tabs8.png",
                    title:"签证"
                },
                {
                    id:8,
                    imgurl:"img/tabs9.png",
                    title:"签证"
                },
                {
                    id:9,
                    imgurl:"img/tabs10.png",
                    title:"签证"
                },
            ],
            swiperOption:{
                slidesPerView : 4.5,
            }
        }
    }
}
</script>

<style scoped>
    .tabs{
        padding:.3rem 0;
    }
    .tabs-content img{
        height: .773rem;
        width: .773rem;
        margin-left: auto;
        margin-right: auto;
        display: block;
    }
    .tabs-content p{
        margin-top: .1rem;
        text-align: center;
        font-size: .2733333333rem;
    }
</style>