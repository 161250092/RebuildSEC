export let taskTypes = [
    {
        label: '类型1',
        value: 'type1',
    },
    {
        label: '类型2',
        value: 'type2'
    },
    {
        label: '类型3',
        value: 'type3'
    }
];

export let taskTypeValues = [];
taskTypes.forEach((item) => {
    taskTypeValues.push(item.value);
});
