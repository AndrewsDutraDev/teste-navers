<template>
    <div>
        <form method="POST" @submit.prevent="submitedit()">
            <div class="form-naver">
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="nome">Nome</label>
                        <input type="text" class="form-control myborder-fields" id="nome" v-model="name">
                    </div>
                    <div class="form-group col-md-6">
                        <label for="cargo">Cargo</label>
                        <input type="text" class="form-control myborder-fields" id="cargo" v-model="job_role">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="Idade">Data de nascimento</label>
                        <input type="date" class="form-control myborder-fields" id="idade" v-model="birthdate">
                    </div>
                    <div class="form-group col-md-6">
                        <label for="tempo_empresa">Tempo de empresa (Data de admissão)</label>
                        <input type="date" class="form-control myborder-fields" id="tempo_empresa" v-model="admission_date">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="projetos">Projetos que participou</label>
                        <input type="text" class="form-control myborder-fields" id="projetos" v-model="project">
                    </div>
                    <div class="form-group col-md-6">
                        <label for="foto">URL da foto do Naver</label>
                        <input type="text" class="form-control myborder-fields" id="foto" v-model="url">
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-end mt-3">
                <button type="submit" class="button pr-5 pl-5" data-toggle="modal" data-target="#Sucessfully"> Salvar </button>
            </div>
        </form>
        <div>
            <modal-successfully :edit="true"/>
        </div>
        
    </div>
</template>
<script>
import ModalSuccessfully from '~/components/modalSuccessfully.vue';
export default {
    components: { ModalSuccessfully },
    props: ['naver'],
    data(){
        return{
            name: this.naver.name,
            job_role: this.naver.job_role,
            birthdate: '',
            admission_date: '',
            project: this.naver.project,
            url: this.naver.url
        }
    },
    methods:{
		submitedit() {
            console.log(this.naver.id)
			const params = new URLSearchParams();
            params.append('name', this.name);
            params.append('admission_date', this.$moment(this.admission_date).format('DD/MM/YYYY'));
            params.append('job_role', this.job_role);
            params.append('project', this.project);
            params.append('birthdate', this.$moment(this.birthdate).format('DD/MM/YYYY'));
            params.append('url', this.url);
            console.log(this.$axios.$put(`/navers/${this.naver.id}`))
			this.$axios.$put(`navers/${this.naver.id}`, params)
            .then((response) => {
                window.location.href = '/'
            })
            .catch((e) => {
                alert(e)
                console.error(e);
            })
		}
    },
    mounted(){
        this.birthdate = this.$moment.utc(this.naver.birthdate).format('YYYY-MM-DD')
        this.admission_date = this.$moment.utc(this.naver.admission_date).format('YYYY-MM-DD')
    }
}
</script>