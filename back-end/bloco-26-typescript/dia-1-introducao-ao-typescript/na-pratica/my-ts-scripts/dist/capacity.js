"use strict";
const capacityUnits = ["kl", "hl", "dal", "l", "dl", "cl", "ml"];
function capacityConvert(value, fromUnit, toUnit) {
    const fromIndex = capacityUnits.indexOf(fromUnit);
    const toIndex = capacityUnits.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);
    return value * Math.pow(10, exponent);
}
