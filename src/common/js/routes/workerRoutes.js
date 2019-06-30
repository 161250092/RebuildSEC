import PublishedTaskList from "../../../worker/acceptTask/PublishedTaskList";
import WorkerTaskList from "../../../worker/acceptTask/WorkerTaskList";
import WorkerNavMenu from "../../../worker/WorkerNavMenu";
import WorkerInfo from "../../../worker/workerInfo/WorkerInfo";
import WorkerHistory from "../../../worker/workerInfo/WorkerHistory";
import WorkerMessage from "../../../worker/workerMessage/WorkerMessage";
import WorkerSubmittedTaskStatus from "../../../worker/workerMessage/WorkerSubmittedTaskStatus";
import WorkerImageLabel from "../../../worker/workplace/WorkerImageLabel";
import WorkerFrameLabel from "../../../worker/workplace/WorkerFrameLabel";
import WorkerAreaLabel from "../../../worker/workplace/WorkerAreaLabel";

export default (
    [
        {
            path: '/worker',
            component: WorkerNavMenu,
            name: '任务接收中心',
            iconCls: 'fa fa-picture-o',//图标样式class
            children: [
                { path: '/workerPublishedTasks', component: PublishedTaskList, name: '查看所有任务' },
                { path: '/workerTasks', component: WorkerTaskList, name: '我的任务' },
            ]
        },
        {
            path: '/worker',
            component: WorkerNavMenu,
            name: '消息',
            iconCls: 'fa fa-comment-o',//图标样式class
            children: [
                { path: '/workerTaskStatus', component: WorkerSubmittedTaskStatus, name: '已提交任务情况' },
                { path: '/workerMessage', component: WorkerMessage, name: '消息' },
            ]
        },
        {
            path: '/worker',
            component: WorkerNavMenu,
            name: '个人中心',
            iconCls: 'fa fa-user-circle',//图标样式class
            children: [
                { path: '/workerInfo', component: WorkerInfo, name: '个人信息' },
                { path: '/workerHistory', component: WorkerHistory, name: '历史记录' },
            ]
        },
        {
            path: '/worker',
            component: WorkerNavMenu,
            name: '工人标注',
            iconCls: 'fa fa-user-circle',//图标样式class
            hidden:true,
            children: [
                { path: '/worker_imgLabel', component: WorkerImageLabel, name: '工人图片标注' },
                { path: '/worker_frameLabel', component: WorkerFrameLabel, name: '工人方框标注' },
                { path: '/worker_areaLabel', component: WorkerAreaLabel, name: '工人区域标注'}
            ]
        }
    ]
);