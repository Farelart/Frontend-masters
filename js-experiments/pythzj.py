my_array = [1, 2, 3, 2, 4, 1, 5, 4, 6, 7, 2, 1]

# Create an empty dictionary to store the counts
number_counts = {}

# Iterate through the array and count the occurrences of each number
for number in my_array:
    if number in number_counts:
        number_counts[number] += 1
    else:
        number_counts[number] = 1

a=0
# Print the counts
for number, count in number_counts.items():
    print(f"{number}: {count}")
    num = int(count/2)
    a += num
    print(a)