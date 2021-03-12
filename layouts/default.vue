<template>
	<div>
		<div v-if="$route.path != '/login'">
			<div class="d-flex justify-content-between p-3">
				<a href="/">
					<img
						src="/logo.svg"
						class="img-fluid"
						alt="Logo Nave.rs"
						title="nave.rs"
					/>
				</a>
				<div class="my-auto">
					<button class="bg-white border-0" @click="logout()">
						Sair
					</button>
					
				</div>
			</div>
		</div>
		<Nuxt />
	</div>
</template>
<script>
import Cookies from 'js-cookie';
export default{
	methods:{
		logout(){
			Cookies.remove('token')
			window.location.href = '/login'
		}
	},
	mounted(){
		if (!Cookies.get('token') && this.$route.path != '/login'){
			alert('Você precisa fazer o login para continuar')
			window.location.href = 'login'
		}
	}
}
</script>