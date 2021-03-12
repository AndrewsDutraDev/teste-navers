<template>
    <div
        class="modal fade naver-modal"
        :id="id"
        data-backdrop="static"
        data-keyboard="false"
        tabindex="-1"
        aria-labelledby="naver"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body d-flex flex-column flex-md-row p-0">
                    <div class="w-100 w-md-50">
                        <img class="w-100 img-fluid" :src="info.url" :alt="info.name">                    
                    </div>
                    <div class="w-100 w-md-50 h-100">
                        <div class="modal-header border-0 justify-content-end p-0 pt-2">
                            <button data-dismiss="modal" class="border-0 close-button">
                                <img src="/Close-Icon.svg" alt="close" title="close">
                            </button>
                        </div>
                        <div class="ml-3">
                            <div class="title mt-2" v-html="info.name"></div>
                            <div class="info mt-2" v-html="info.job_role"></div>
                            <div class="field-info mt-3"> Data de nascimento </div>
                            <div class="info mt-1" v-html="$moment(info.birthdate).format('DD/MM/YYYY')"></div>
                            <div class="field-info mt-3"> Tempo da empresa </div>
                            <div class="info mt-1" v-html="$moment(info.admission_date).format('DD/MM/YYYY')"></div>
                            <div class="field-info mt-3"> Projetos que participou </div>
                            <div class="info mt-1 mb-4" v-html="info.project"></div>
                            
                        </div>
                        <div class="modal-footer border-0 justify-content-start">
                            <div class="d-flex mb-3">
                                <div data-toggle="modal" data-target="#modalDelete" @click="$emit('delete')">
                                    <img
                                        src="/Delete-Icon.svg"
                                        alt="delete"
                                        title="Delete"
                                        class="icon-action mr-2"
                                    />
                                </div>
                                <a :href="'/editar/?id='+info.id">
                                    <img src="/Edit-Icon.svg" alt="edit" title="Edit" class="icon-action"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['id', 'info'],
    data(){
        return{
            toDelete: '',
            sucessfully: true,
            msg:{
                title: 'Naver excluído',
                subtitle: 'Naver excluído com sucesso'
            },
        }
    },
    methods:{
        // openDeleteModal(id){
        //     this.toDelete = id
        // },
    }
}
</script>