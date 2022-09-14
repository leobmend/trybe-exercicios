def mean(numbers):
    sum = 0
    for number in numbers:
        sum += number

    length = len(numbers)

    return sum / length


print(mean([2, 4]))
