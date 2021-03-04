def findSmallest(array):
    minIdx = 0
    for i in range(1, len(array)):
        if array[i] < array[minIdx]:
            minIdx = i
    return minIdx


def selectionSort(arr):
    newArr = []
    for i in range(len(arr)):
        min = findSmallest(arr)
        newArr.append(arr.pop(min))
    return newArr


'''if __name__ == "__main__":'''
print(selectionSort([5, 3, 6, 2, 10]))
