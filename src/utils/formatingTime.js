function formatingTime() {
    const date = new Date();
    const hh = date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`;
    const mm = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
    return `${hh} ${mm}`;
}
export default formatingTime;