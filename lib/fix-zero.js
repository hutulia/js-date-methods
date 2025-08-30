export function fixZero(digit) {
    const negative = digit < 0;
    let d = Math.abs(digit);
    if(d<10) d = `0${d}`;
    if(negative) d = '-'+d;
    return d;
}