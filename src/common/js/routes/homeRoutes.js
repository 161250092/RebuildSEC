import App from "../../../App";
import Home from "../../../home/Home";
import RequesterHomeNav from "../../../home/requesterHome/RequesterHomeNav";
import RequesterHome from "../../../home/requesterHome/RequesterHome"
import RequesterLogin from "../../../home/requesterHome/RequesterLogin"
import WorkerHome from "../../../home/workerHome/WorkerHome"

export default (
    [
        {
            path: '/',
            component: Home,
            name: '首页',
            iconCls: 'fa fa-picture-o'
        },
        {
            path: '/requesterHome',
            component: App,
            name: '发布者平台',
            iconCls: 'fa fa-picture-o',
            children:[
                { path: '', component: RequesterHome, name: '发布者平台首页' },
                { path: 'login', component: RequesterLogin, name: '发布者登录' }
            ]
        },
        {
            path: '/workerHome',
            component: WorkerHome,
            name: '标注者平台首页',
            iconCls: 'fa fa-picture-o'
        }
    ]
)