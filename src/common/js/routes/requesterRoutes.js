import Login from '../../../views/Login.vue'
import NotFound from '../../../views/404.vue'
import requestorMenu from '../../../views/requestorMenu.vue'
import Main from '../../../views/Main.vue'

import editorTaskDraft from '../../../views/nav1/editorTaskDraft'
import editorMassTaskDraft from '../../../views/nav1/editorMassTaskDraft'
import publishTask from '../../../views/nav1/publishTask'
import checkSubmittedLabel from '../../../views/nav2/checkSubmittedLabel'
import  completedTask from '../../../views/nav2/completedTask'
import personInformation from '../../../views/nav4/personInformation'
import  canvas1 from '../../../views/workplace/canvas1'
import canvas2 from '../../../views/workplace/canvas2'
import  canvas3 from '../../../views/workplace/canvas3'
import areaLabel from '../../../views/workplace/areaLabel'
import imgLabel from '../../../views/workplace/imgLabel'
import frameLabel from '../../../views/workplace/frameLabel'
// import Form from '../../views/nav1/Form.vue'
// import user from '../../views/nav1/user.vue'
// import Page4 from '../../views/nav2/Page4.vue'
//import Page5 from '../../views/nav2/Page5.vue'
import cashInfo from '../../../views/nav3/cashInfo.vue'
import workInfo from '../../../views/nav3/workInfo.vue'
import RequesterImageLabel from "../../../views/RequesterImageLabel";
import RequesterFrameLabel from "../../../views/RequesterFrameLabel";
import RequesterAreaLabel from "../../../views/RequesterAreaLabel";

export default (
[
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
        path: '/request',
        component: requestorMenu,
        name: '任务中心',
        iconCls: 'fa fa-picture-o',//图标样式class
        children: [
            { path: '/main', component: Main, name: '主页', hidden: true },
            { path: '/editorTaskDraft', component: editorTaskDraft, name: '普通任务' },
            { path: '/editorMassTaskDraft', component: editorMassTaskDraft, name: '众包任务' },
            { path: '/publishTask', component: publishTask, name: '发布中心' },
        ]
    },
    {
        path: '/request',
        component: requestorMenu,
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
        path: '/request',
        component: requestorMenu,
        name: '消息',
        iconCls: 'fa fa-comment-o',
        children: [
            { path: '/cashInfo', component: cashInfo, name: '收支消息' },
            { path: '/workInfo', component: workInfo, name: '工作消息' }
        ]
    },
    {
        path: '/request',
        component: requestorMenu,
        name: '个人中心',
        iconCls: 'fa fa-user-circle',
        children: [
            { path: '/personInformation', component: personInformation, name: '账号信息' },
            { path: '/canvas1', component: canvas1, name: '工作台1', hidden: true },
            { path: '/canvas2', component: canvas2, name: '工作台2', hidden:true},
            { path: '/canvas3', component: canvas3, name: '工作台3', hidden:true}
            // { path: '/echarts', component: echarts, name: 'echarts' }
        ]
    },

    {
        path: '/request',
        component: requestorMenu,
        name: '标注样本',
        iconCls: 'fa fa-user-circle',
        hidden:true,
        children:[
            { path: '/imgLabel', component: RequesterImageLabel, name: '图片标注' },
            { path: '/frameLabel', component:RequesterFrameLabel,name:'方框标注'},
            { path: '/areaLabel',component:RequesterAreaLabel,name:'区域标注'}
        ]

    },


    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    },


]
);
