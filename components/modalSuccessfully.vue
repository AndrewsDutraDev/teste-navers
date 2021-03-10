<template>
	<div>
		<!-- <div
			class="modal fade"
			id="Sucessfully"
			data-backdrop="static"
			data-keyboard="false"
			tabindex="-1"
			aria-labelledby="Sucessfully"
			aria-hidden="true"
		>
			<div class="modal-dialog modal-dialog-centered mydialog">
				<div class="modal-content">
					<div class="modal-body">
                        <div>
                            <img src="/Close-Icon.svg" alt="close" title="close" data-dismiss="modal" class="close-modal">
                        </div>
						<div v-if="edit">
							<div class="mt-4 mb-4 ml-4 title"> Naver atualizado </div>
                        	<div class="ml-4 mr-4 mb-4 text">Naver atualizado com sucesso</div>
						</div>
						<div v-else>
							<div class="mt-4 mb-4 ml-4 title"> Naver criado </div>
                        	<div class="ml-4 mr-4 mb-4 text">Naver criado com sucesso</div>
						</div>
					</div>
				</div>
			</div>
		</div> -->
		<div class="modal-mask">
			<div class="modal-wrapper">
				<div class="modal-container">
					<div class="modal-header">
						<slot name="header">
							default header
						</slot>
					</div>

					<div class="modal-body">
						<slot name="body">
							default body
						</slot>
					</div>

					<div class="modal-footer">
						<slot name="footer">
							default footer
							<button
								class="modal-default-button"
								@click="$emit('close')"
							>
								OK
							</button>
						</slot>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: ["edit"]
};
</script>
>
