export class FormattedTimeZoneOffsetWrapper {
    formattedTimeZoneOffset;

    constructor(formattedTimeZoneOffset) {
        this.formattedTimeZoneOffset = formattedTimeZoneOffset;
    }

    getSign() {
        return this.formattedTimeZoneOffset[0];
    }

    getHours() {
        return parseInt(this.formattedTimeZoneOffset.match(/\d\d:/)[0].replace(':', ''));
    }

    getMinutes() {
        return parseInt(this.formattedTimeZoneOffset.match(/:\d\d/)[0].replace(':', ''));
    }

    getTimeZoneOffset() {
        return (this.getSign() === '+' ? -1 : 1) * (this.getHours() * 60 + this.getMinutes());
    }
}