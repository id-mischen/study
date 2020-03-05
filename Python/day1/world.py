
# def showName( name ):
#     "显示你的名字"
#     name[2] = 'rainy'
#     print("欢迎您的来临，", name)
# # a = 'mischen'
# # showName(a)
# # print(a)
#
# la = [1,2,3]
# showName(la)
# print("函数外的值",la)

# import utils
#
# utils.showUserInfo('mischen',19,'男')

# from  utils  import showUserInfo
# showUserInfo('rainy', 19, '女')

# Money = 2000
# def AddMoney():
#     # 想改正代码就取消以下注释:
#     # global Money
#     Money = Money + 1
#
#
# print(Money)
# AddMoney()
# print(Money)

# import utils
#
# content = dir(utils)
# print(content)

# from package_runoob.runoob1 import runoob1
#
# from package_runoob.runoob2 import runoob2
#
# runoob1()
# runoob2()

# str = input("请输入:")
# print("你输入的内容：", str)

# fo = open('./test/123.txt', "r")
# str = fo.read(11)
# print(str)
# # 查到当前位置
# postion = fo.tell()
# print(postion)
#
# postion = fo.seek(2, 0)
# str = fo.read(11)
# print(str)

# import os
# # os.rename('./test/123.txt', './test/456.txt')
# os.chdir('newdir')
# str = os.getcwd()
# print(str)

# try:
#     fh = open("testfile", "w")
#     fh.write("这是一个测试文件，用于测试异常!!")
# except IOError:
#     print("Error: 没有找到文件或读取文件失败")
# else:
#     print("内容写入文件成功")
#     fh.close()

# try:
#     fh = open("testfile", "r")
#     fh.write("写入文件")
# except IOError:
#     print("error: 没有找到文件或读取文件失败")
# # except:
# #     print("error: 没有找到文件或读取文件失败")
#
# else:
#     print("内容写入成功")
#     fh.close()

# try:
#     fh = open("testfile", "w")
#     fh.write("这是一个测试文件，用于测试异常!!")
# finally:
#     print("Error: 没有找到文件或读取文件失败")

# frist = second = 0
# arr = [1, 2, 3, 4]
# for i in range(len(arr)):
#     frist = arr[i]
#     del arr[i]
#     newArr = arr.copy()
#     for j in range(len(newArr)):
#         second = arr[j]
#         # 修改arr，由于是浅拷贝, newArr的值也会发生变化，所以要开辟新的内存给newArr copy
#         del arr[j]
#         newArrSecond = arr
#         arr = newArr.copy()
#         for k in range(len(newArrSecond)):
#             third = newArrSecond[k]
#             print(frist, second, third)
#     arr = [1, 2, 3, 4]
#     i += 1
# print(arr)

# arr = [1, 2, 3, 4]
# for i in range(len(arr)):
#     newArr = arr[0:i] + arr[i+1:]
#     for j in range(len(newArr)):
#         newArrSecond = newArr[0:j] + newArr[j+1:]
#         for k in range(len(newArrSecond)):
#             print(arr[i], newArr[j], newArrSecond[k])

# for i in range(1, 5):
#     for j in range(1, 5):
#         for k in range(1, 5):
#             if(i != k) and (i != j) and (j != k):
#                 print(i, j, k)

m = input("请输入利润(单位：万): ")
newM = float(m)
if newM <= 10:
    print("您应该发放的奖金为(单位：元)：", newM * 0.1 * 10000)
elif newM < 20:
    bonus = (newM - 10) * 0.075 * 10000 + 10 * 0.1 * 10000
    print("您应该发放的奖金为(单位：元)：", bonus)


























