import random
import math


# A estrutura deve estar ordenada para que a busca binária funcione
def binary_search(numbers, target):
    # definir os índices
    start = 0
    end = len(numbers) - 1

    # os índices podem ser no máximo iguais, o início
    # não pode ultrapassar o fim
    while start <= end:
        # encontro o meio
        mid = (start + end) // 2

        # se o elemento do meio for o alvo, devolve a posição do meio
        if numbers[mid] == target:
            return mid

        # se o elemento for menor, atualiza o índice do fim
        if target < numbers[mid]:
            end = mid - 1
        # caso contrário, atualiza o índice do inicio
        else:
            start = mid + 1

    # Não encontrou? Retorna -1
    return -1


n = 1000000
numbers = list(range(1, n))

target = random.choice(numbers)

print(math.log(n / 10, 2))
print(math.log(n, 2))
print(math.log(n * 10, 2))

result = binary_search(numbers, target)
print(f"Elemento encontrado na posição: {result}")
