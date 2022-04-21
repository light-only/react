import {Row, Col, List} from 'antd';
import style from '../../../assets/css/index.module.css'
import Nav from "../../../component/Nav";
import {indexNavs} from "../../../assets/js/nav.config";
import qs from 'qs';
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import {useTopics} from "../../../store/actions/action.async";
export default()=>{
    const {loading,data} = useSelector(state=>state.topics);
    const {search} = useLocation();
    const {tab='all',page=1} = qs.parse(search.slice(1));
    const getTopics = useTopics();
    useEffect(()=>{
        getTopics();
    },[tab,page])
    return <>
           <Row>
               <Col span={20} className={style.content}>
                   <Nav
                    data = {indexNavs}
                    theme='light'
                    getSelected={({search})=>{
                        // console.log(search);
                        // console.log(search.slice(1));
                        // console.log(qs.parse(search.slice(1)))
                        // console.log(search.slice(2));
                        const {tab} = qs.parse(search.slice(1));
                        let index = String(indexNavs.findIndex(item=>{
                            return qs.parse(item.to.slice(2)).tab === tab;
                        }));
                        return index;
                    }}
                   />
                   <List
                        loading={true}
                       renderItem={item=>{
                           return <List.Item></List.Item>
                       }}
                   />
               </Col>
               <Col span={4}>侧边栏</Col>
           </Row>
    </>
}