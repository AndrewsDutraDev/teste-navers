<template>
	<div class="navers">
        <div class="d-flex justify-content-between p-3 flex-column flex-md-row">
            <div class="title mt-4"> Navers </div>
            <div class="my-auto">
                <a href="/adicionar">
                    <button class="button action add-naver pl-4 pr-4"> Adicionar Naver </button>
                </a>
            </div>
        </div>
        <naversList :navers="navers"/>
	</div>
</template>
<script>
import naversList from '~/components/naversList';
export default {
    components:{
        naversList,
    },
	async asyncData({params, query, res, $axios, req, app, error, store}) {
        try {
            let navers = []
            await $axios.$get(`/navers`).then((res) =>{
                navers = res
            })
            return {
                navers: navers
            }
        }
        catch (e) {
            console.log(e)
        }
    },
}
</script>>