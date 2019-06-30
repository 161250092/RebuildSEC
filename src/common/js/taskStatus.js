export let taskStatuses = [
    {
        value: 'verifying',
        label: '审核中',
        tagTypeName: 'primary',
    },
    {
        value: 'accepted',
        label: '已通过',
        tagTypeName: 'success'
    },
    {
        value: 'rejected',
        label: '已拒绝',
        tagTypeName: 'danger',
    }
];

export let taskStatusValues = [];
taskStatuses.forEach((item) => {
    taskStatusValues.push(item.value);
});

export let searchSubmittedTaskStatuses = taskStatuses;