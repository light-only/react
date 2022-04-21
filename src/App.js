import logo from './assets/img/logo.svg'
import {Link, Route} from "react-router-dom";
import Nav from './component/Nav';
import {navs} from './assets/js/nav.config'
import {Layout,Affix,Menu} from 'antd';
import Routes from "./routes";
const {Header,Footer,Content} = Layout;
function App (){
    return <div>
        <Layout className='page'>
           <Affix offsetTop={0}>
               <Header>
                   <div className='wrap'>
                       <h1 id='logo'>
                           <Link to='/'>
                               <img src={logo}/>
                           </Link>
                       </h1>
                        <Nav
                            id='nav'
                            data={navs}
                            theme='dark'
                            getSelected={({pathname})=>{
                                return String(navs.findIndex(item=>{
                                    return item.to === pathname;
                                }))
                            }}
                        />
                   </div>
               </Header>
           </Affix>
            <Content className='content wrap'>
                <Routes/>
            </Content>
            <Footer>Footer</Footer>
        </Layout>

    </div>
}
export default  App;