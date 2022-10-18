# Implementar um contador recursivo

# caso base -> 0
# alterar o estado em direção ao caso base
# função chama a si mesma

def countdown(n):
    if n == 0:
        print(0)
    else:
        print(n)
        countdown(n-1)

if __name__ == "__main__":
    countdown(10)