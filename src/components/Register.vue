<template>
	<main class="form-signin w-25 m-auto mt-5">
		<form>
			<img :src="logo" alt="logo" style="width: 100px; cursor: pointer" @click="toHomeHandler" />
			<h1 class="h3 mb-3 fw-normal mt-3">Register</h1>
                  <Validationerror v-if="validationErrors" :validationErrors="validationErrors" />
			<Input :label="'Name'" :type="'text'" v-model="username" />
			<Input :label="'Email address'" :type="'email'" v-model="email"/>
			<Input :label="'Password'" :type="'password'" v-model="password" />

			<Button type="submit" :disabled="isLoading" @click="submitHandler">Register</Button>
		</form>
	</main>
</template>

<script>
import {logo} from "../constants"
import Validationerror from "./ValidationError.vue"
export default {
	data() {
		return {
			logo,
      username : '',
      email : '' ,
      password : '',
		}
	},
	computed: {
		isLoading() {
			return this.$store.state.auth.isLoading
		},
		validationErrors(){
			return this.$store.state.auth.errors
		}
	},
	components:{
		Validationerror
	},
	
	methods: {
		submitHandler(e) {
			e.preventDefault()
			const data = {
				username: this.username,
				email: this.email,
				password: this.password,
			}
			this.$store
				.dispatch('register', data)
				.then(user => console.log('USER', user))
                        //  this.$router.push({name : "home"})
				.catch(err => console.log('ERROR', err))
		},
	},
}
</script>

<style></style>