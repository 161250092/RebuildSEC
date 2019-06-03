import WorkerHome from "../../worker/WorkerHome";

import Main from '../../views/Main.vue'

import editorTaskDraft from '../../views/nav1/editorTaskDraft'
import editorMassTaskDraft from '../../views/nav1/editorMassTaskDraft'
import publishTask from '../../views/nav1/publishTask'

export default (
    [
        {
            path: '/worker',
            component: WorkerHome,
            name: '任务接收中心',
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
    ]
);