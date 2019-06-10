import App from "../../../App";
import Home from "../../../home/Home";
import RequesterHome from "../../../home/requesterHome/RequesterHome"
import RequesterLogin from "../../../home/requesterHome/RequesterLogin"
import RequesterRegister from "../../../home/requesterHome/RequesterRegister";
import WorkerHome from "../../../home/workerHome/WorkerHome"
import WorkerLogin from "../../../home/workerHome/WorkerLogin"
import WorkerRegister from "../../../home/workerHome/WorkerRegister"
import WorkerGuide from "../../../home/workerHome/WorkerGuide"

export default (
    [
        {
            path: '/',
            component: Home,
            name: 'home',
            iconCls: 'fa fa-picture-o'
        },
        {
            path: '/requesterHome',
            component: App,
            name: 'requesterHome',
            iconCls: 'fa fa-picture-o',
            children:[
                { path: '', component: RequesterHome, name: 'requesterHome' },
                { path: 'login', component: RequesterLogin, name: 'requesterLogin' },
                { path: 'register', component: RequesterRegister, name: 'requesterRegister' }
            ]
        },
        {
            path: '/workerHome',
            component: App,
            name: 'workerHome',
            iconCls: 'fa fa-picture-o',
            children:[
                { path: '', component: WorkerHome, name: 'workerHome' },
                { path: 'login', component: WorkerLogin, name: 'workerLogin' },
                { path: 'register', component: WorkerRegister, name: 'workerRegister' },
                { path: 'guide', component: WorkerGuide, name: 'workerGuide' }
            ]
        }
    ]
)