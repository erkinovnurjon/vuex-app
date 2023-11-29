<template >
      <div class="form-floating my-3">
      <input :type="type" class="form-control " :id="label" :placeholder="label" required 
      @input="updateInput"
      :value="modalValue" >
      <label :for="label">{{ label }}</label>
    </div>
</template>

<script>
export default {
      name :'Input',
      props : {
         label : [String , Number] ,
         type : String,
         modalValue : [String , Number]
      },
      methods: {
            updateInput(e){
                  this.$emit('update : modelValue' , e.target.value)
            }
      },
}
</script>

<style >
      
</style>