import ReactDom from 'react-dom/client';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import 'antd/dist/antd.css';
import '../src/assets/css/base.css'
import App from './App'
import store from './store/index'
const containner = document.getElementById('root');
const root = ReactDom.createRoot(containner);

root.render(
   <BrowserRouter>
       <Provider store={store}>
           <App/>
       </Provider>
   </BrowserRouter>
)