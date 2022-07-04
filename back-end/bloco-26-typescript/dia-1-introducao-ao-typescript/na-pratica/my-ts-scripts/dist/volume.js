"use strict";
const volumeUnits = ["km³", "hm³", "dam³", "m³", "dm³", "cm³", "mm³"];
function volumeConvert(value, fromUnit, toUnit) {
    const fromIndex = volumeUnits.indexOf(fromUnit);
    const toIndex = volumeUnits.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);
    return value * Math.pow(1000, exponent);
}
