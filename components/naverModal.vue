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
                    <div class="w-100 w-md-50 h-100 ml-2">
                        <div class="title mt-2" v-html="info.name"></div>
                        <div class="info mt-2" v-html="info.job_role"></div>
                        <div class="field-info mt-3"> Data de nascimento </div>
                        <div class="info mt-1" v-html="$moment(info.birthdate).format('DD/MM/YYYY')"></div>
                        <div class="field-info mt-3"> Tempo da empresa </div>
                        <div class="info mt-1" v-html="$moment(info.admission_date).format('DD/MM/YYYY')"></div>
                        <div class="field-info mt-3"> Projetos que participou </div>
                        <div class="info mt-1" v-html="info.project"></div>
                    </div>
                    <!-- <div class="mt-4 mb-4 ml-4 title" v-html="info.name"></div>
                    <div class="ml-4 mr-4 text">Tem certeza que deseja excluir esse naver?</div> -->
                </div>
                <!-- <div class="modal-footer border-0">
                    <button
                        type="button"
                        class="button action modal-action"
                        data-dismiss="modal"
                    >
                        Cancelar
                    </button>
                    <button type="button" class="button action modal-action">
                        Excluir
                    </button>
                </div> -->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['id', 'info']
}
</script>