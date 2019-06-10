// import adminLogin from '../../admin/Login';
// import Home from '../../admin/Home';
//
// import InAndOut from '../../admin/profit/InAndOut';
// import Profit from '../../admin/profit/ProfitInfo';
// import CurrentTaskInfo from '../../admin/task/CurrentTaskData';
// import TaskData from '../../admin/task/TaskData';
// import RequesterRegister from '../../admin/user/RequesterRegister';
// import WorkerRegister from '../../admin/user/WorkerRegister';
// import UserData from '../../admin/user/UserData';
//
// export default (
//     [
//         {
//             path:'/adminLogin',
//             component:adminLogin,
//             name:'',
//             hidden:true
//         },
//         {
//             path:'/profit',
//             component:Home,
//             name:'盈利数据查看',
//             iconCls: 'fa fa-picture-o',
//             children: [
//                 { path: '/profit', component: Profit, name: '盈利数据' },
//                 { path: '/inAndOut', component: InAndOut, name: '充值兑换数据' }
//             ]
//         },
//         {
//             path:'/task',
//             component:'任务数据查看',
//             iconCls: 'fa fa-picture-o',
//             children: [
//                 {path:'/currentTaskData',component:CurrentTaskInfo,name:'当前任务数据'},
//                 {path:'/taskData',component:TaskData,name:'最近任务数据'}
//             ]
//         },
//         {
//             path:'/user',
//             component:'用户数据查看',
//             iconCls: 'fa fa-picture-o',
//             children:[
//                 {path:'/userData',component:UserData,name:'用户数据'},
//                 {path:'/requesterRegister',component:RequesterRegister,name:'发布者注册审核'},
//                 {path:'/workerRegister',component:WorkerRegister,name:'工人注册审核'}
//             ]
//         }
//
//     ]
// );