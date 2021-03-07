<template>
    <div>
        <form method="POST">
            <div class="form-naver">
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="nome">Nome</label>
                        <input type="text" class="form-control myborder-fields" id="nome">
                    </div>
                    <div class="form-group col-md-6">
                        <label for="cargo">Cargo</label>
                        <input type="text" class="form-control myborder-fields" id="cargo">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="Idade">Idade</label>
                        <input type="text" class="form-control myborder-fields" id="idade">
                    </div>
                    <div class="form-group col-md-6">
                        <label for="tempo_empresa">Tempo de empresa</label>
                        <input type="text" class="form-control myborder-fields" id="tempo_empresa">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="projetos">Projetos que participou</label>
                        <input type="text" class="form-control myborder-fields" id="projetos">
                    </div>
                    <div class="form-group col-md-6">
                        <label for="foto">URL da foto do Naver</label>
                        <input type="text" class="form-control myborder-fields" id="foto">
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-end mt-3">
                <button type="submit" class="button pr-5 pl-5"> Salvar </button>
            </div>
        </form>
    </div>
</template>
<script>

</script>