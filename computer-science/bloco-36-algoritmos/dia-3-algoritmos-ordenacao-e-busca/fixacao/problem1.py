def can_make_arithmetic_progression(array):
    if len(array) <= 2:
        return False

    array.sort()
    common_difference = array[1] - array[0]
    for index in range(1, len(array)):
        if array[index] - array[index - 1] != common_difference:
            return False
    return True

if __name__ == "__main__":
    test1 = [1, 3, 5]  # saída: True
    test2 = [3, 6, 1]  # [1, 3, 6] saída: False
    test3 = [7, 43, 19, 25, 1, 31, 37, 13]  # saída: True
    test4 = [7, 43, 19, 25, 1, 32, 37, 13]  # saída: False
    test5 = [1, 2]  # saída: False
    test6 = []  # saída: False
    print(can_make_arithmetic_progression(test1))
    print(can_make_arithmetic_progression(test2))
    print(can_make_arithmetic_progression(test3))
    print(can_make_arithmetic_progression(test4))
    print(can_make_arithmetic_progression(test5))
    print(can_make_arithmetic_progression(test6))
