import {Component} from "react";
import Child from "./Child";

 class App extends Component{
     state={
         count:1
     };
    constructor(props) {
        super(props);
        console.log('初始化组件')
    }
    addCount = ()=>{
        this.setState({
            count:this.state.count + 1
        })
    };
    render(){
        const {count} = this.state;
        return<Child count={count} addCount={this.addCount}/>
    }
}
export default App;