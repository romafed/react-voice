function formatingTime() {
    const date = new Date();
    const hh = date.getHours();
    const mm = date.getMinutes();
    return `${hh} hour ${mm} minutes`;
}
export default formatingTime;