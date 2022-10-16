# Os arrays têm sempre o mesmo tamanho
def multiply_arrays(array1, array2, array3):
    result = []
    for number1 in array1:
        for number2 in array2:
            for number3 in array3:
                result.append(number1 + number2 + number3)

    return result


# onde n será o número total de elementos dentro do array
n = 101
meu_array = list(range(1, n))
print(meu_array)

print(len(multiply_arrays(meu_array, meu_array, meu_array)))
