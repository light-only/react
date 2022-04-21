import actions from '../actions/action'

export default (topics={
    loading:false,
    data:[]
},action)=>{
    switch (action.type){
        case actions.topics.loading:
            return {
                loading:true,
                data:topics.data
            }
        case actions.topics.update:
            return {
                loading: true,
                data:action.data
            }
        default:
            return topics;
    }
}