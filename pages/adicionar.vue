<template>
    <div>
        <div class="container">
			<div class="d-flex mb-5 mt-5">
				<a href="/" class="my-auto mr-3">
					<img src="/Arrow-Icon.svg" alt="edit" title="Edit" class="icon-action"/>
				</a>
				<div class="title"> Adicionar Naver</div>
			</div>
			<form-add/>
        </div>
    </div>
</template>
<script>
import formAdd from '~/components/formAdd'
import FormAdd from '../components/formAdd.vue'
    export default {
		components: {
			FormAdd

		},
        data(){
            return{

            }
        }    
    }
</script>