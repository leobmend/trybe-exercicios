const massUnits = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];

function massConvert(value: number, fromUnit: string, toUnit: string): number {
    const fromIndex = massUnits.indexOf(fromUnit); // pegamos o index da unidade base no array
    const toIndex = massUnits.indexOf(toUnit); // pegamos o index da unidade para a conversão
    const exponent = (toIndex - fromIndex); // calculamos o expoente a partir da diferença dos index

    return value * Math.pow(10, exponent);
}