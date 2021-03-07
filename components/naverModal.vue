<template>
    <div
        class="modal fade"
        :id="id"
        data-backdrop="static"
        data-keyboard="false"
        tabindex="-1"
        :aria-labelledby="id"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="mt-4 mb-4 ml-4 title">Ola</div>
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
                    <button type="button" class="button action modal-action">
                        Excluir
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['id', 'info']
}
</script>