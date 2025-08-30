import {fixZero} from "@lib/fix-zero.js";

export class TimeZoneOffsetWrapper {
    timeZoneOffset;

    constructor(timeZoneOffset) {
        this.timeZoneOffset = timeZoneOffset;
    }

    format() {
        let sign = this.getFormattedSign();
        const hours = this.getFormattedHours();
        const minutes = this.getFormattedMinutes();
        return `${sign}${hours}:${minutes}`;
    }

    getFormattedSign() {
        if (this.timeZoneOffset <= 0) return '+';
        return '-';
    }

    getFormattedHours() {
        const hoursFloat = Math.abs(this.timeZoneOffset / 60);
        const hoursInt = parseInt(hoursFloat);
        return fixZero(hoursInt);
    }

    getFormattedMinutes() {
        const minutesInt = Math.abs(this.timeZoneOffset % 60);
        return fixZero(minutesInt);
    }
}