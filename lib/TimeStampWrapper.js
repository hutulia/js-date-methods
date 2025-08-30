export class TimeStampWrapper {
    timeStamp;

    constructor(timeStamp) {
        this.timeStamp = timeStamp;
    }

    getDate() {
        const d = new Date();
        d.setTime(this.timeStamp * 1000);
        return d;
    }
}