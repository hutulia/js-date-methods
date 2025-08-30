import {
    convertFormattedDateToTimeStamp,
    convertTimeStampToFormattedDate, convertTimeZoneOffsetInFormattedDate
} from "@lib/unix-timestamp-converter.js";
import {TimeStampWrapper} from "@lib/TimeStampWrapper.js";
import {DateWrapper} from "@lib/DateWrapper.js";
import {FormattedDateWrapper} from "@lib/FormattedDateWrapper.js";
import {TimeZoneOffsetWrapper} from "@lib/TimeZoneOffsetWrapper.js";
import {FormattedTimeZoneOffsetWrapper} from "@lib/FormattedTimeZoneOffsetWrapper.js";

export default function runTests(){
    console.log(new TimeStampWrapper(0).getDate().getTime()/1000 === 0);
    console.log(new TimeStampWrapper(1753725600).getDate()/1000 === 1753725600);

    console.log(new TimeZoneOffsetWrapper(0).format() === '+00:00');
    console.log(new TimeZoneOffsetWrapper(-0).format() === '+00:00');
    console.log(new TimeZoneOffsetWrapper(1).format() === '-00:01');
    console.log(new TimeZoneOffsetWrapper(-1).format() === '+00:01');
    console.log(new TimeZoneOffsetWrapper(59).format() === '-00:59');
    console.log(new TimeZoneOffsetWrapper(-59).format() === '+00:59');
    console.log(new TimeZoneOffsetWrapper(62).format() === '-01:02');
    console.log(new TimeZoneOffsetWrapper(-62).format() === '+01:02');

    console.log(new FormattedTimeZoneOffsetWrapper('+00:00').getSign() === '+');
    console.log(new FormattedTimeZoneOffsetWrapper('-00:00').getSign() === '-');
    console.log(new FormattedTimeZoneOffsetWrapper('+00:00').getMinutes() === 0);
    console.log(new FormattedTimeZoneOffsetWrapper('-00:00').getMinutes() === 0);
    console.log(new FormattedTimeZoneOffsetWrapper('+00:01').getMinutes() === 1);
    console.log(new FormattedTimeZoneOffsetWrapper('-00:01').getMinutes() === 1);
    console.log(new FormattedTimeZoneOffsetWrapper('+00:59').getMinutes() === 59);
    console.log(new FormattedTimeZoneOffsetWrapper('-00:59').getMinutes() === 59);
    console.log(new FormattedTimeZoneOffsetWrapper('+01:02').getMinutes() === 2);
    console.log(new FormattedTimeZoneOffsetWrapper('-01:02').getMinutes() === 2);
    console.log(new FormattedTimeZoneOffsetWrapper('+00:00').getHours() === 0);
    console.log(new FormattedTimeZoneOffsetWrapper('-00:00').getHours() === 0);
    console.log(new FormattedTimeZoneOffsetWrapper('+00:01').getHours() === 0);
    console.log(new FormattedTimeZoneOffsetWrapper('-00:01').getHours() === 0);
    console.log(new FormattedTimeZoneOffsetWrapper('+00:59').getHours() === 0);
    console.log(new FormattedTimeZoneOffsetWrapper('-00:59').getHours() === 0);
    console.log(new FormattedTimeZoneOffsetWrapper('+01:02').getHours() === 1);
    console.log(new FormattedTimeZoneOffsetWrapper('-01:02').getHours() === 1);
    console.log(new FormattedTimeZoneOffsetWrapper('+00:00').getTimeZoneOffset() === 0);
    console.log(new FormattedTimeZoneOffsetWrapper('-00:00').getTimeZoneOffset() === 0);
    console.log(new FormattedTimeZoneOffsetWrapper('+00:01').getTimeZoneOffset() === -1);
    console.log(new FormattedTimeZoneOffsetWrapper('-00:01').getTimeZoneOffset() === 1);
    console.log(new FormattedTimeZoneOffsetWrapper('+00:59').getTimeZoneOffset() === -59);
    console.log(new FormattedTimeZoneOffsetWrapper('-00:59').getTimeZoneOffset() === 59);
    console.log(new FormattedTimeZoneOffsetWrapper('+01:02').getTimeZoneOffset() === -62);
    console.log(new FormattedTimeZoneOffsetWrapper('-01:02').getTimeZoneOffset() === 62);

    console.log(new FormattedDateWrapper('2025-07-28T18:00:00+00:00').getFormattedTimeZoneOffset()==='+00:00');
    console.log(new FormattedDateWrapper('2025-07-28T18:00:00-00:00').getFormattedTimeZoneOffset()==='-00:00');

    console.log(new DateWrapper(new Date(0)).format() === '1970-01-01T00:00:00+00:00');
    console.log(new DateWrapper(new Date(0)).format('+00:00') === '1970-01-01T00:00:00+00:00');
    console.log(new DateWrapper(new Date(0)).format('-00:00') === '1970-01-01T00:00:00-00:00');
    console.log(new DateWrapper(new Date(1000*1)).format('+00:00') === '1970-01-01T00:00:01+00:00');
    console.log(new DateWrapper(new Date(1000*2)).format('+00:00') === '1970-01-01T00:00:02+00:00');
    console.log(new DateWrapper(new Date(1000*(1+2*60+3*60*60))).format('+00:00') === '1970-01-01T03:02:01+00:00');
    console.log(new DateWrapper(new Date(0)).format('+00:01') === '1970-01-01T00:01:00+00:01');
    console.log(new DateWrapper(new Date(0)).format('+12:34') === '1970-01-01T12:34:00+12:34');
    console.log(new DateWrapper(new Date(-1000)).format('+00:00') === '1969-12-31T23:59:59+00:00');
    console.log(new DateWrapper(new Date(-2000)).format('+00:00') === '1969-12-31T23:59:58+00:00');
    console.log(new DateWrapper(new Date(-60000)).format('+00:00') === '1969-12-31T23:59:00+00:00');
    console.log(new DateWrapper(new Date(-61000)).format('+00:00') === '1969-12-31T23:58:59+00:00');
    console.log(new DateWrapper(new Date(0)).format('-00:01') === '1969-12-31T23:59:00-00:01');
    console.log(new DateWrapper(new Date(0)).format('-00:02') === '1969-12-31T23:58:00-00:02');
    console.log(new DateWrapper(new Date(0)).format('-01:02') === '1969-12-31T22:58:00-01:02');

    console.log(convertTimeStampToFormattedDate(0)==='1970-01-01T00:00:00+00:00');
    console.log(convertTimeStampToFormattedDate(0,'+00:00')==='1970-01-01T00:00:00+00:00');
    console.log(convertTimeStampToFormattedDate(0,'-00:00')==='1970-01-01T00:00:00-00:00');
    console.log(convertTimeStampToFormattedDate(1)==='1970-01-01T00:00:01+00:00');
    console.log(convertTimeStampToFormattedDate(0,'+12:34')==='1970-01-01T12:34:00+12:34');
    console.log(convertTimeStampToFormattedDate(1,'+12:34')==='1970-01-01T12:34:01+12:34');
    console.log(convertTimeStampToFormattedDate(-1)==='1969-12-31T23:59:59+00:00');
    console.log(convertTimeStampToFormattedDate(-1,'-00:00')==='1969-12-31T23:59:59-00:00');
    console.log(convertFormattedDateToTimeStamp('1970-01-01T03:00:00+03:00')===0);
    console.log(convertFormattedDateToTimeStamp('1970-01-01T00:00:00+00:00')===0);
    console.log(convertFormattedDateToTimeStamp('1970-01-01T00:01:00+00:01')===0);
    console.log(convertFormattedDateToTimeStamp('1970-01-01T01:02:00+01:02')===0);
    console.log(convertFormattedDateToTimeStamp('1970-01-01T00:00:01+00:00')===1);
    console.log(convertFormattedDateToTimeStamp('1970-01-01T01:00:01+01:00')===1);
    console.log(convertFormattedDateToTimeStamp('1970-01-01T01:01:01+01:01')===1);
    console.log(convertFormattedDateToTimeStamp('1969-12-31T23:59:59-00:00')===-1);
    console.log(convertFormattedDateToTimeStamp('1969-12-31T23:59:58-00:00')===-2);
    console.log(convertFormattedDateToTimeStamp('1969-12-31T22:58:58-00:00')===-(60*60+62));
    console.log(convertFormattedDateToTimeStamp('1969-12-31T22:58:00-01:02')===0);

    console.log(convertTimeZoneOffsetInFormattedDate('1970-01-01T00:00:00+00:00','-00:00')==='1970-01-01T00:00:00-00:00');
    console.log(convertTimeZoneOffsetInFormattedDate('1970-01-01T00:00:00+00:00','+00:01')==='1970-01-01T00:01:00+00:01');
    console.log(convertTimeZoneOffsetInFormattedDate('1970-01-01T00:00:00+00:00','+01:00')==='1970-01-01T01:00:00+01:00');
    console.log(convertTimeZoneOffsetInFormattedDate('1970-01-01T00:00:00+00:00','+01:01')==='1970-01-01T01:01:00+01:01');
    console.log(convertTimeZoneOffsetInFormattedDate('1970-01-01T00:00:00+00:00','+03:00')==='1970-01-01T03:00:00+03:00');
    console.log(convertTimeZoneOffsetInFormattedDate('1970-01-01T00:00:00+00:00','+24:00')==='1970-01-02T00:00:00+24:00');
    console.log(convertTimeZoneOffsetInFormattedDate('1970-01-01T00:00:00+00:00','+24:61')==='1970-01-02T01:01:00+24:61');
    console.log(convertTimeZoneOffsetInFormattedDate('1970-01-01T00:00:00+00:00','-00:01')==='1969-12-31T23:59:00-00:01');
    console.log(convertTimeZoneOffsetInFormattedDate('1970-01-01T00:00:00+00:00','-01:00')==='1969-12-31T23:00:00-01:00');
    console.log(convertTimeZoneOffsetInFormattedDate('1970-01-01T00:00:00+00:00','-01:01')==='1969-12-31T22:59:00-01:01');
    console.log(convertTimeZoneOffsetInFormattedDate('1970-01-01T00:00:00+00:00','-03:00')==='1969-12-31T21:00:00-03:00');
    console.log(convertTimeZoneOffsetInFormattedDate('1970-01-01T00:00:00+00:00','-24:61')==='1969-12-30T22:59:00-24:61');
}