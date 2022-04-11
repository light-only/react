import {Component} from "react";

export default  class Child extends Component{
    state={
        show:false
    }
    clickHandle=()=>{
        const {title,changeTitle,openName} = this.props;
        changeTitle(title === openName? '':title);
    }
    render(){
        const {title,list,openName} = this.props;
        return (
            <dl className={openName===title? 'friend-group expanded':'friend-group'} onClick={this.clickHandle}>
                <dt>{title}</dt>
                {list.map((item,index)=>{
                    return <dd key={index}>{item}</dd>
                })}
            </dl>
        )
    }
}