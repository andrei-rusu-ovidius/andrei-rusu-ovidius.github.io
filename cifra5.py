<<<<<<< HEAD
# -*- coding: utf-8 -*-
"""
Created on Wed Nov 27 22:42:33 2019

@author: Andrei Rusu
"""

import random

# Является ли данное число 5
def proceed(number):
    # Рассчитываем взвешенную сумму
    net = 0
    for i in range(15):
        net += int(number[i])*weights[i]
 
    # Превышен ли порог? (Да - сеть думает, что это 5. Нет - сеть думает, 
    # что это другая цифра)
    return net >= bias

# Уменьшение значений весов, если сеть ошиблась и выдала 1
def decrease(number):
    for i in range(15):
        # Возбужденный ли вход
        if int(number[i]) == 1:
            # Уменьшаем связанный с ним вес на единицу
            weights[i] -= 1

# Увеличение значений весов, если сеть ошиблась и выдала 0
def increase(number):
    for i in range(15):
        # Возбужденный ли вход
        if int(number[i]) == 1:
            # Увеличиваем связанный с ним вес на единицу
            weights[i] += 1



# Цифры (Обучающая выборка)
num0 = list('111101101101111')
num1 = list('001001001001001')
num2 = list('111001111100111')
num3 = list('111001111001111')
num4 = list('101101111001001')
num5 = list('111100111001111')
num6 = list('111100111101111')
num7 = list('111001001001001')
num8 = list('111101111101111')
num9 = list('111101111001111')
    
# Список всех вышеуказанных цифр
nums = [num0, num1, num2, num3, num4, num5, num6, num7, num8, num9]

# Виды цифры 5 (Тестовая выборка)
num51 = list('111100111000111')
num52 = list('111100010001111')
num53 = list('111100011001111')
num54 = list('110100111001111')
num55 = list('110100111001011')
num56 = list('111100101001111')

# Инициализация весов сети
weights = [0 for i in range(15)]

# sau asa 

epochs = 999999
weights = []
for i in range(15):
    weights.append(0)
    
# Порог функции активации
bias = 7

# Тренировка сети
for i in range(epochs):
    # Генерируем случайное число от 0 до 9
    option = random.randint(0, 9)
 
    # Если получилось НЕ число 5
    if option != 5:
        # Если сеть выдала True/Да/1, то наказываем ее
        if proceed(nums[option]):
            decrease(nums[option])
    # Если получилось число 5
    else:
        # Если сеть выдала False/Нет/0, то показываем, что эта цифра - то, что нам нужно
        if not proceed(num5):
            increase(num5)

# Вывод значений весов
print(weights)
 
# Прогон по обучающей выборке
print("0 is 5? ", proceed(num0))
print("1 is 5? ", proceed(num1))
print("2 is 5? ", proceed(num2))
print("3 is 5? ", proceed(num3))
print("4 is 5? ", proceed(num4))
print("6 is 5? ", proceed(num6))
print("7 is 5? ", proceed(num7))
print("8 is 5? ", proceed(num8))
print("9 is 5? ", proceed(num9), '\n')
 
# Прогон по тестовой выборке
print("Recognized 5? ", proceed(num5))
print("Recognized 5 - 1? ", proceed(num51))
print("Recognized 5 - 2? ", proceed(num52))
print("Recognized 5 - 3? ", proceed(num53))
print("Recognized 5 - 4? ", proceed(num54))
print("Recognized 5 - 5? ", proceed(num55))
print("Recognized 5 - 6? ", proceed(num56))


=======
# -*- coding: utf-8 -*-
"""
Created on Wed Nov 27 22:42:33 2019

@author: Andrei Rusu
"""

import random

# Является ли данное число 5
def proceed(number):
    # Рассчитываем взвешенную сумму
    net = 0
    for i in range(15):
        net += int(number[i])*weights[i]
 
    # Превышен ли порог? (Да - сеть думает, что это 5. Нет - сеть думает, 
    # что это другая цифра)
    return net >= bias

# Уменьшение значений весов, если сеть ошиблась и выдала 1
def decrease(number):
    for i in range(15):
        # Возбужденный ли вход
        if int(number[i]) == 1:
            # Уменьшаем связанный с ним вес на единицу
            weights[i] -= 1

# Увеличение значений весов, если сеть ошиблась и выдала 0
def increase(number):
    for i in range(15):
        # Возбужденный ли вход
        if int(number[i]) == 1:
            # Увеличиваем связанный с ним вес на единицу
            weights[i] += 1



# Цифры (Обучающая выборка)
num0 = list('111101101101111')
num1 = list('001001001001001')
num2 = list('111001111100111')
num3 = list('111001111001111')
num4 = list('101101111001001')
num5 = list('111100111001111')
num6 = list('111100111101111')
num7 = list('111001001001001')
num8 = list('111101111101111')
num9 = list('111101111001111')
    
# Список всех вышеуказанных цифр
nums = [num0, num1, num2, num3, num4, num5, num6, num7, num8, num9]

# Виды цифры 5 (Тестовая выборка)
num51 = list('111100111000111')
num52 = list('111100010001111')
num53 = list('111100011001111')
num54 = list('110100111001111')
num55 = list('110100111001011')
num56 = list('111100101001111')

# Инициализация весов сети
weights = [0 for i in range(15)]

# sau asa 

epochs = 999999
weights = []
for i in range(15):
    weights.append(0)
    
# Порог функции активации
bias = 7

# Тренировка сети
for i in range(epochs):
    # Генерируем случайное число от 0 до 9
    option = random.randint(0, 9)
 
    # Если получилось НЕ число 5
    if option != 5:
        # Если сеть выдала True/Да/1, то наказываем ее
        if proceed(nums[option]):
            decrease(nums[option])
    # Если получилось число 5
    else:
        # Если сеть выдала False/Нет/0, то показываем, что эта цифра - то, что нам нужно
        if not proceed(num5):
            increase(num5)

# Вывод значений весов
print(weights)
 
# Прогон по обучающей выборке
print("0 is 5? ", proceed(num0))
print("1 is 5? ", proceed(num1))
print("2 is 5? ", proceed(num2))
print("3 is 5? ", proceed(num3))
print("4 is 5? ", proceed(num4))
print("6 is 5? ", proceed(num6))
print("7 is 5? ", proceed(num7))
print("8 is 5? ", proceed(num8))
print("9 is 5? ", proceed(num9), '\n')
 
# Прогон по тестовой выборке
print("Recognized 5? ", proceed(num5))
print("Recognized 5 - 1? ", proceed(num51))
print("Recognized 5 - 2? ", proceed(num52))
print("Recognized 5 - 3? ", proceed(num53))
print("Recognized 5 - 4? ", proceed(num54))
print("Recognized 5 - 5? ", proceed(num55))
print("Recognized 5 - 6? ", proceed(num56))


>>>>>>> 11b8f56b14846a8386cef39d6d5630541c787d7e
