def even_numbers(n):
    if n < 2:
        return 0

    if n % 2 == 0:
        return 1 + even_numbers(n - 1)

    return even_numbers(n-1)


print(even_numbers(10))


def even_numbers_iteration(n):
    counter = 0
    for n in range(1, n + 1):
        if n % 2 == 0:
            counter += 1

    return counter


print(even_numbers_iteration(10))
