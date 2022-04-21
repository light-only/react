import IndexView from "./views/IndexView/IndexView";
import AboutView from "./views/AboutView/AboutView";
import GetStartView from "./views/GetStartView/GetStartView";
import ApiView from "./views/ApiView/ApiView";
import UndefinedView from "./views/UndefinedView/UndefinedView";
import {Navigate} from 'react-router-dom'

const routers = [
    {
        path:'/',
        element:<IndexView/>
    },
    {
        path:'/about',
        element:<AboutView/>
    },
    {
        path:'/getstart',
        element:<GetStartView/>
    },
    {
        path:'/api',
        element:<ApiView/>
    },
    {
        path:'/404',
        element:<UndefinedView/>
    },
    {
        path:'*',
        element: <Navigate replace to='/404'/>
    }
]

export default routers;