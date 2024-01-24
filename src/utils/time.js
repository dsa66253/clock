const getTime = () => {
    let curTime = new Date();
    // return {
    //     "second": 45/2,
    //     "min": 0,
    //     "hour":0
    // }
    return {
        "second": curTime.getSeconds(),
        "min": curTime.getMinutes(),
        "hour": curTime.getHours() % 12
    }
}
export {getTime}