import {createStore,combineReducers} from 'redux';
import topics from "./reducers/topics";
import topic from "./reducers/topic";
export default createStore(combineReducers({
    topics,
    topic
}))