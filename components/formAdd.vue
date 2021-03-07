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
                                <label for="Idade">Idade</label>
                                <input type="number" class="form-control myborder-fields" v-model="age" id="idade">
                                <small v-show="errors[0]" class="text-danger">{{ errors[0] }}</small>
                            </div>
                        </ValidationProvider>
                        <ValidationProvider name="Tempo de empresa" rules="required" slim v-slot="{ errors, required }">
                            <div class="form-group col-md-6">
                                <label for="tempo_empresa">Tempo de empresa</label>
                                <input type="text" class="form-control myborder-fields" v-model="company_time" id="tempo_empresa">
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
                    <button type="submit" class="button pr-5 pl-5"> Salvar </button>
                </div>
            </form>
        </ValidationObserver>
    </div>
</template>
<script>
import FormMessage from "~/components/FormMessage";
import form from "~/mixins/form";
import {ValidationProvider, ValidationObserver} from "vee-validate";
export default {
    props:['adicionar'],
    mixins: [form],
	components: { 
        ValidationProvider,
		ValidationObserver,
		FormMessage
    },
    methods:{
		async onSubmit() {
			// '/users/login'
			this.msg_form = ''
			const params = new URLSearchParams();
            params.append('email', this.email);
			params.append('password', this.password);
			this.$axios.$post('/users/login', params)
            .then((response) => {
				const access_token = response.token
				Cookies.set('token', response.token)
				this.$store.commit('setAuth', access_token)
				this.$router.push('/')
                // if (response.enviado === 'sim') {
                //     this.msg_form = 'Mensagem enviada!';
                //     this.msg_form_type = 'success';
                //     this.enviando = false
                //     // this.reset();
                // } else {
                //     this.msg_form = 'Não foi possível enviar: ' + response.msg;
                //     this.msg_form_type = 'error';
                // }
            })
            .catch((e) => {
                this.msg_form = 'Não foi possível enviar!';
                this.msg_form_type = 'error';
                console.error(e);
            })
		}
	}
}
</script>