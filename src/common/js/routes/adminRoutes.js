import adminLogin from '../../../admin/Login';
import AdminNavMenu from  '../../../admin/AdminNavMenu'

import InAndOut from '../../../admin/profit/InAndOut';
import Profit from '../../../admin/profit/ProfitInfo';
import CurrentTaskInfo from '../../../admin/task/CurrentTaskData';
import TaskData from '../../../admin/task/TaskData';
import RequesterRegister from '../../../admin/user/RequesterRegister';
import WorkerRegister from '../../../admin/user/WorkerRegister';
import UserData from '../../../admin/user/UserData';

export default (
    [
        {
            path:'/adminLogin',
            component:adminLogin,
            name:'adminLogin',
            hidden:true
        },
        {
            path:'/admin',
            component:AdminNavMenu,
            name:'利润',
            iconCls: 'fa fa-picture-o',
            children: [
                { path: 'profit', component: Profit, name: '利润数据' },
                { path: 'inAndOut', component: InAndOut, name: '充值兑换数据' }
            ]
        },
        {
            path:'/admin',
            component:AdminNavMenu,
            name:'任务',
            iconCls: 'fa fa-picture-o',
            children: [
                {path:'currentTaskData',component:CurrentTaskInfo,name:'当前任务数据'},
                {path:'taskData',component:TaskData,name:'最近任务数据'}
            ]
        },
        {
            path:'/admin',
            component:AdminNavMenu,
            name:'用户',
            iconCls: 'fa fa-picture-o',
            children:[
                {path:'userData',component:UserData,name:'用户数据'},
                {path:'requesterRegister',component:RequesterRegister,name:'发布者注册审核'},
                {path:'workerRegister',component:WorkerRegister,name:'工人注册审核'}
            ]
        }

    ]
)