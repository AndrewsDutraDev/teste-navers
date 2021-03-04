<template>
	<div>
		{{$store.state.access_token}}
	</div>
</template>
<script>
export default {
	async asyncData({params, query, res, $axios, req, app, error, store}) {
        try {
            await $axios.$get(`/navers`).then((res) =>{
                console.log(res)
            })
            return {
                
            }
        }
        catch (e) {
            console.log(e)
        }
    },
}
</script>>