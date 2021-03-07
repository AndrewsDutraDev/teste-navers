<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-3" v-for="naver in navers" :key="naver.id">
                    <!-- {{naver}} -->
                    <!-- {{fixRoute(naver.url)}} -->
                    <!-- <img :src="fixRoute(naver.url)"> -->
                    <div v-html="naver.name"></div>
                    <div v-html="naver.job_role"></div>
                    <div class="d-flex">
                        <img src="/Delete-Icon.svg" alt="delete" title="Delete">
                        <img src="/Edit-Icon.svg" alt="edit" title="Edit">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['navers'],
    
}
</script>