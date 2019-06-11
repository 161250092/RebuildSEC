export let taskTypes = [
    {
        label: '整体标注',
        value: 'imgLabel',
    },
    {
        label: '方框标注',
        value: 'frameLabel'
    },
    {
        label: '区域标注',
        value: 'areaLabel'
    }
];

export let taskTypeValues = [];
taskTypes.forEach((item) => {
    taskTypeValues.push(item.value);
});
