export class FormattedDateWrapper {
    formattedDate;

    constructor(formattedDate) {
        this.formattedDate = formattedDate;
    }

    getFormattedTimeZoneOffset() {
        return this.formattedDate.slice(-6);
    }
}