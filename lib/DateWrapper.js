import {FormattedTimeZoneOffsetWrapper} from "@lib/FormattedTimeZoneOffsetWrapper.js";
import {fixZero} from "@lib/fix-zero.js";

export class DateWrapper {
    jsDate;

    constructor(jsDate) {
        this.jsDate = jsDate;
    }

    format(desiredFormattedTimeZoneOffset = '+00:00') {
        const timeZoneOffset = this.jsDate.getTimezoneOffset();
        const timeStamp = this.jsDate.getTime() / 1000;
        const desiredFormattedTimeZoneOffsetWrapper = new FormattedTimeZoneOffsetWrapper(desiredFormattedTimeZoneOffset);
        const desiredTimeZoneOffset = desiredFormattedTimeZoneOffsetWrapper.getTimeZoneOffset();
        const desiredTimeStamp = timeStamp + timeZoneOffset * 60 - desiredTimeZoneOffset * 60;
        const desiredDate = new Date();
        desiredDate.setTime(desiredTimeStamp * 1000);
        //console.log({desiredFormattedTimeZoneOffset,desiredFormattedTimeZoneOffsetWrapper,desiredTimeZoneOffset,timeZoneOffset,timeStamp,desiredTimeStamp,desiredDate,jsDate:this.jsDate});
        const year = '' + desiredDate.getFullYear();
        const month = '' + fixZero(desiredDate.getMonth() + 1);
        const day = '' + fixZero(desiredDate.getDate());
        const hours = '' + fixZero(desiredDate.getHours());
        const minutes = '' + fixZero(desiredDate.getMinutes());
        const seconds = '' + fixZero(desiredDate.getSeconds());
        return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}${desiredFormattedTimeZoneOffset}`;
    }
}