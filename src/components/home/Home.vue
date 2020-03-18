<template>
    <div class="home">
        <Banner></Banner>
        <Icons></Icons>
        <Tabs></Tabs>
        <Scroll></Scroll>
        <Swiper></Swiper>
        <Spike :spikeList='spikeList'></Spike>
        <Like :likeList='likeList'></Like>
        <Footer></Footer>
    </div>
</template>

<script>
import Banner from './Banner'
import Icons from './Icons'
import Tabs from './Tabs'
import Scroll from './Scroll'
import Swiper from './Swiper'
import Spike from './Spike'
import Like from './Like'
import Footer from './Footer'
import {mapState} from 'vuex'
export default {
    components:{
        Banner,
        Icons,
        Tabs,
        Scroll,
        Swiper,
        Spike,
        Like,
        Footer
    },
    computed:{
        ...mapState(['cityName'])
    },
    data(){
        return{
            spikeList:[],
            likeList:[],
            lastcity:''
        }
    },
    mounted(){
        this.http();
        this.lastcity = this.cityName;
    },
    methods:{
        http(){
            let that=this;
            that.axios.get("http://localhost:8081/api/dataHome.json").then(
                (res)=>{
                    let data =  res.data.data;
                    data.forEach((val,index)=>{
                        if(val.city == that.cityName){
                            that.spikeList = val.spikeList;
                            that.likeList = val.likeList;
                        }
                    })
                }
            )
        }
    },
    activated(){
        if(this.cityName != this.lastcity){
            this.http();
            this.lastcity =this.cityName;
        }
    }
}
</script>
<style scoped>
    .home{
	overflow: hidden;
    }
</style>