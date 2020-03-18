<template>
    <div class='icons'>
        <ul>
            <li v-for="icon in iconlist" :key="icon.id">
                <img :src="icon.imgurl" alt="">
                <p>{{icon.title}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            iconlist:[
                {
                    id:0,
                    imgurl:"img/icons1.png",
                    title:"国内游"
                },
                {
                    id:1,
                    imgurl:"img/icons2.png",
                    title:"出境游"
                },
                {
                    id:2,
                    imgurl:"img/icons3.png",
                    title:"周边游"
                },
                {
                    id:3,
                    imgurl:"img/icons4.gif",
                    title:"当地玩乐"
                },
                {
                    id:4,
                    imgurl:"img/icons5.png",
                    title:"活动赛事"
                },
                {
                    id:5,
                    imgurl:"img/icons6.png",
                    title:"摄影游"
                },
                {
                    id:6,
                    imgurl:"img/icons7.png",
                    title:"亲子游"
                },
                {
                    id:7,
                    imgurl:"img/icons8.png",
                    title:"户外游"
                },
                {
                    id:8,
                    imgurl:"img/icons9.png",
                    title:"主题游"
                },{
                    id:9,
                    imgurl:"img/icons10.png",
                    title:"定制游"
                }
            ]
        }
    }
}
</script>
<style scoped>
.icons{
    padding-top: .4rem;
    padding-bottom: .1rem;
    border-bottom:1px solid #eee;
}
ul{
    overflow: hidden;
}
ul li{
    width: 20%;
    float: left;
    margin-bottom: .2rem;
}
ul li img{
    margin-right: auto;
    margin-left: auto ;
    display: block;
    width: 1.066666rem;
    height: 1.066666rem;
}
ul li p{
    font-size: .3rem;
    text-align: center;
    margin-top: .1rem;
    color: #333;
}
</style>