const lengthUnits = ["km", "hm", "dam", "m", "dm", "cm", "mm"];

function lengthConvert(value: number, fromUnit: string, toUnit: string): number {
    const fromIndex = lengthUnits.indexOf(fromUnit); // pegamos o index da unidade base no array
    const toIndex = lengthUnits.indexOf(toUnit); // pegamos o index da unidade para a conversão
    const exponent = (toIndex - fromIndex); // calculamos o expoente a partir da diferença dos index

    return value * Math.pow(10, exponent);
}