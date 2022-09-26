list_ex = [1, 2, 3]

list_iterator_ex = iter(list_ex)

print(type(list_iterator_ex))

print(next(list_iterator_ex))
print(next(list_iterator_ex))
print(next(list_iterator_ex))

try:
    next(list_iterator_ex)
except StopIteration:
    print("StopIteration foi levantado")
