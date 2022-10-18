def bigger(numbers):
    print(numbers)
    if len(numbers) == 1:
        return numbers[0]

    if numbers[0] > numbers[1]:
        return bigger([numbers[0]] + numbers[2:])

    return bigger(numbers[1:])


print(bigger([0, 5, 2, 50, 10, 100, 6, 85, 1, 8]))
