# Implementar um somatório recursivo

# sum(0) -> 0
# sum(1) -> 1 + sum(0)
# sum(2) -> 2 + sum(1)
# sum(3) -> 3 + sum(2)
# sum(4) -> 4 + 3 + 2 + 1 + 0
# sum(5) -> 5 + 4 + 3 + 2 + 1 + 0
# sum(6) -> 6 + 5 + 4 + 3 + 2 + 1 + 0

# caso base
# alterar o estado em direção ao caso base
# função que chame a si mesma

def sum_before(n):
    if n == 0:
        return 0
    else:
        return n + sum_before(n-1)

if __name__ == '__main__':
    print(sum_before(6))