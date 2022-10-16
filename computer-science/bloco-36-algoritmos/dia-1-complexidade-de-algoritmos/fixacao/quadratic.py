# Os arrays têm sempre o mesmo tamanho
def multiply_arrays(array1, array2):
    result = []
    for number1 in array1:
        for number2 in array2:
            result.append(number1 + number2)

    return result


# onde n será o número total de elementos dentro do array
n = 10
meu_array = list(range(1, n))

print(multiply_arrays(meu_array, meu_array))
