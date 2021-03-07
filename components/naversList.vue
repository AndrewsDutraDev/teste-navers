<template>
	<div>
		<div class="container-fluid">
			<div class="row">
				<div
					class="col-12 col-md-6 col-lg-3"
					v-for="(naver, index) in navers"
					:key="naver.id"
				>
                    <div :data-target="'#'+index+'naver'" data-toggle="modal">
                        <!-- {{naver}} -->
                        <!-- {{fixRoute(naver.url)}} -->
                        <!-- <img :src="fixRoute(naver.url)"> -->
                        <div v-html="naver.name"></div>
                        <div v-html="naver.job_role"></div>
                        <div class="d-flex">
                            <div data-toggle="modal" data-target="#modalDelete" @click="openDeleteModal(naver.id)">
                                <img
                                    src="/Delete-Icon.svg"
                                    alt="delete"
                                    title="Delete"
                                    class="icon-action"
                                />
                            </div>
							<a href="/edit">
								<img src="/Edit-Icon.svg" alt="edit" title="Edit" class="icon-action"/>
							</a>
                        </div>
                    </div>
                    <naver-modal :id="index+'naver'"/>
				</div>
			</div>
		</div>
		<!-- Modal -->
		<div
			class="modal fade"
			id="modalDelete"
			data-backdrop="static"
			data-keyboard="false"
			tabindex="-1"
			aria-labelledby="modalDelete"
			aria-hidden="true"
		>
			<div class="modal-dialog modal-dialog-centered mydialog">
				<div class="modal-content">
					<div class="modal-body">
						<div class="mt-4 mb-4 ml-4 title">Excluir Naver</div>
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
						<button type="button" class="button action modal-action" @click="deleteNaver()">
							Excluir
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import naverModal from './naverModal.vue';
export default {
    components: { naverModal },
    props: ["navers"],
    data(){
        return{
            toDelete: ''
        }
    },
    methods:{
        openDeleteModal(id){
            this.toDelete = id
        },
        deleteNaver(){
            this.$axios.delete(`/navers/${this.toDelete}`).then((res) =>{
                console.log('deletado')
            }).catch((e)=>{
                console.log(e)
            })
        }
    },
};
</script>
