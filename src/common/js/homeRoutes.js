import Home from "../../home/Home";
import RequesterHome from "../../home/requesterHome/RequesterHome"
import WorkerHome from "../../home/workerHome/WorkerHome"

export default (
    [
        {
            path: "/",
            component: Home,
            name: '首页',
            iconCls: 'fa fa-picture-o'
        },
        {
            path: "/requesterHome",
            component: RequesterHome,
            name: '发布者平台首页',
            iconCls: 'fa fa-picture-o'
        },
        {
            path: "/workerHome",
            component: WorkerHome,
            name: '标注者平台首页',
            iconCls: 'fa fa-picture-o'
        }
    ]
)