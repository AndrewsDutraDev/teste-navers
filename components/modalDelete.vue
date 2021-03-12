<template>
    <div
        class="modal fade"
        id="modalDelete"
        data-backdrop="static"
        data-keyboard="false"
        tabindex="-1"
        aria-labelledby="modalDelete"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-dialog-centered mydialog">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="mt-4 mb-4 ml-4 title">Excluir Naver</div>
                    <div class="ml-4 mr-4 text">Tem certeza que deseja excluir esse naver?</div>
                </div>
                <div class="modal-footer border-0">
                    <button
                        type="button"
                        class="button action modal-action"
                        data-dismiss="modal"
                    >
                        Cancelar
                    </button>
                    <button type="button" class="button action modal-action" data-dismiss="modal" @click="deleteNaver()">
                        Excluir
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['id'],
    data(){
        return{}
    },
    methods:{
        deleteNaver(){
            console.log('hell')
            this.$axios.delete(`/navers/${this.id}`).then((res) =>{
                this.$emit('closeDelete')
                setTimeout(function(){
                    window.location.href = '/'
                }, 1000);
            }).catch((e)=>{
                console.log(e)
            })
        }
    }
}
</script>