<template >
        <main class="form-signin w-25 m-auto">
  <form>
    <img :src="logo" alt="logo" style="width: 120px; cursor: pointer;"  @click="toHomeHandler">
    <h1 class="h3 mb-3 fw-normal mt-3">Register</h1>

    
    <Input :label="'Your Name'" :type="'text'" />
    <Input :label="'Email Adress '" :type="'email'" />
    <Input :label="'Password'" :type="'password'" />
    
    

    <Button type="submit" :disabled="isLoading" @click="submitHandler" >Sign in</Button>
    
    
  </form>
</main>
</template>

<script>
import { logo } from '../constants';
export default {
     data(){
      return {
        logo
      }
     } ,
     computed: {
      isLoading(){
        return this.$store.state.auth.isLoading
      },
     },
     methods: {
      submitHandler(e){
       e.preventDefault()
       this.$store.dispatch('register')
      }
     },
}
</script>

<style >
      
</style>