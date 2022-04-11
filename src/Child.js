import {Component} from "react";
export default class Child extends Component{
    constructor(props) {
        super(props);
        console.log('初始化组件');
    }
    static getDerivedStateFromProps(props,state){
        // console.log(props,state);
        //将props映射到state中
        return props;
    }
    state={
        num:5
    };
    addNum = ()=>{
        this.setState({
            num:this.state.num + 5
        })
    };
    componentDidMount() {
        //挂载完成，已将虚拟Dom转换为真是OOM,并且添加到DOM树中
        //处理副作用
        //1.数据请求
        //2.DOM操作
    }

    render(){
        //生成虚拟DOM
        const {num,count,addCount} = this.state;
        return <>
            <p>num:{num}</p>
            <button onClick={this.addNum}>递增-num</button>
            <hr/>
            <p>count:{count}</p>
            <button onClick={addCount}>递增-count</button>
        </>
    }
}