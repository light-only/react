import {useEffect, useRef, useState} from "react";
import ReactDom from 'react-dom';
export default ({renderInner,afterCols})=>{

    const [show,showPropup] = useState(true);
    const mask = useRef();
    const prop = useRef();
    const col = ()=>{
        showPropup(false);
    }
    useEffect(()=>{
        console.log(111)
        if(show){
            console.log(mask,prop);
            mask.current.style.background = 'rgba(0,0,0,.5)';
            prop.current.style.transform = 'translateY(0)';
        }else{
            mask.current.style.background = 'rgba(0,0,0,0)';
            prop.current.style.transform = 'translateY(-1000px)';
            prop.current.addEventListener('transitionend',()=>{
                afterCols();
            },{once:true})
        }
    },[show]);


    return  ReactDom.createPortal(
        <div className='prop-mask' ref={mask}>
            <div className='propup' ref={prop}>{renderInner(col)}</div>
        </div>, document.body
    )
}