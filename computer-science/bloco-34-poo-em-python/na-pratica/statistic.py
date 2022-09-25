from collections import Counter


class Statistic:
    @classmethod
    def mean(self, *numbers):
        return sum(numbers) / len(numbers)

    @classmethod
    def median(self, *numbers):
        list(numbers).sort()
        index = len(numbers) // 2
        if len(numbers) % 2 == 0:
            return (numbers[index - 1] + numbers[index]) / 2
        return numbers[index]

    @classmethod
    def moda(cls, *numbers):
        number, _ = Counter(numbers).most_common()[0]
        return number


print(Statistic.mean(2, 4))
print(Statistic.median(2, 3, 4))
print(Statistic.moda(3, 3, 3, 5, 2))
