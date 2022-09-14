def getBiggerWord(words):
    biggerWord = ''

    for word in words:
        if len(word) > len(biggerWord):
            biggerWord = word

    return biggerWord


print(getBiggerWord(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))
