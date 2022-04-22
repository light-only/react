import {useDispatch} from "react-redux";
import actions from '../actions/action'
import {useCallback} from "react";
import api from "../../assets/js/api.config";

function useTopics(){
    const dispatch = useDispatch();
    const getTopics =useCallback((props)=>{
        dispatch({
            type:actions.topics.loading
        });
        api.topics(props).then(res=>{
            // console.log(res);
            dispatch({
                type:actions.topics.update,
                data:res.data.data
            })
        })
    },[]);
    return getTopics;
}

export {useTopics};