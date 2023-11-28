const state = {
      isLoading : false,
}
const actions ={
      register(context){
            setTimeout(() => {
                  context.commit('setLoading')
            }, 2000);
      }
}
const mutations = {
      setLoading(state){
            state.isLoading = true
      }
}
export default {state, mutations , actions}