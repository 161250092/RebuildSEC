export function unixTimeToTime(unixTimeInMillisecond) {
    return new Date(unixTimeInMillisecond).toLocaleTimeString('zh-CH', {
        hour12: false,
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });
}

export function unixTimeToDate(unixTimeInMillisecond) {
    return new Date(unixTimeInMillisecond).toLocaleDateString('zh-CH', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    });
}

import {taskTypes} from './taskTypes'
export function formatTaskTypeLabel(taskTypeValue) {
    let typeStr = '错误类型';
    taskTypes.forEach((item) => {
        if (item.value === taskTypeValue) {
            typeStr = item.label;
        }
    });
    return typeStr;
}

import {taskStatuses} from './taskStatus'
export function formatTaskStatusLabel(taskStatusValue) {
    let statusStr = '无此状态';
    taskStatuses.forEach((item) => {
        if(item.value === taskStatusValue) {
            statusStr = item.label;
        }
    });
    return statusStr;
}
