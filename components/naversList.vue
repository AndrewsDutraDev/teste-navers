<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 col-md-6 col-lg-3" v-for="naver in navers" :key="naver.id">
                <!-- {{naver}} -->
                <!-- {{fixRoute(naver.url)}} -->
                <img :src="fixRoute(naver.url)">
                <div v-html="naver.name"></div>
                <div v-html="naver.job_role"></div>
                
            </div>
        </div>
    </div>

</template>
<script>
export default {
    props: ['navers'],
    methods: {
        fixRoute(img){
            return process.env.apiBaseUrl+'/'+img
        }
    },
    mounted()  {
        console.log(process.env.apiBaseUrl)
    }
}
</script>