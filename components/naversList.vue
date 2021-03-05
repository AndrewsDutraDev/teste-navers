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
                        <img src="/Delete-Icon.svg" alt="delete" title="Delete" @click="showDeletenaver()">
                        <img src="/Edit-Icon.svg" alt="edit" title="Edit">
                    </div>
                </div>
            </div>
        </div>
        <modal name="deleteNaver">
            <div class="container">
                <div> Excluir Naver </div>
                <div> Tem certeza que deseja excluir esse Naver? </div>
                <div class="d-flex justify-content-around">
                    <button class="button action pl-4 pr-4" @click="closeModal()"> Cancelar </button>
                    <button class="button action pl-4 pr-4"> Excluir </button>
                </div>
            </div>
        </modal>
    </div>
</template>
<script>
export default {
    props: ['navers'],
    methods:{
        showDeletenaver(){
            this.$modal.show('deleteNaver')
        },
        closeModal(){
            this.$modal.hide('deleteNaver')
        }
    },
}
</script>