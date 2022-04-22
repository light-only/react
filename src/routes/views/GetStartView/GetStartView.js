import Propup from "../../../component/Propup";
import {useState} from "react";


function  GetStartView(){
    const [show,showPropup] = useState(false);
    return <>
        <h1>新手入门</h1>
        {
            show ? <Propup
                renderInner={(col)=>{
                    return <div>
                        <h2>自定义弹框</h2>
                        <h2>弹框内容...</h2>
                        <h2>弹框内容...</h2>
                        <h2>弹框内容...</h2>
                        <h2>弹框内容...</h2>
                        <h2>弹框内容...</h2>
                        <button onClick={col}>关闭</button>
                    </div>
                }}
                afterCols={()=>{
                    showPropup(false);
                }
                }
            />:""
        }
        <button onClick={()=>{
            showPropup(true);
        }}>显示弹框</button>
    </>
}

export default GetStartView;