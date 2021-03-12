<template>
	<div>
		<div class="modal-mask">
			<div class="modal-wrapper">
				<div class="modal-container">
					<div class="modal-body">
						<slot name="body">
							<div class="d-flex justify-content-between">
								<div class="mt-4 mb-4 ml-4 title"> {{msg.title}} </div>
								<button @click="$emit('close')" class="border-0 close-button">
									<img src="/Close-Icon.svg" alt="close" title="close">
								</button>
							</div>
							<div class="ml-4 mr-4 mb-4 text">{{msg.subtitle}}</div>
						</slot>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: ["msg"]
};
</script>
>
