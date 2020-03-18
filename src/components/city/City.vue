<template>
    <div class="city">
        <Header></Header>
        <List :cityList='cityList'></List>
    </div>
</template>
<script>
import Header from './Header'
import List from './List'
export default {
    data(){
        return {
            cityList:[]
        }
    },
    components:{
        Header,
        List
    },
    mounted(){
        this.city();
    },
    methods:{
        city(){
            let that = this;
            that.axios.get("http://localhost:8081/api/city.json").then((res)=>{
                //console.log(res.data.data);
                that.cityList = res.data.data;
            })
        }
    }
}
</script>