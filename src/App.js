import {Component} from "react";
import data from './data';
import Child from './Child'
class App extends Component{
    state={
        openName:'家人'
    }
    changeTitle = (openName)=>{
       this.setState({
           openName
       })
    }
    render(){
        const {openName} = this.state;
        return (
            <div className="friend-list">
                {Object.keys(data).map((item,index)=>{
                    return <Child key={index} title={item} list={data[item]} changeTitle={this.changeTitle} openName={openName}/>
                })}
            </div>
        )
    }
}

export default App;