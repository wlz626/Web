<template>
    <div class="list">
        <div class="city-item">
            <p>附近城市</p>
            <div v-for="item in cityList.mapCities" :key='item.id' @click='toHome(item.name)'>{{item.name}}</div>
            </div>
        <div class="city-item">
            <p>已开通的周边旅游站点</p>
            <div v-for="city in cityList.cities" :key='city.id' @click='toHome(city.name)'>{{city.name}}</div>
            </div>
        <div class="city-item">
            <p>热门玩乐城市</p>
            <div v-for="hot in cityList.hotCities" :key='hot.id' @click='toHome(hot.name)'>{{hot.name}}</div>
        </div>
    </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
    props:['cityList'],
    methods: {
        toHome(cityname){
            this.changeCity(cityname);
            this.$router.push({path:'/'});
        },
        ...mapMutations(['changeCity'])
    },
}
</script>
<style scoped>
    .city-item{
        padding-left: .4rem;
        color: #999;
        font-size: .4rem;
    }
    .city-item p{
        padding:.3rem 0;

    }
    .city-item div{
        display: inline-block;
        width: 2rem;
        height: .8rem;
        line-height: .8rem;
        border:1px solid #ccc;
        border-radius: .2rem;
        text-align: center;
        margin-right: .4rem;
        margin-bottom: .4rem;
        box-sizing: border-box;
    }
</style>