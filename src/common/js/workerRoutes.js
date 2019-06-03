import PublishedTaskList from "../../worker/acceptTask/PublishedTaskList";
import WorkerTaskList from "../../worker/acceptTask/WorkerTaskList";
import WorkerNavMenu from "../../worker/WorkerNavMenu";
import WorkerInfo from "../../worker/workerInfo/WorkerInfo";
import WorkerHistory from "../../worker/workerInfo/WorkerHistory";
import WorkerMessage from "../../worker/workerMessage/WorkerMessage";

export default (
    [
        {
            path: '/worker',
            component: WorkerNavMenu,
            name: '任务接收中心',
            iconCls: 'fa fa-picture-o',//图标样式class
            children: [
                { path: '/publishedTasks', component: PublishedTaskList, name: '查看所有任务' },
                { path: '/myTasks', component: WorkerTaskList, name: '我的任务' },
            ]
        },
        {
            path: '/worker',
            component: WorkerNavMenu,
            name: '消息',
            iconCls: 'fa fa-picture-o',//图标样式class
            children: [
                { path: '/message', component: WorkerMessage, name: '消息' },
            ]
        },
        {
            path: '/worker',
            component: WorkerNavMenu,
            name: '个人中心',
            iconCls: 'fa fa-picture-o',//图标样式class
            children: [
                { path: '/info', component: WorkerInfo, name: '个人信息' },
                { path: '/history', component: WorkerHistory, name: '个人信息' },
            ]
        }
    ]
);