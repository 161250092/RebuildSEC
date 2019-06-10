export function unixTimeToDate(unixTimeInMillisecond) {
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