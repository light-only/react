import {Component} from "react";

export default class Stats extends Component{

    remove = ()=>{
        const {removeDone} = this.props;
        removeDone();
    }
    render() {
        const {todo} = this.props;
        const doneLen = todo.filter(item=>item.done).length;
        const unDoneLen = todo.length - doneLen;
        return  <div id="todo-stats">
            {unDoneLen>0?  <span className="todo-count">
                <span className="number">{unDoneLen}</span><span className="word">项待完成</span>
            </span>:''}
            <span className="todo-clear">
                {doneLen>0? <a onClick={this.remove}>Clear <span>{doneLen}</span> 已完成事项</a>:''}
            </span>
        </div>
    }
}