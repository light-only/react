import {Component} from "react";
import Todo from './todo'
export default class Todos extends Component{

    render() {
        const {todo } = this.props;
        return  <ul id="todo-list">
            {todo.map((item)=>{return <Todo key={item.id} {...this.props} list={item}/>})}
        </ul>
    }
}