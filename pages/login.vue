<template>
	<div>
		<div class="container my-login-container">
			<div class="row">
				<div class="col-12 col-md-6 offset-md-3 my-login-col">
					<div class="login">
						<div class="myborder-login p-4">
							<div class="d-flex justify-content-center mt-4 mb-4">
								<img src="/logo.svg" alt="Logo Nave.rs" title="nave.rs">
							</div>
							<div>
								<ValidationObserver v-slot="{ handleSubmit }" ref="observer">
									<form method="POST" @submit.prevent="handleSubmit(onSubmit)">
										<ValidationProvider name="email" rules="required|email" slim v-slot="{ errors, required }">
											<div class="form-group pb-1">
												<label for="email">E-mail</label>
												<input type="email" class="form-control myborder-fields" id="email" placeholder="E-mail" v-model="email">
												<small v-show="errors[0]" class="text-danger">{{ errors[0] }}</small>
											</div>
										</ValidationProvider>
										<ValidationProvider name="senha" rules="required" slim v-slot="{ errors, required }">
											<div class="form-group pb-1">
												<label for="password">Senha</label>
												<input type="password" class="form-control myborder-fields" id="password" placeholder="Senha" v-model="password">
												<small v-show="errors[0]" class="text-danger">{{ errors[0] }}</small>
											</div>
										</ValidationProvider>
										<FormMessage :msg="msg_form" :type="msg_form_type"></FormMessage>
										<button type="submit" class="button submit"> Entrar </button>
									</form>
								</ValidationObserver>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import FormMessage from "~/components/FormMessage";
import form from "~/mixins/form";
import {ValidationProvider, ValidationObserver} from "vee-validate";
import Cookies from 'js-cookie';
export default {
	mixins: [form],
	components: { 
        ValidationProvider,
		ValidationObserver,
		FormMessage
    },
	data() {
		return {
			email: '',
			password: ''
		}
	},
	methods:{
		async onSubmit() {
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