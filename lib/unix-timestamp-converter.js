import {DateWrapper} from "@lib/DateWrapper.js";
import {FormattedDateWrapper} from "@lib/FormattedDateWrapper.js";

export function convertTimeStampToFormattedDate(timestamp = 0, formattedTimeZoneOffset = '+00:00'){
    const date = (new Date());
    date.setTime(timestamp*1000);
    const dateWrapper = new DateWrapper(date);
    return dateWrapper.format(formattedTimeZoneOffset);
}
export function convertFormattedDateToTimeStamp(formattedDate){
    return (new Date(formattedDate)).getTime()/1000;
}
export function convertTimeZoneOffsetInFormattedDate(formattedDate, formattedTimeZoneOffset='+00:00'){
    const timeStamp = (new Date(formattedDate)).getTime()/1000;
    return convertTimeStampToFormattedDate(timeStamp,formattedTimeZoneOffset);
}
export function isValidTimeStampString(timeStampString){
    return /^\-{0,}\d+$/.test(timeStampString);
}
export function isValidDateFormattedString(dateFormattedString){
    return /^\d{1,4}\-\d{2}\-\d{2}T\d{2}:\d{2}:\d{2}[\+\-]\d{2}:\d{2}$/.test(dateFormattedString);
}
export function getFormattedTimeZoneOffsetFromDateFormatted(formattedDate){
    return new FormattedDateWrapper(formattedDate).getFormattedTimeZoneOffset();
}