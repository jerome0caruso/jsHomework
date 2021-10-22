def count(arr):
	return len(list(filter(lambda x: len(str(x)) % 2 == 0, arr)))

print(count([1, 25, 6767, 345, 6666]))
