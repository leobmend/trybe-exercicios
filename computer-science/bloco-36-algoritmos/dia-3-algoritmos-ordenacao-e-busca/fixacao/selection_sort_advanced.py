def search(numbers, start, end):
    min_element = numbers[start]
    min_element_index = start

    # Busca pelo menor elemento
    for i in range(start + 1, end):
        if numbers[i] < min_element:
            min_element = numbers[i]
            min_element_index = i

    # Retorna a posição do menor elemento
    return min_element_index


def selection_sort(numbers):
    n = len(numbers)

    # Início da iteração para ordenar os N-1 elementos
    for index in range(n - 1):
        min_element_index = search(numbers, index, n)
        # Trocando os elementos
        numbers[index], numbers[min_element_index] = numbers[min_element_index], numbers[index]

    return numbers
