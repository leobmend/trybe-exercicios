# Implementar um fatorial recursivo

# fat(6) -> 6 * 5 * 4 * 3 * 2 * 1
# fat(5) -> 5 * 4 * 3 * 2 * 1
# fat(4) -> 4 * 3 * 2 * 1
# fat(3) -> 3 * 2 * 1
# fat(2) -> 2 * 1
# fat(1) -> 1
# fat(0) -> 1

def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n-1)

if __name__ == "__main__":
    print(factorial(7))

