def printAsterisks(number):
    asterisks = ''

    for i in range(number):
        for i in range(number):
            asterisks += '*'

        asterisks += '\n'

    return asterisks


print(printAsterisks(10))
