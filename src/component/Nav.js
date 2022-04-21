
import {Menu} from "antd";
import {Link, useLocation} from "react-router-dom";


export default ({data,theme,getSelected=()=>{},...props})=>{
    const location = useLocation();
    return <Menu
        id='nav'
        mode='horizontal'
        theme={theme}
        {...props}
        selectedkeys={getSelected(location)}
    >
        {data.map((item,index)=>{return <Menu.Item key={index} ><Link to={item.to}>{item.title}</Link></Menu.Item>})}
    </Menu>
}