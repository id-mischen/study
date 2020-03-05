#!/usr/bin/python
# -*- coding: UTF-8 -*-

# if True:
# 	print("true")
# else:
# 	print("false")

# import sys;
# x = 'runoob';
# sys.stdout.write(x + '\n')

# counter = 1000
# miles = 1000.0
# str = "rainy"
#
# print(str)
# print(str[0])
# print(str[0:])
# print(str * 2)
# print(str + '2')
# List
# name = ['rainy','mischen','strong','lisi','wang']
# print(name)
# print(name[0:4])
# print(name + ['3',4])

# dict = {}
# dict['name'] = 'rainy'
# dict[2] = 'this is Number'
# print(dict.keys())



# if a is b :
# 	print("a和b有相同标识")
# else:
# 	print("无相同标识")

# a = [1,2,3]
# b = a[:]
# print(b)

# numbers = [1,2,3,4,5,6,7,8]
# even = []
# odd = []
# while len(numbers) > 0 :
# 	number = numbers.pop()
# 	if(number % 2 == 0):
# 		even.append(number)
# 	else:
# 		odd.append(number)
#
# print(even)
# print(odd)
# for letter in 'rainy':
# 	print('当前字母:',letter)

# fruits = ['apple','banana','rain']
# print(range(len(fruits)))


# rows = 4
# i = j = k = 0 #声明变量，i用于控制外层循环（图形行数），j用于控制空格的个数，k用于控制*的个数
# #等腰直角三角形1
# for i in range(0, rows):
#     for k in range(0, rows - i):
#         print(" * ", end='') #注意这里的","，一定不能省略，可以起到不换行的作用
#         k += 1
#     print("\n"),
#     i += 1

# 空心等边三角形
# rows = 5
# for i in range(0, rows + 1):#变量i控制行数
#     for j in range(0, rows - i):#(1,rows-i)
#         print("1", end=""),
#         j += 1
#     for k in range(0, 2 * i - 1):#(1,2*i)
#         if k == 0 or k == 2 * i - 2 or i == rows:
#             if i == rows:
#                 if k % 2 == 0:#因为第一个数是从0开始的，所以要是偶数打印*，奇数打印空格
#                     print("*", end=""),
#                 else:
#                     print("2", end=""), #注意这里的","，一定不能省略，可以起到不换行的作用
#             else:
#                print("*", end=""),
#         else:
#             print("3", end=""),
#         k += 1
#     print("\n")
#     i += 1

# rows = 10
# for i in range(0, rows):
# 	for j in range(0, rows):
# 		if i == 0 or i == rows - 1:
# 			print(" * ", end="")
# 		else:
# 			if j == 0 or j == rows - 1:
# 				print(" * ", end="")
# 			else:
# 				print("   ", end="")
# 		j += 1
# 	print("\n")
# 	i += 1

# import time
# ticks = time.time()
#
# localtime = time.localtime()
# print(ticks)
# print(localtime)
# 定义函数
def show( name ):
	" 显示名字 "
	print("您的名字为:", name)
	return
show('rainy')































