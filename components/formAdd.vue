<template>
    <div>
        <ValidationObserver v-slot="{ handleSubmit }" ref="observer">
			<form method="POST" @submit.prevent="handleSubmit(onSubmit)">
                <div class="form-naver">
                    <div class="form-row">
                        <ValidationProvider name="nome" rules="required" slim v-slot="{ errors, required }">
                            <div class="form-group col-md-6">
                                <label for="nome">Nome</label>
                                <input type="text" class="form-control myborder-fields" v-model="name" id="nome">
                                <small v-show="errors[0]" class="text-danger">{{ errors[0] }}</small>
                            </div>
                        </ValidationProvider>
                        <ValidationProvider name="cargo" rules="required" slim v-slot="{ errors, required }">
                            <div class="form-group col-md-6">
                                <label for="cargo">Cargo</label>
                                <input type="text" class="form-control myborder-fields" v-model="office" id="cargo">
                                <small v-show="errors[0]" class="text-danger">{{ errors[0] }}</small>
                            </div>
                        </ValidationProvider>
                    </div>
                    <div class="form-row">
                        <ValidationProvider name="idade" rules="required" slim v-slot="{ errors, required }">
                            <div class="form-group col-md-6">
                                <label for="Idade">Data de nascimento</label>
                                <input type="date" class="form-control myborder-fields" id="idade" v-model="birthdate">
                                <small v-show="errors[0]" class="text-danger">{{ errors[0] }}</small>
                            </div>
                        </ValidationProvider>
                        <ValidationProvider name="Tempo de empresa" rules="required" slim v-slot="{ errors, required }">
                            <div class="form-group col-md-6">
                                <label for="tempo_empresa">Tempo de empresa (Data de admissão)</label>
                                <input type="date" class="form-control myborder-fields" id="tempo_empresa" v-model="company_time">
                                <small v-show="errors[0]" class="text-danger">{{ errors[0] }}</small>
                            </div>
                        </ValidationProvider>
                    </div>
                    <div class="form-row">
                        <ValidationProvider name="Projetos que participou" rules="required" slim v-slot="{ errors, required }">
                            <div class="form-group col-md-6">
                                <label for="projetos">Projetos que participou</label>
                                <input type="text" class="form-control myborder-fields" v-model="projects" id="projetos">
                                <small v-show="errors[0]" class="text-danger">{{ errors[0] }}</small>
                            </div>
                        </ValidationProvider>
                        <ValidationProvider name="URL da imagem" rules="required" slim v-slot="{ errors, required }">
                            <div class="form-group col-md-6">
                                <label for="foto">URL da foto do Naver</label>
                                <input type="text" class="form-control myborder-fields" v-model="url_image" id="foto">
                                <small v-show="errors[0]" class="text-danger">{{ errors[0] }}</small>
                            </div>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="d-flex justify-content-end mt-3">
                    <button type="submit" class="button pr-5 pl-5" data-toggle="modal" data-target="#Sucessfully"> Salvar </button>
                </div>
            </form>
        </ValidationObserver>
        <div v-if="name && office && birthdate && company_time && projects && url_image">
            <div v-if="sucessfully">
                <modal-successfully :msg="msg" @close="sucessfully = false"/>
            </div>
        </div>
    </div>
</template>
<script>
import FormMessage from "~/components/FormMessage";
import form from "~/mixins/form";
import {ValidationProvider, ValidationObserver} from "vee-validate";
import ModalSuccessfully from '~/components/modalSuccessfully.vue';
export default {
    props:['adicionar'],
    mixins: [form],
	components: { 
        ValidationProvider,
		ValidationObserver,
		FormMessage,
        ModalSuccessfully
    },
    data(){
        return{
            msg:{
                title: 'Naver criado',
                subtitle: 'Naver criado com sucesso'
            },
            name: '',
            office: '',
            birthdate: '',
            company_time: '',
            projects: '',
            url_image: '',
            sucessfully: false
        }
    },
    methods:{
		async onSubmit() {
			this.msg_form = ''
			const params = new URLSearchParams();
            params.append('name', this.name);
            params.append('admission_date', this.$moment(this.company_time).format('DD/MM/YYYY'));
            params.append('job_role', this.office);
            params.append('project', this.projects);
            params.append('birthdate', this.$moment(this.birthdate).format('DD/MM/YYYY'));
            params.append('url', this.url_image);
			this.$axios.$post(`navers`, params)
            .then((response) => {
                this.sucessfully = true
                setTimeout(function(){
                    window.location.href = '/'
                }, 1000);
                
            })
            .catch((e) => {
                console.error(e);
            })
		}
	}
}
</script>