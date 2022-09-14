def getTriangleType(sideA, sideB, sideC):
    if (sideA + sideB <= sideC or
            sideB + sideC <= sideA or
            sideA + sideC <= sideB):
        return "não é triângulo"

    if sideA != sideB != sideC and sideA != sideC:
        return "escaleno"

    if sideA == sideB == sideC:
        return "equilátero"

    return "isósceles"


print(getTriangleType(15, 20, 16))
