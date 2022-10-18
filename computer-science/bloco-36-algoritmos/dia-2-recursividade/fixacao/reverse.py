# Implementar uma função que inverte uma lista de maneira recursiva

# [1] -> [1]
# [1,2]->[2,1]
# [1,2,3]->[3,2,1]
# [1,2,3,4] -> [4] + [1,2,3]

def reverse(array):
    if len(array) <= 1:
        return array
    
    return [array[-1]] + reverse(array[:len(array)-1])

if __name__ == '__main__':
    print(reverse([1,2,3,4,5]))