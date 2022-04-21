import {Routes,Route} from 'react-router-dom';
import routers from './routes.config';
export default ()=>{
    return <Routes>
        {routers.map((item,index)=>{
            return <Route path={item.path} element={item.element} key={index}/>
        })}
    </Routes>
}