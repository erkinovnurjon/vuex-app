<template >
      <div class="form-floating my-3">
      <input :type="type" class="form-control " id="floatingPassword" :placeholder="label" required >
      <label for="floatingPassword">{{ label }}</label>
    </div>
</template>

<script>
export default {
      name :'Input',
      props : {
         label : String ,
         type : String,
      }
}
</script>

<style >
      
</style>