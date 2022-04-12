import {Component,createRef} from "react";

export default class Todo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            edit:false,
            editVal:props.list.title
        }
    }
    static getDerivedStateFromProps(props){
        return props.list;
    }
    remove=()=>{
        const {removeTodo,list} = this.props;
        removeTodo(list.id);
    };
    change = ({target})=>{
        const {changeTodo,list} = this.props;
        console.log(target);
        changeTodo(list.id,target.checked);
    };
    editClick = ()=>{
        this.setState({
            edit:true
        },()=>this.editInput.current.focus())
    };
    cancleEdit = ()=>{
        const {editTodo,list} = this.props;
       const {editVal} = this.state;
       if(editVal.trim()){
           editTodo(list.id,editVal);
       }else{
           this.setState({
               editVal : list.title
           })
       }
       this.setState({
           edit:false
       })
    };
    editTitle = ({target})=>{
       this.setState({
           editVal:target.value
       })
    }
    editInput = createRef();
    render() {
        const {done,title,edit,editVal} = this.state;
        console.log(title)
        return  <li className={edit?'editing':''}>
            <div className={`todo ${done? "done":""}`}>
                <div className="display">
                    <input className="check" type="checkbox" checked={done} onChange={this.change}/>
                    <div className="todo-content" onDoubleClick={this.editClick} >{title}</div>
                    <span className="todo-destroy" onClick={this.remove}></span>
                </div>
                <div className="edit">
                    <input className="todo-input" ref={this.editInput} type="text" onBlur={this.cancleEdit} value={editVal} onChange={this.editTitle}/>
                </div>
            </div>
        </li>
    }
}