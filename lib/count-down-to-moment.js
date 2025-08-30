import {oneMinute, oneHour, oneDay} from "@lib/seconds-in.js";
import {isValidDateFormattedString} from "@lib/unix-timestamp-converter.js";
export function showMuchDaysHoursMinutesSeconds(totalSeconds){
    const days = parseInt(totalSeconds/oneDay);
    const hours = parseInt((totalSeconds % oneDay) / oneHour);
    const minutes = parseInt((totalSeconds % oneHour) / oneMinute);
    const seconds = totalSeconds % oneMinute;
    return {days,hours,minutes,seconds};
}
export function getTheMomentDateFormattedByUrl(){
    const url = new URL(window.location.href);
    const momentParam = 'datetime';
    if(!url.searchParams.has(momentParam)) return null;
    let value = url.searchParams.get(momentParam).replace(' ','+');
    if(!isValidDateFormattedString(value)) return null;
    return value
}