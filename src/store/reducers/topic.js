
export default (topic={
    loading:false,
    data:[]
},action)=>{
    switch (action.type){
        case 'actions.topic.loading':
            return {
                loading: true,
                data:topic.data
            }
        case 'actions.topic.update':
            return {
                loading: true,
                data:action.data
            }
        default:
            return topic;
    }
}