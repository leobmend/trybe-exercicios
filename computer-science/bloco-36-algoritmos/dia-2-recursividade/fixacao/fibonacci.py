# Implementar a sequência de Fibonacci recursiva


# 0  1  2  3  4  5
# 0, 1, 1, 2, 3, 5

# casos base -> fibo(0) = 0 e fibo(1) = 1

def fibo(n):
    if n < 2:
        print("ativou")
        return n
    else:
        print("ativou")
        return fibo(n-1) + fibo(n-2)

if __name__ == '__main__':
    print(fibo(6))