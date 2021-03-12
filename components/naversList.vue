<template>
	<div>
		<div class="container-fluid">
			<div class="row">
				<div
					class="col-12 col-md-6 col-lg-3 mb-5"
					v-for="(naver, index) in navers"
					:key="naver.id"
				>
                    <div :data-target="'#naver'+index" data-toggle="modal" style="cursor: pointer;">
                        <img class="object-fit-cover mb-3" :src="naver.url" :alt="naver.name">
                        <div class="mb-1" v-html="naver.name"></div>
                        <div class="mb-3 job_role" v-html="naver.job_role"></div>
                    </div>
					<div class="d-flex">
						<div data-toggle="modal" data-target="#modalDelete" @click="openDeleteModal(naver.id)">
							<img
								src="/Delete-Icon.svg"
								alt="delete"
								title="Delete"
								class="icon-action mr-2"
							/>
						</div>
						<a :href="'/editar/?id='+naver.id">
							<img src="/Edit-Icon.svg" alt="edit" title="Edit" class="icon-action"/>
						</a>
					</div>
                    <naver-modal :id="'naver'+index" :info="naver" @delete="toDelete = naver.id"/>
				</div>
			</div>
		</div>
		<modal-delete :id="toDelete" @closeDelete="sucessfully = true"/>
		<div v-if="sucessfully">
            <modal-successfully :msg="msg" @close="sucessfully = false"/>
        </div>
	</div>
</template>
<script>
import naverModal from '~/components/naverModal.vue';
import ModalSuccessfully from '~/components/modalSuccessfully.vue';
import ModalDelete from '~/components/modalDelete.vue';
export default {
    components: { naverModal, ModalSuccessfully, ModalDelete },
    props: ["navers"],
    data(){
        return{
			toDelete: '',
			msg:{
                title: 'Naver excluído',
                subtitle: 'Naver excluído com sucesso'
			},
			sucessfully: false
        }
    },
    methods:{
        openDeleteModal(id){
            this.toDelete = id
        },
    },
};
</script>
