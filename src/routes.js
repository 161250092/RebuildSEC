import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'

 import Table from './views/nav1/Table.vue'
// import Form from './views/nav1/Form.vue'
// import user from './views/nav1/user.vue'
// import Page4 from './views/nav2/Page4.vue'
//import Page5 from './views/nav2/Page5.vue'
import cashInfo from './views/nav3/cashInfo.vue'
import workInfo from './views/nav3/workInfo.vue'
//import echarts from './views/charts/echarts.vue'
import editorTaskDraft from './views/nav1/editorTaskDraft'
import editorMassTaskDraft from './views/nav1/editorMassTaskDraft'
import publishTask from './views/nav1/publishTask'
import checkSubmittedLabel from './views/nav2/checkSubmittedLabel'
import  completedTask from './views/nav2/completedTask'
import personInformation from './views/nav4/personInformation'
import  canvas1 from './views/workplace/canvas1'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '任务发布中心',
        iconCls: 'fa fa-picture-o',//图标样式class
        children: [
            { path: '/main', component: Main, name: '主页', hidden: true },
            //{ path: '/table', component: Table, name: 'Table' },
           // { path: '/form', component: Form, name: 'Form' },
            { path: '/editorTaskDraft', component: editorTaskDraft, name: '编辑任务' },
            { path: '/editorMassTaskDraft', component: editorMassTaskDraft, name: '编辑大任务' },
            { path: '/publishTask', component: publishTask, name: '发布' },
            // { path: '/user', component: user, name: '列表' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '审核中心',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/checkSubmittedLabel', component: checkSubmittedLabel, name: '审核' },
            { path: '/completedTask', component: completedTask, name: '历史任务' },
            //{ path: '/page4', component: Page4, name: '页面4' },
            //{ path: '/page5', component: Page5, name: '页面5' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '消息',
        iconCls: 'fa fa-comment-o',
        children: [
            { path: '/cashInfo', component: cashInfo, name: '收支消息' },
            { path: '/workInfo', component: workInfo, name: '工作消息' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '个人中心',
        iconCls: 'fa fa-user-circle',
        children: [
            { path: '/personInformation', component: personInformation, name: '个人信息' },
            { path: '/canvas1', component: canvas1, name: '工作台1', hidden: true },
            // { path: '/echarts', component: echarts, name: 'echarts' }
        ]
    },

    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    },


];

export default routes;
