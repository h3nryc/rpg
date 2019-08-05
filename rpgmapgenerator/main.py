
with open("map.txt") as f:
	map = []
	lines = f.read().split("\n")
	for i in range(len(lines[0])):
		map.append([])
	for y in range(len(lines)-1):
		for x in range(len(lines[0])):
			tile = lines[x][y]
			square = str()
			if tile == "o":
		 		square += '{type: \'ocean\', canStep: false}'
		 	elif tile == "d":
		 		square += '{type: \'dirt\'}'
		 	elif tile == "g":
		 		square += '{type: \'grass\'}'
		 	elif tile == "x":
		 		square += '{type: \'goal\'}'
		 	map[x].append(square)
	print(str(map).replace('"', '').replace("],","],\n"))


# print len(lines)
# fname = input("Enter file name: ")
# num_lines = 0
# with open(fname, 'r') as f:
#     for line in f:
#         num_lines += 1
# print("Number of lines:")
# print(num_lines)