import {PureComponent} from "react";
import Todos from './Todos'
import Stats from "./Stats";
class App extends PureComponent{
    state={
       todo:[
           {
               id:0,
               title:'今晚要看两本书',
               done:false
           },
           {
               id:1,
               title:'今天要上两颗星',
               done:true
           },
           {
               id:2,
               title:'今天要敲1000行代码',
               done:true
           }
       ]
    }
    removeTodo = (id)=>{
        this.setState({
            todo:this.state.todo.filter(item=>id !== item.id)
        })
    };
    removeDone =()=>{
        this.setState({
            todo:this.state.todo.filter(item=>(!item.done))
        })
    }
    changeTodo = (id,done)=>{
        const {todo} = this.state;
        this.setState({
            todo:todo.map(item=>{
                if(item.id === id){
                    item.done = done;
                    return {
                        ...item,
                        done
                    }
                }
                return item;

            })
        })
    };
    editTodo = (id,title)=>{
        const {todo} = this.state;
        this.setState({
            todo:todo.map(item=>{
                if(item.id === id){
                    item.title = title;
                    return {
                        ...item,
                        title
                    };
                }
                return item;
            })
        })
    };
    addTodo = ({keyCode,target})=>{
        // console.log(keyCode,target);
        const {todo} = this.state;
        if(keyCode === 13){
           if(target.value.trim()){
               this.setState({
                   todo:[
                       ...todo,
                       {
                           id:Date.now(),
                           title:target.value,
                           done:false
                       }
                   ]
               })
               target.value= "";
           }
        }
    }
    render(){
        const {todo} = this.state;
        return (
            <div id="todoapp">
                <div className="title">
                    <h1>todo</h1>
                </div>
                <div className="content">
                    <div id="create-todo">
                        <input id="new-todo" placeholder="What needs to be done?" autoComplete="off" onKeyDown={this.addTodo} type="text"/>
                    </div>
                    <Todos todo={todo} editTodo={this.editTodo} changeTodo={this.changeTodo} removeTodo={this.removeTodo}/>
                    <Stats todo={todo} removeDone={this.removeDone}/>
                </div>
            </div>
        )
    }
}
export default App;