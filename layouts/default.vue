<template>
	<div>
		<div v-if="$route.path != '/login'">
			<div class="d-flex justify-content-between p-3">
				<img
					src="/logo.svg"
					class="img-fluid"
					alt="Logo Nave.rs"
					title="nave.rs"
				/>
				<div class="my-auto">Sair</div>
			</div>
		</div>
		<Nuxt />
	</div>
</template>
<script>