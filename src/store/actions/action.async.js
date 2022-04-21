import {useDispatch} from "react-redux";
import actions from '../actions/action'
import {useCallback} from "react";

function useTopics(){
    const dispatch = useDispatch();
    const getTopics =useCallback(()=>{
        dispatch({
            type:actions.topics.loading
        })
    },[]);
    return getTopics;
}

export {useTopics};