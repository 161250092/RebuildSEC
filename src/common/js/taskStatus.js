export let taskStatuses = [
    {
        value: 'publishing',
        label: '发布中',
        tagTypeName: '',
    },
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
taskStatusValues.forEach((item) => {
    taskStatusValues.push(item.value);
});