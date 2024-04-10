## 什么是 Python？

Python 是一门流行的编程语言。它由 Guido van Rossum 创建，于 1991 年发布。

它用于：

- Web 开发（服务器端）
- 软件开发
- 数学
- 系统脚本

## Python 可以做什么？

- 可以在服务器上使用 Python 来创建 Web 应用程序。
- Python 可以与软件一起使用来创建工作流。
- Python 可以连接到数据库系统。它还可以读取和修改文件。
- Python 可用于处理大数据并执行复杂的数学运算。
- Python 可用于快速原型设计，也可用于生产就绪的软件开发。

## 为何选择 Python？

- Python 适用于不同的平台（Windows、Mac、Linux、Raspberry Pi 等）。
- Python 有一种类似于英语的简单语法。
- Python 的语法允许开发人员用比其他编程语言更少的代码行编写程序。
- Python 在解释器系统上运行，这意味着代码可以在编写后立即执行。这也意味着原型设计可以非常快。
- Python 可以以程序方式、面向对象的方式或功能方式来处理。

## 请您知晓

Python 的最新主要版本是 Python 3，我们将在本教程中使用它。但是，Python 2 虽然没有更新安全更新以外的任何东西，但仍然非常受欢迎。

在本教程中，我们将在在文本编辑器中编写 Python。您也可以在集成开发环境中编写 Python，例如 Thonny、Pycharm、Netbeans 或 Eclipse，这一点当您在管理大量 Python 文件时特别有用。

## Python 语法与其他编程语言比较

- Python 是为可读性设计的，与英语有一些相似之处，并受到数学的影响。
- Python 使用新行来完成命令，而不像通常使用分号或括号的其他编程语言。
- Python 依赖缩进，使用空格来定义范围；例如循环、函数和类的范围。其他编程语言通常使用花括号来实现此目的。



## Python 快速入门

Python 是一门解释型编程语言，这意味着作为开发人员，您可以在文本编辑器中编写 Python（.py）文件，然后将这些文件放入 python 解释器中执行。

在命令行上运行 python 文件的方式如下：

```
C:\Users\Your Name>python helloworld.py
```

其中 “helloworld.py” 是 python 的文件名。

让我们编写第一个 Python 文件，名为 helloworld.py，它可以在任何文本编辑器中完成。

### helloworld.py

```python
print("Hello, World!")
```

## 执行 Python 语法

正如我们在上一节中学习到的，可以直接在命令行中编写执行 Python 的语法：

```
>>> print("Hello, World!")
Hello, World!
```

或者通过在服务器上创建 python 文件，使用 .py 文件扩展名，并在命令行中运行它：

```
C:\Users\Your Name>python myfile.py
```

## Python 缩进

缩进指的是代码行开头的空格。

在其他编程语言中，代码缩进仅出于可读性的考虑，而 Python 中的缩进非常重要。

Python 使用缩进来指示代码块。

### 实例

```python
if 5 > 2:
  print("Five is greater than two!")
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_syntax_indentation_1)

如果省略缩进，Python 会出错：

### 实例

语法错误：

```python
if 5 > 2:
print("Five is greater than two!")
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=demo_python_syntax_indentation_1_error)

空格数取决于程序员，但至少需要一个。

### 实例

```python
if 5 > 2:
 print("Five is greater than two!")  
if 5 > 2:
        print("Five is greater than two!") 
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_syntax_indentation_2)

您必须在同一代码块中使用相同数量的空格，否则 Python 会出错：

### 实例

语法错误：

```python
if 5 > 2:
 print("Five is greater than two!") 
        print("Five is greater than two!")
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=demo_python_syntax_indentation_2_error)

## Python 变量

在 Python 中，变量是在为其赋值时创建的：

### 实例

Python 中的变量：

```python
x = 5
y = "Hello, World!"
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_syntax_variables)

Python 没有声明变量的命令。

您将在 [Python 变量](https://www.w3school.com.cn/python/python_variables.asp) 章节中学习有关变量的更多知识。

## 注释

Python 拥有对文档内代码进行注释的功能。

注释以 ＃ 开头，Python 将其余部分作为注释呈现：

### 实例

Python 中的注释：

```python
#This is a comment.
print("Hello, World!")
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_syntax_comment)

# Python 注释

- [Python 语法](https://www.w3school.com.cn/python/python_syntax.asp)
- [Python 变量](https://www.w3school.com.cn/python/python_variables.asp)

**注释可用于解释 Python 代码。**

**注释可用于提高代码的可读性。**

**在测试代码时，可以使用注释来阻止执行。**

## 创建注释

注释以 `＃` 开头，Python 将忽略它们：

### 实例

```python
#This is a comment
print("Hello, World!")
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_comment_1)

注释可以放在一行的末尾，Python 将忽略该行的其余部分：

### 实例

```python
print("Hello, World!") #This is a comment
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_comment_2)

注释不必是解释代码的文本，它也可以用来阻止 Python 执行代码：

### 实例

```python
#print("Hello, World!")
print("Cheers, Mate!")
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_comment_3)

## 多行注释

Python 实际上没有多行注释的语法。

要添加多行注释，您可以为每行插入一个 `＃`：

### 实例

```python
#This is a comment
#written in
#more than just one line
print("Hello, World!")
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_comment_4)

或者，以不完全符合预期的方式，您可以使用多行字符串。

由于 Python 将忽略未分配给变量的字符串文字，因此您可以在代码中添加多行字符串（三引号），并在其中添加注释：

### 实例

```python
"""
This is a comment
written in 
more than just one line
"""
print("Hello, World!")
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_comment_5)

只要字符串未分配给变量，Python 就会读取代码，然后忽略它，这样您就已经完成了多行注释。

# Python 变量

- [Python 注释](https://www.w3school.com.cn/python/python_comments.asp)
- [Python 数据类型](https://www.w3school.com.cn/python/python_datatypes.asp)

## 创建变量

变量是存放数据值的容器。

与其他编程语言不同，Python 没有声明变量的命令。

首次为其赋值时，才会创建变量。

### 实例

```python
x = 10
y = "Bill"
print(x)
print(y)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_variables_1)

变量不需要使用任何特定类型声明，甚至可以在设置后更改其类型。

### 实例

```python
x = 5 # x is of type int
x = "Steve" # x is now of type str
print(x)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_variables_2)

字符串变量可以使用单引号或双引号进行声明：

### 实例

```python
x = "Bill"
# is the same as
x = 'Bill'
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_variables_3)

## 变量名称

变量可以使用短名称（如 x 和 y）或更具描述性的名称（age、carname、total_volume）。

Python 变量命名规则：

- 变量名必须以字母或下划线字符开头
- 变量名称不能以数字开头
- 变量名只能包含字母数字字符和下划线（A-z、0-9 和 _）
- 变量名称区分大小写（age、Age 和 AGE 是三个不同的变量）

请记住，变量名称区分大小写

## 向多个变量赋值

Python 允许您在一行中为多个变量赋值：

### 实例

```python
x, y, z = "Orange", "Banana", "Cherry"
print(x)
print(y)
print(z)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_variables_4)

您可以在一行中为多个变量分配相同的值：

### 实例

```python
x = y = z = "Orange"
print(x)
print(y)
print(z)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_variables_5)

## 输出变量

Python 的 `print` 语句通常用于输出变量。

如需结合文本和变量，Python 使用 `+` 字符：

### 实例

```python
x = "awesome"
print("Python is " + x)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_variables_6)

您还可以使用 + 字符将变量与另一个变量相加：

### 实例

```python
x = "Python is "
y = "awesome"
z =  x + y
print(z)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_variables_7)

对于数字，`+` 字符用作数学运算符：

### 实例

```python
x = 5
y = 10
print(x + y)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_variables_8)

如果您尝试组合字符串和数字，Python 会给出错误：

### 实例

```python
x = 10
y = "Bill"
print(x + y)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=demo_python_variables_error)

## 全局变量

在函数外部创建的变量（如上述所有实例所示）称为全局变量。

全局变量可以被函数内部和外部的每个人使用。

### 实例

在函数外部创建变量，并在函数内部使用它：

```python
x = "awesome"

def myfunc():
  print("Python is " + x)

myfunc()
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_variables_global_1)

如果在函数内部创建具有相同名称的变量，则该变量将是局部变量，并且只能在函数内部使用。具有相同名称的全局变量将保留原样，并拥有原始值。

### 实例

在函数内部创建一个与全局变量同名的变量：

```python
x = "awesome"

def myfunc():
  x = "fantastic"
  print("Python is " + x)

myfunc()

print("Python is " + x)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_variables_global_2)

## global 关键字

通常，在函数内部创建变量时，该变量是局部变量，只能在该函数内部使用。

要在函数内部创建全局变量，您可以使用 global 关键字。

### 实例

如果您用了 global 关键字，则该变量属于全局范围：

```python
def myfunc():
  global x
  x = "fantastic"

myfunc()

print("Python is " + x)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_variables_global_3)

另外，如果要在函数内部更改全局变量，请使用 global 关键字。

### 实例

要在函数内部更改全局变量的值，请使用 global 关键字引用该变量：

```python
x = "awesome"

def myfunc():
  global x
  x = "fantastic"

myfunc()

print("Python is " + x)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_variables_global_4)

# Python 数据类型

- [Python 变量](https://www.w3school.com.cn/python/python_variables.asp)
- [Python 数字](https://www.w3school.com.cn/python/python_numbers.asp)

## 内置数据类型

在编程中，数据类型是一个重要的概念。

变量可以存储不同类型的数据，并且不同类型可以执行不同的操作。

在这些类别中，Python 默认拥有以下内置数据类型：

| 文本类型：   | `str`                              |
| ------------ | ---------------------------------- |
| 数值类型：   | `int`, `float`, `complex`          |
| 序列类型：   | `list`, `tuple`, `range`           |
| 映射类型：   | `dict`                             |
| 集合类型：   | `set`, `frozenset`                 |
| 布尔类型：   | `bool`                             |
| 二进制类型： | `bytes`, `bytearray`, `memoryview` |

## 获取数据类型

您可以使用 type() 函数获取任何对象的数据类型：

### 实例

打印变量 x 的数据类型：

```python
x = 10
print(type(x))
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_type)

## 设置数据类型

在 Python 中，当您为变量赋值时，会设置数据类型：

| 示例                                         | 数据类型   | 试一试                                                                   |
| :------------------------------------------- | :--------- | :----------------------------------------------------------------------- |
| x = "Hello World"                            | str        | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_type_str)        |
| x = 29                                       | int        | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_type_int)        |
| x = 29.5                                     | float      | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_type_float)      |
| x = 1j                                       | complex    | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_type_complex)    |
| x = ["apple", "banana", "cherry"]            | list       | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_type_list)       |
| x = ("apple", "banana", "cherry")            | tuple      | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_type_tuple)      |
| x = range(6)                                 | range      | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_type_range)      |
| x = {"name" : "Bill", "age" : 63}            | dict       | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_type_dict)       |
| x = {"apple", "banana", "cherry"}            | set        | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_type_set)        |
| x = frozenset({"apple", "banana", "cherry"}) | frozenset  | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_type_frozenset)  |
| x = True                                     | bool       | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_type_bool)       |
| x = b"Hello"                                 | bytes      | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_type_bytes)      |
| x = bytearray(5)                             | bytearray  | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_type_bytearray)  |
| x = memoryview(bytes(5))                     | memoryview | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_type_memoryview) |

## 设定特定的数据类型

如果希望指定数据类型，则您可以使用以下构造函数：

| 示例                                         | 数据类型   | 试一试                                                                     |
| :------------------------------------------- | :--------- | :------------------------------------------------------------------------- |
| x = str("Hello World")                       | str        | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_type_str_2)        |
| x = int(29)                                  | int        | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_type_int_2)        |
| x = float(29.5)                              | float      | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_type_float_2)      |
| x = complex(1j)                              | complex    | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_type_complex_2)    |
| x = list(("apple", "banana", "cherry"))      | list       | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_type_list_2)       |
| x = tuple(("apple", "banana", "cherry"))     | tuple      | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_type_tuple_2)      |
| x = range(6)                                 | range      | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_type_range_2)      |
| x = dict(name="Bill", age=36)                | dict       | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_type_dict_2)       |
| x = set(("apple", "banana", "cherry"))       | set        | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_type_set_2)        |
| x = frozenset(("apple", "banana", "cherry")) | frozenset  | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_type_frozenset_2)  |
| x = bool(5)                                  | bool       | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_type_bool_2)       |
| x = bytes(5)                                 | bytes      | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_type_bytes_2)      |
| x = bytearray(5)                             | bytearray  | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_type_bytearray_2)  |
| x = memoryview(bytes(5))                     | memoryview | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_type_memoryview_2) |

- [Python 变量](https://www.w3school.com.cn/python/python_variables.asp)
- [Python 数字](https://www.w3school.com.cn/python/python_numbers.asp)

##### [Python 参考手册](https://www.w3school.com.cn/python/python_reference.asp)

##### [Python 实例](https://www.w3school.com.cn/python/python_examples.asp)

##### [Python 测验](https://www.w3school.com.cn/python/python_quiz.asp)

# Python 数字

- [Python 数据类型](https://www.w3school.com.cn/python/python_datatypes.asp)
- [Python Casting](https://www.w3school.com.cn/python/python_casting.asp)

## Python 数字

Python 中有三种数字类型：

- int
- float
- complex

为变量赋值时，将创建数值类型的变量：

### 实例

```python
x = 10   # int
y = 6.3  # float
z = 2j   # complex
```

如需验证 Python 中任何对象的类型，请使用 `type()` 函数：

### 实例

```python
print(type(x))
print(type(y))
print(type(z))
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_numbers)

## Int

Int 或整数是完整的数字，正数或负数，没有小数，长度不限。

### 实例

整数：

```python
x = 10
y = 37216654545182186317
z = -465167846

print(type(x))
print(type(y))
print(type(z))
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_numbers_int)

## Float

浮动或“浮点数”是包含小数的正数或负数。

### 实例

浮点：

```python
x = 3.50
y = 2.0
z = -63.78

print(type(x))
print(type(y))
print(type(z))
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_numbers_float_1)

浮点数也可以是带有“e”的科学数字，表示 10 的幂。

### 实例

浮点：

```python
x = 27e4
y = 15E2
z = -49.8e100

print(type(x))
print(type(y))
print(type(z))
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_numbers_float_2)

## 复数

复数用 "j" 作为虚部编写：

### 实例

复数：

```python
x = 2+3j
y = 7j
z = -7j

print(type(x))
print(type(y))
print(type(z))
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_numbers_complex)

## 类型转换

您可以使用 `int()`、`float()` 和 `complex()` 方法从一种类型转换为另一种类型：

### 实例

从一种类型转换为另一种类型：

```python
x = 10 # int
y = 6.3 # float
z = 1j # complex

# 把整数转换为浮点数

a = float(x)

# 把浮点数转换为整数

b = int(y)

# 把整数转换为复数：

c = complex(x)

print(a)
print(b)
print(c)

print(type(a))
print(type(b))
print(type(c))
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_numbers_convert)

**注释：**您无法将复数转换为其他数字类型。

## 随机数

Python 没有 `random()` 函数来创建随机数，但 Python 有一个名为 `random` 的内置模块，可用于生成随机数：

### 实例

导入 random 模块，并显示 1 到 9 之间的随机数：

```python
import random

print(random.randrange(1,10))
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_numbers_random)

在 [Random 模块参考手册](https://www.w3school.com.cn/python/python_module_random.asp) 中，您将了解有关 Random 模块的更多信息。

# Python Casting

- [Python 数字](https://www.w3school.com.cn/python/python_numbers.asp)
- [Python 字符串](https://www.w3school.com.cn/python/python_strings.asp)

## 指定变量类型

有时您可能需要为变量指定类型。这可以通过 casting 来完成。 Python 是一门面向对象的语言，因此它使用类来定义数据类型，包括其原始类型。

因此，使用构造函数完成在 python 中的转换：

- `int()` - 用整数字面量、浮点字面量构造整数（通过对数进行下舍入），或者用表示完整数字的字符串字面量
- `float()` - 用整数字面量、浮点字面量，或字符串字面量构造浮点数（提供表示浮点数或整数的字符串）
- `str()` - 用各种数据类型构造字符串，包括字符串，整数字面量和浮点字面量

### 实例

整数：

```python
x = int(1)   # x 将是 1
y = int(2.5) # y 将是 2
z = int("3") # z 将是 3
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_casting_int)

### 实例

浮点数：

```python
x = float(1)     # x 将是 1.0
y = float(2.5)   # y 将是 2.5
z = float("3")   # z 将是 3.0
w = float("4.6")# w 将是 4.6
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_casting_float)

### 实例

字符串：

```python
x = str("S2") # x 将是 'S2'
y = str(3)    # y 将是 '3'
z = str(4.0)  # z 将是 '4.0'
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_casting_string)

# Python 字符串

- [Python Casting](https://www.w3school.com.cn/python/python_casting.asp)
- [Python 布尔](https://www.w3school.com.cn/python/python_booleans.asp)

## 字符串字面量

python 中的字符串字面量由单引号或双引号括起。

`'hello'` 等同于 `"hello"`。

您可以使用 `print()` 函数显示字符串字面量：

### 实例

```python
print("Hello")
print('Hello')
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_string_literal)

## 用字符串向变量赋值

通过使用变量名称后跟等号和字符串，可以把字符串赋值给变量：

### 实例

```python
a = "Hello"
print(a)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_string_var)

## 多行字符串

您可以使用三个引号将多行字符串赋值给变量：

### 实例

您可以使用三个双引号：

```python
a = """Python is a widely used general-purpose, high level programming language. 
It was initially designed by Guido van Rossum in 1991 
and developed by Python Software Foundation. 
It was mainly developed for emphasis on code readability, 
and its syntax allows programmers to express concepts in fewer lines of code."""
print(a)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_string_multi_1)

或三个单引号：

### 实例

```python
a = '''Python is a widely used general-purpose, high level programming language. 
It was initially designed by Guido van Rossum in 1991 
and developed by Python Software Foundation. 
It was mainly developed for emphasis on code readability, 
and its syntax allows programmers to express concepts in fewer lines of code.'''
print(a)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_string_multi_2)

**注释：**在结果中，换行符插入与代码中相同的位置。

## 字符串是数组

像许多其他流行的编程语言一样，Python 中的字符串是表示 unicode 字符的字节数组。

但是，Python 没有字符数据类型，单个字符就是长度为 1 的字符串。

方括号可用于访问字符串的元素。

### 实例

获取位置 1 处的字符（请记住第一个字符的位置为 0）：

```python
a = "Hello, World!"
print(a[1])
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_string_array)

### 裁切

您可以使用裁切语法返回一定范围的字符。

指定开始索引和结束索引，以冒号分隔，以返回字符串的一部分。

#### 实例

获取从位置 2 到位置 5（不包括）的字符：

```python
b = "Hello, World!"
print(b[2:5])
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_string_slice)

### 负的索引

使用负索引从字符串末尾开始切片：

#### 实例

获取从位置 5 到位置 1 的字符，从字符串末尾开始计数：

```python
b = "Hello, World!"
print(b[-5:-2])
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_string_negativeindex)

### 字符串长度

如需获取字符串的长度，请使用 len() 函数。

#### 实例

len() 函数返回字符串的长度：

```python
a = "Hello, World!"
print(len(a))
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_string_len)

## 字符串方法

Python 有一组可用于字符串的内置方法。

### 实例

strip() 方法删除开头和结尾的空白字符：

```python
a = " Hello, World! "
print(a.strip()) # returns "Hello, World!"
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_string_strip)

### 实例

lower() 返回小写的字符串：

```python
a = "Hello, World!"
print(a.lower())
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_string_lower)

### 实例

upper() 方法返回大写的字符串：

```python
a = "Hello, World!"
print(a.upper())
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_string_upper)

### 实例

replace() 用另一段字符串来替换字符串：

```python
a = "Hello, World!"
print(a.replace("World", "Kitty"))
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_string_replace)

### 实例

split() 方法在找到分隔符的实例时将字符串拆分为子字符串：

```python
a = "Hello, World!"
print(a.split(",")) # returns ['Hello', ' World!']
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_string_split)

请使用我们的字符串方法参考手册，学习更多的字符串方法。

## 检查字符串

如需检查字符串中是否存在特定短语或字符，我们可以使用 in 或 not in 关键字。

### 实例

检查以下文本中是否存在短语 "ina"：

```python
txt = "China is a great country"
x = "ina" in txt
print(x)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_string_in)

### 实例

检查以下文本中是否没有短语 "ina"：

```python
txt = "China is a great country"
x = "ain" not in txt
print(x) 
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_string_not_in)

## 字符串级联（串联）

如需串联或组合两个字符串，您可以使用 + 运算符。

### 实例

将变量 a 与变量 b 合并到变量 c 中：

```python
a = "Hello"
b = "World"
c = a + b
print(c)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_string_concat_1)

### 实例

在它们之间添加一个空格：

```python
a = "Hello"
b = "World"
c = a + " " + b
print(c)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_string_concat_2)

## 字符串格式

正如在 Python 变量一章中所学到的，我们不能像这样组合字符串和数字：

### 实例

```python
age = 63
txt = "My name is Bill, I am " + age
print(txt)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=demo_python_string_format_error)

但是我们可以使用 `format()` 方法组合字符串和数字！

`format()` 方法接受传递的参数，格式化它们，并将它们放在占位符 `{}` 所在的字符串中：

### 实例

使用 `format()` 方法将数字插入字符串：

```python
age = 63 
txt = "My name is Bill, and I am {}"
print(txt.format(age))
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_string_format_1)

`format()` 方法接受不限数量的参数，并放在各自的占位符中：

### 实例

```python
quantity = 3
itemno = 567
price = 49.95
myorder = "I want {} pieces of item {} for {} dollars."
print(myorder.format(quantity, itemno, price))
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_string_format_2)

您可以使用索引号 `{0}` 来确保参数被放在正确的占位符中：

### 实例

```python
quantity = 3
itemno = 567
price = 49.95
myorder = "I want to pay {2} dollars for {0} pieces of item {1}."
print(myorder.format(quantity, itemno, price))
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_string_format_3)

## 字符串方法

Python 有一组可以在字符串上使用的内建方法。

**注释：**所有字符串方法都返回新值。它们不会更改原始字符串。

| 方法                                                                             | 描述                                               |
| :------------------------------------------------------------------------------- | :------------------------------------------------- |
| [capitalize()](https://www.w3school.com.cn/python/ref_string_capitalize.asp)     | 把首字符转换为大写。                               |
| [casefold()](https://www.w3school.com.cn/python/ref_string_casefold.asp)         | 把字符串转换为小写。                               |
| [center()](https://www.w3school.com.cn/python/ref_string_center.asp)             | 返回居中的字符串。                                 |
| [count()](https://www.w3school.com.cn/python/ref_string_count.asp)               | 返回指定值在字符串中出现的次数。                   |
| [encode()](https://www.w3school.com.cn/python/ref_string_encode.asp)             | 返回字符串的编码版本。                             |
| [endswith()](https://www.w3school.com.cn/python/ref_string_endswith.asp)         | 如果字符串以指定值结尾，则返回 true。              |
| [expandtabs()](https://www.w3school.com.cn/python/ref_string_expandtabs.asp)     | 设置字符串的 tab 尺寸。                            |
| [find()](https://www.w3school.com.cn/python/ref_string_find.asp)                 | 在字符串中搜索指定的值并返回它被找到的位置。       |
| [format()](https://www.w3school.com.cn/python/ref_string_format.asp)             | 格式化字符串中的指定值。                           |
| format_map()                                                                     | 格式化字符串中的指定值。                           |
| [index()](https://www.w3school.com.cn/python/ref_string_index.asp)               | 在字符串中搜索指定的值并返回它被找到的位置。       |
| [isalnum()](https://www.w3school.com.cn/python/ref_string_isalnum.asp)           | 如果字符串中的所有字符都是字母数字，则返回 True。  |
| [isalpha()](https://www.w3school.com.cn/python/ref_string_isalpha.asp)           | 如果字符串中的所有字符都在字母表中，则返回 True。  |
| [isdecimal()](https://www.w3school.com.cn/python/ref_string_isdecimal.asp)       | 如果字符串中的所有字符都是小数，则返回 True。      |
| [isdigit()](https://www.w3school.com.cn/python/ref_string_isdigit.asp)           | 如果字符串中的所有字符都是数字，则返回 True。      |
| [isidentifier()](https://www.w3school.com.cn/python/ref_string_isidentifier.asp) | 如果字符串是标识符，则返回 True。                  |
| [islower()](https://www.w3school.com.cn/python/ref_string_islower.asp)           | 如果字符串中的所有字符都是小写，则返回 True。      |
| [isnumeric()](https://www.w3school.com.cn/python/ref_string_isnumeric.asp)       | 如果字符串中的所有字符都是数，则返回 True。        |
| [isprintable()](https://www.w3school.com.cn/python/ref_string_isprintable.asp)   | 如果字符串中的所有字符都是可打印的，则返回 True。  |
| [isspace()](https://www.w3school.com.cn/python/ref_string_isspace.asp)           | 如果字符串中的所有字符都是空白字符，则返回 True。  |
| [istitle()](https://www.w3school.com.cn/python/ref_string_istitle.asp)           | 如果字符串遵循标题规则，则返回 True。              |
| [isupper()](https://www.w3school.com.cn/python/ref_string_isupper.asp)           | 如果字符串中的所有字符都是大写，则返回 True。      |
| [join()](https://www.w3school.com.cn/python/ref_string_join.asp)                 | 把可迭代对象的元素连接到字符串的末尾。             |
| [ljust()](https://www.w3school.com.cn/python/ref_string_ljust.asp)               | 返回字符串的左对齐版本。                           |
| [lower()](https://www.w3school.com.cn/python/ref_string_lower.asp)               | 把字符串转换为小写。                               |
| [lstrip()](https://www.w3school.com.cn/python/ref_string_lstrip.asp)             | 返回字符串的左修剪版本。                           |
| maketrans()                                                                      | 返回在转换中使用的转换表。                         |
| [partition()](https://www.w3school.com.cn/python/ref_string_partition.asp)       | 返回元组，其中的字符串被分为三部分。               |
| [replace()](https://www.w3school.com.cn/python/ref_string_replace.asp)           | 返回字符串，其中指定的值被替换为指定的值。         |
| [rfind()](https://www.w3school.com.cn/python/ref_string_rfind.asp)               | 在字符串中搜索指定的值，并返回它被找到的最后位置。 |
| [rindex()](https://www.w3school.com.cn/python/ref_string_rindex.asp)             | 在字符串中搜索指定的值，并返回它被找到的最后位置。 |
| [rjust()](https://www.w3school.com.cn/python/ref_string_rjust.asp)               | 返回字符串的右对齐版本。                           |
| [rpartition()](https://www.w3school.com.cn/python/ref_string_rpartition.asp)     | 返回元组，其中字符串分为三部分。                   |
| [rsplit()](https://www.w3school.com.cn/python/ref_string_rsplit.asp)             | 在指定的分隔符处拆分字符串，并返回列表。           |
| [rstrip()](https://www.w3school.com.cn/python/ref_string_rstrip.asp)             | 返回字符串的右边修剪版本。                         |
| [split()](https://www.w3school.com.cn/python/ref_string_split.asp)               | 在指定的分隔符处拆分字符串，并返回列表。           |
| [splitlines()](https://www.w3school.com.cn/python/ref_string_splitlines.asp)     | 在换行符处拆分字符串并返回列表。                   |
| [startswith()](https://www.w3school.com.cn/python/ref_string_startswith.asp)     | 如果以指定值开头的字符串，则返回 true。            |
| [strip()](https://www.w3school.com.cn/python/ref_string_strip.asp)               | 返回字符串的剪裁版本。                             |
| [swapcase()](https://www.w3school.com.cn/python/ref_string_swapcase.asp)         | 切换大小写，小写成为大写，反之亦然。               |
| [title()](https://www.w3school.com.cn/python/ref_string_title.asp)               | 把每个单词的首字符转换为大写。                     |
| translate()                                                                      | 返回被转换的字符串。                               |
| [upper()](https://www.w3school.com.cn/python/ref_string_upper.asp)               | 把字符串转换为大写。                               |
| [zfill()](https://www.w3school.com.cn/python/ref_string_zfill.asp)               | 在字符串的开头填充指定数量的 0 值。                |

**注释：**所有字符串方法都返回新值。它们不会更改原始字符串。

# Python 布尔

- [Python 字符串](https://www.w3school.com.cn/python/python_strings.asp)
- [Python 运算符](https://www.w3school.com.cn/python/python_operators.asp)

**布尔表示两值之一：True 或 False。**

## 布尔值

在编程中，您通常需要知道表达式是 True 还是 False。

您可以计算 Python 中的任何表达式，并获得两个答案之一，即 True 或 False。

比较两个值时，将对表达式求值，Python 返回布尔值答案：

### 实例

```python
print(8 > 7)
print(8 == 7)
print(8 < 7)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_booleans_1)

当在 if 语句中运行条件时，Python 返回 True 或 False：

### 实例

根据条件是对还是错，打印一条消息：

```python
a = 200
b = 33

if b > a:
  print("b is greater than a")
else:
  print("b is not greater than a")
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_booleans_2)

## 评估值和变量

bool() 函数可让您评估任何值，并为您返回 True 或 False。

### 实例

评估字符串和数字：

```python
print(bool("Hello"))
print(bool(10))
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_booleans_3)

### 实例

评估两个变量：

```python
x = "Hello"
y = 10

print(bool(x))
print(bool(y))
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_booleans_4)

## 大多数值都为 True

如果有某种内容，则几乎所有值都将评估为 True。

除空字符串外，任何字符串均为 True。

除 0 外，任何数字均为 True。

除空列表外，任何列表、元组、集合和字典均为 True。

### 实例

下例将返回 True：

```python
bool("abc")
bool(123)
bool(["apple", "cherry", "banana"])
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_booleans_5)

## 某些值为 False

实际上，除空值（例如 ()、[]、{}、""、数字 0 和值 None）外，没有多少值会被评估为 False。当然，值 False 的计算结果为 False。

### 实例

下例会返回 False：

```python
bool(False)
bool(None)
bool(0)
bool("")
bool(())
bool([])
bool({})
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_booleans_6)

在这种情况下，一个值或对象的计算结果为 False，即如果对象由带有 __len__ 函数的类生成的，且该函数返回 0 或 False：

### 实例

```python
class myclass():
  def __len__(self):
    return 0

myobj = myclass()
print(bool(myobj))
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_booleans_7)

## 函数可返回布尔

Python 还有很多返回布尔值的内置函数，例如 isinstance() 函数，该函数可用于确定对象是否具有某种数据类型：

### 实例

检查对象是否是整数：

```python
x = 200
print(isinstance(x, int))
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_booleans_8)

# Python 运算符

- [Python 布尔](https://www.w3school.com.cn/python/python_booleans.asp)
- [Python 列表](https://www.w3school.com.cn/python/python_lists.asp)

## Python 运算符

运算符用于对变量和值执行操作。

Python 在以下组中划分运算符：

- 算术运算符
- 赋值运算符
- 比较运算符
- 逻辑运算符
- 身份运算符
- 成员运算符
- 位运算符

## Python 算术运算符

算术运算符与数值一起使用来执行常见的数学运算：

| 运算符 | 名称             | 实例   | 试一试                                                                 |
| :----- | :--------------- | :----- | :--------------------------------------------------------------------- |
| +      | 加               | x + y  | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_oper_add)      |
| -      | 减               | x - y  | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_oper_sub)      |
| *      | 乘               | x * y  | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_oper_mult)     |
| /      | 除               | x / y  | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_oper_div)      |
| %      | 取模             | x % y  | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_oper_mod)      |
| **     | 幂               | x ** y | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_oper_exp)      |
| //     | 地板除（取整除） | x // y | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_oper_floordiv) |

## Python 赋值运算符

赋值运算符用于为变量赋值：

| 运算符 | 实例    | 等同于     | 试一试                                                               |
| :----- | :------ | :--------- | :------------------------------------------------------------------- |
| =      | x = 5   | x = 5      | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_oper_ass_1)  |
| +=     | x += 3  | x = x + 3  | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_oper_ass_2)  |
| -=     | x -= 3  | x = x - 3  | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_oper_ass_3)  |
| *=     | x *= 3  | x = x * 3  | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_oper_ass_4)  |
| /=     | x /= 3  | x = x / 3  | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_oper_ass_5)  |
| %=     | x %= 3  | x = x % 3  | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_oper_ass_6)  |
| //=    | x //= 3 | x = x // 3 | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_oper_ass_7)  |
| **=    | x **= 3 | x = x ** 3 | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_oper_ass_8)  |
| &=     | x &= 3  | x = x & 3  | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_oper_ass_9)  |
| \|=    | x \|= 3 | x = x \| 3 | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_oper_ass_10) |
| ^=     | x ^= 3  | x = x ^ 3  | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_oper_ass_11) |
| >>=    | x >>= 3 | x = x >> 3 | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_oper_ass_12) |
| <<=    | x <<= 3 | x = x << 3 | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_oper_ass_13) |

## Python 比较运算符

比较运算符用于比较两个值：

| 运算符 | 名称       | 实例   | 试一试                                                                  |
| :----- | :--------- | :----- | :---------------------------------------------------------------------- |
| ==     | 等于       | x == y | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_oper_compare_1) |
| !=     | 不等于     | x != y | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_oper_compare_2) |
| >      | 大于       | x > y  | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_oper_compare_3) |
| <      | 小于       | x < y  | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_oper_compare_4) |
| >=     | 大于或等于 | x >= y | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_oper_compare_5) |
| <=     | 小于或等于 | x <= y | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_oper_compare_6) |

## Python 逻辑运算符

逻辑运算符用于组合条件语句：

| 运算符 | 描述                                    | 实例                  | 试一试                                                                  |
| :----- | :-------------------------------------- | :-------------------- | :---------------------------------------------------------------------- |
| and    | 如果两个语句都为真，则返回 True。       | x > 3 and x < 10      | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_oper_logical_1) |
| or     | 如果其中一个语句为真，则返回 True。     | x > 3 or x < 4        | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_oper_logical_2) |
| not    | 反转结果，如果结果为 true，则返回 False | not(x > 3 and x < 10) | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_oper_logical_3) |

## Python 身份运算符

身份运算符用于比较对象，不是比较它们是否相等，但如果它们实际上是同一个对象，则具有相同的内存位置：

| 运算符 | 描述                                      | 实例       | 试一试                                                                   |
| :----- | :---------------------------------------- | :--------- | :----------------------------------------------------------------------- |
| is     | 如果两个变量是同一个对象，则返回 true。   | x is y     | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_oper_identity_1) |
| is not | 如果两个变量不是同一个对象，则返回 true。 | x is not y | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_oper_identity_2) |

## Python 成员运算符

成员资格运算符用于测试序列是否在对象中出现：

| 运算符 | 描述                                            | 实例       | 试一试                                                                     |
| :----- | :---------------------------------------------- | :--------- | :------------------------------------------------------------------------- |
| in     | 如果对象中存在具有指定值的序列，则返回 True。   | x in y     | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_oper_membership_1) |
| not in | 如果对象中不存在具有指定值的序列，则返回 True。 | x not in y | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_oper_membership_2) |

## Python 位运算符

位运算符用于比较（二进制）数字：

| 运算符 | 描述                 | 实例                                                     |
| :----- | :------------------- | :------------------------------------------------------- |
| &      | AND                  | 如果两个位均为 1，则将每个位设为 1。                     |
| \|     | OR                   | 如果两位中的一位为 1，则将每个位设为 1。                 |
| ^      | XOR                  | 如果两个位中只有一位为 1，则将每个位设为 1。             |
| ~      | NOT                  | 反转所有位。                                             |
| <<     | Zero fill left shift | 通过从右侧推入零来向左移动，推掉最左边的位。             |
| >>     | Signed right shift   | 通过从左侧推入最左边的位的副本向右移动，推掉最右边的位。 |

# Python 列表

- [Python 运算符](https://www.w3school.com.cn/python/python_operators.asp)
- [Python 元组](https://www.w3school.com.cn/python/python_tuples.asp)

## Python 集合（数组）

Python 编程语言中有四种集合数据类型：

- *列表（List）*是一种有序和可更改的集合。允许重复的成员。
- *元组（Tuple）*是一种有序且不可更改的集合。允许重复的成员。
- *集合（Set）*是一个无序和无索引的集合。没有重复的成员。
- *词典（Dictionary）*是一个无序，可变和有索引的集合。没有重复的成员。

选择集合类型时，了解该类型的属性很有用。

为特定数据集选择正确的类型可能意味着保留含义，并且可能意味着提高效率或安全性。

## 列表

列表是一个有序且可更改的集合。在 Python 中，列表用方括号编写。

### 实例

创建列表：

```python
thislist = ["apple", "banana", "cherry"]
print(thislist)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_list)

## 访问项目

您可以通过引用索引号来访问列表项：

### 实例

打印列表的第二项：

```python
thislist = ["apple", "banana", "cherry"]
print(thislist[1])
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_list_access)

### 负的索引

负索引表示从末尾开始，-1 表示最后一个项目，-2 表示倒数第二个项目，依此类推。

#### 实例

打印列表的最后一项：

```python
thislist = ["apple", "banana", "cherry"]
print(thislist[-1])
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_list_negative_index)

### 索引范围

您可以通过指定范围的起点和终点来指定索引范围。

指定范围后，返回值将是包含指定项目的新列表。

#### 实例

返回第三、第四、第五项：

```python
thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
print(thislist[2:5])
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_list_range)

**注释：**搜索将从索引 2（包括）开始，到索引 5（不包括）结束。

请记住，第一项的索引为 0。

### 负索引的范围

如果要从列表末尾开始搜索，请指定负索引：

### 实例

此例将返回从索引 -4（包括）到索引 -1（排除）的项目：

```python
thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
print(thislist[-4:-1])
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_list_range_negative)

## 更改项目值

如需更改特定项目的值，请引用索引号：

### 实例

更改第二项：

```python
thislist = ["apple", "banana", "cherry"]
thislist[1] = "mango"
print(thislist)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_list_change)

## 遍历列表

您可以使用 `for` 循环遍历列表项：

### 实例

逐个打印列表中的所有项目：

```python
thislist = ["apple", "banana", "cherry"]
for x in thislist:
  print(x)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_list_loop)

您将在 [Python For 循环](https://www.w3school.com.cn/python/python_for_loops.asp) 这一章中学习有关 `for` 循环的更多知识。

## 检查项目是否存在

如需确定列表中是否存在指定的项，请使用 `in` 关键字：

### 实例

检查列表中是否存在 “apple”：

```python
thislist = ["apple", "banana", "cherry"]
if "apple" in thislist:
  print("Yes, 'apple' is in the fruits list")
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_list_in)

## 列表长度

如需确定列表中有多少项，请使用 `len()` 方法：

### 实例

打印列表中的项目数：

```python
thislist = ["apple", "banana", "cherry"]
print(len(thislist))
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_list_len)

## 添加项目

如需将项目添加到列表的末尾，请使用 `append()` 方法：

### 实例

使用 `append()` 方法追加项目：

```python
thislist = ["apple", "banana", "cherry"]
thislist.append("orange")
print(thislist)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_list_append)

要在指定的索引处添加项目，请使用 `insert()` 方法：

### 实例

插入项目作为第二个位置：

```python
thislist = ["apple", "banana", "cherry"]
thislist.insert(1, "orange")
print(thislist)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_list_insert)

## 删除项目

有几种方法可以从列表中删除项目：

### 实例

`remove()` 方法删除指定的项目：

```python
thislist = ["apple", "banana", "cherry"]
thislist.remove("banana")
print(thislist)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_list_remove)

### 实例

`pop()` 方法删除指定的索引（如果未指定索引，则删除最后一项）：

```python
thislist = ["apple", "banana", "cherry"]
thislist.pop()
print(thislist)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_list_pop)

### 实例

`del` 关键字删除指定的索引：

```python
thislist = ["apple", "banana", "cherry"]
del thislist[0]
print(thislist)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_list_del_1)

### 实例

`del` 关键字也能完整地删除列表：

```python
thislist = ["apple", "banana", "cherry"]
del thislist
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_list_del_2)

### 实例

`clear()` 方法清空列表：

```python
thislist = ["apple", "banana", "cherry"]
thislist.clear()
print(thislist)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_list_clear)

## 复制列表

您只能通过键入 `list2 = list1` 来复制列表，因为：`list2` 将只是对 `list1` 的引用，`list1` 中所做的更改也将自动在 `list2` 中进行。

有一些方法可以进行复制，一种方法是使用内置的 List 方法 `copy()`。

### 实例

使用 `copy()` 方法来复制列表：

```python
thislist = ["apple", "banana", "cherry"]
mylist = thislist.copy()
print(mylist)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_list_copy_1)

制作副本的另一种方法是使用内建的方法 `list()`。

### 实例

使用 `list()` 方法复制列表：

```python
thislist = ["apple", "banana", "cherry"]
mylist = list(thislist)
print(mylist)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_list_copy_2)

## 合并两个列表

在 Python 中，有几种方法可以连接或串联两个或多个列表。

最简单的方法之一是使用 + 运算符。

### 实例

合并两个列表：

```python
list1 = ["a", "b" , "c"]
list2 = [1, 2, 3]

list3 = list1 + list2
print(list3)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_list_concat_1)

连接两个列表的另一种方法是将 list2 中的所有项一个接一个地追加到 list1 中：

### 实例

把 list2 追加到 list1 中：

```python
list1 = ["a", "b" , "c"]
list2 = [1, 2, 3]

for x in list2:
  list1.append(x)

print(list1)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_list_concat_2)

或者，您可以使用 extend() 方法，其目的是将一个列表中的元素添加到另一列表中：

### 实例

使用 extend() 方法将 list2 添加到 list1 的末尾：

```python
list1 = ["a", "b" , "c"]
list2 = [1, 2, 3]

list1.extend(list2)
print(list1)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_list_concat_3)

## list() 构造函数

也可以使用 `list()` 构造函数创建一个新列表。

### 实例

使用 `list()` 构造函数创建列表：

```python
thislist = list(("apple", "banana", "cherry")) # 请注意双括号
print(thislist)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_list_constructor)

## 列表方法

Python 有一组可以在列表上使用的内建方法。

| 方法                                                                 | 描述                                                 |
| :------------------------------------------------------------------- | :--------------------------------------------------- |
| [append()](https://www.w3school.com.cn/python/ref_list_append.asp)   | 在列表的末尾添加一个元素                             |
| [clear()](https://www.w3school.com.cn/python/ref_list_clear.asp)     | 删除列表中的所有元素                                 |
| [copy()](https://www.w3school.com.cn/python/ref_list_copy.asp)       | 返回列表的副本                                       |
| [count()](https://www.w3school.com.cn/python/ref_list_count.asp)     | 返回具有指定值的元素数量。                           |
| [extend()](https://www.w3school.com.cn/python/ref_list_extend.asp)   | 将列表元素（或任何可迭代的元素）添加到当前列表的末尾 |
| [index()](https://www.w3school.com.cn/python/ref_list_index.asp)     | 返回具有指定值的第一个元素的索引                     |
| [insert()](https://www.w3school.com.cn/python/ref_list_insert.asp)   | 在指定位置添加元素                                   |
| [pop()](https://www.w3school.com.cn/python/ref_list_pop.asp)         | 删除指定位置的元素                                   |
| [remove()](https://www.w3school.com.cn/python/ref_list_remove.asp)   | 删除具有指定值的项目                                 |
| [reverse()](https://www.w3school.com.cn/python/ref_list_reverse.asp) | 颠倒列表的顺序                                       |
| [sort()](https://www.w3school.com.cn/python/ref_list_sort.asp)       | 对列表进行排序                                       |

# Python 元组

- [Python 列表](https://www.w3school.com.cn/python/python_lists.asp)
- [Python 集合](https://www.w3school.com.cn/python/python_sets.asp)

## 元组（Tuple）

元组是有序且不可更改的集合。在 Python 中，元组是用圆括号编写的。

### 实例

创建元组：

```python
thistuple = ("apple", "banana", "cherry")
print(thistuple)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_tuple)

## 访问元组项目

您可以通过引用方括号内的索引号来访问元组项目：

### 实例

打印元组中的第二个项目：

```python
thistuple = ("apple", "banana", "cherry")
print(thistuple[1])
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_tuple_access)

### 负索引

负索引表示从末尾开始，-1 表示最后一个项目，-2 表示倒数第二个项目，依此类推。

#### 实例

打印元组的最后一个项目：

```python
thistuple = ("apple", "banana", "cherry")
print(thistuple[-1])
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_tuple_negative_index)

### 索引范围

您可以通过指定范围的起点和终点来指定索引范围。

指定范围后，返回值将是带有指定项目的新元组。

#### 实例

返回第三、第四、第五个项目：

```python
thistuple = ("apple", "banana", "cherry", "orange", "kiwi", "melon", "mango")
print(thistuple[2:5])
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_tuple_range)

**注释：**搜索将从索引 2（包括）开始，到索引 5（不包括）结束。

请记住，第一项的索引为 0。

### 负索引范围

如果要从元组的末尾开始搜索，请指定负索引：

#### 实例

此例将返回从索引 -4（包括）到索引 -1（排除）的项目：

```python
thistuple = ("apple", "banana", "cherry", "orange", "kiwi", "melon", "mango")
print(thistuple[-4:-1])
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_tuple_range_negative)

## 更改元组值

创建元组后，您将无法更改其值。元组是不可变的，或者也称为恒定的。

但是有一种解决方法。您可以将元组转换为列表，更改列表，然后将列表转换回元组。

### 实例

把元组转换为列表即可进行更改：

```python
x = ("apple", "banana", "cherry")
y = list(x)
y[1] = "kiwi"
x = tuple(y)

print(x)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_tuple_change)

## 遍历元组

您可以使用 `for` 循环遍历元组项目。

### 实例

遍历项目并打印值：

```python
thistuple = ("apple", "banana", "cherry")
for x in thistuple:
  print(x)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_tuple_loop)

您将在 [Python For 循环](https://www.w3school.com.cn/python/python_for_loops.asp) 这一章中学习有关 `for` 循环的更多知识。

## 检查项目是否存在

要确定元组中是否存在指定的项，请使用 `in` 关键字：

### 实例

检查元组中是否存在 "apple"：

```python
thistuple = ("apple", "banana", "cherry")
if "apple" in thistuple:
  print("Yes, 'apple' is in the fruits tuple")
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_tuple_in)

## 元组长度

要确定元组有多少项，请使用 `len()` 方法：

### 实例

打印元组中的项目数量：

```python
thistuple = ("apple", "banana", "cherry")
print(len(thistuple))
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_tuple_length)

## 添加项目

元组一旦创建，您就无法向其添加项目。元组是不可改变的。

### 实例

您无法向元组添加项目：

```python
thistuple = ("apple", "banana", "cherry")
thistuple[3] = "orange" # 会引发错误
print(thistuple)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=demo_python_tuple_add)

## 创建有一个项目的元组

如需创建仅包含一个项目的元组，您必须在该项目后添加一个逗号，否则 Python 无法将变量识别为元组。

### 实例

单项元组，别忘了逗号：

```python
thistuple = ("apple",)
print(type(thistuple))

#不是元组
thistuple = ("apple")
print(type(thistuple))
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_tuple_one_item)

## 删除项目

**注释：**您无法删除元组中的项目。

元组是不可更改的，因此您无法从中删除项目，但您可以完全删除元组：

### 实例

del 关键字可以完全删除元组：

```python
thistuple = ("apple", "banana", "cherry")
del thistuple

print(thistuple) # 这会引发错误，因为元组已不存在。
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=demo_python_tuple_del)

## 合并两个元组

如需连接两个或多个元组，您可以使用 + 运算符：

### 实例

合并这个元组：

```python
tuple1 = ("a", "b" , "c")
tuple2 = (1, 2, 3)

tuple3 = tuple1 + tuple2
print(tuple3)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_tuple_concat)

## tuple() 构造函数

也可以使用 `tuple()` 构造函数来创建元组。

### 实例

使用 `tuple()` 方法来创建元组：

```python
thistuple = tuple(("apple", "banana", "cherry")) # 请注意双括号
print(thistuple)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_tuple_constructor)

## 元组方法

Python 提供两个可以在元组上使用的内建方法。

| 方法                                                              | 描述                                       |
| :---------------------------------------------------------------- | :----------------------------------------- |
| [count()](https://www.w3school.com.cn/python/ref_tuple_count.asp) | 返回元组中指定值出现的次数。               |
| [index()](https://www.w3school.com.cn/python/ref_tuple_index.asp) | 在元组中搜索指定的值并返回它被找到的位置。 |

# Python 集合

- [Python 元组](https://www.w3school.com.cn/python/python_tuples.asp)
- [Python 字典](https://www.w3school.com.cn/python/python_dictionaries.asp)

## 集合（Set）

集合是无序和无索引的集合。在 Python 中，集合用花括号编写。

### 实例

创建集合：

```python
thisset = {"apple", "banana", "cherry"}
print(thisset)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_set)

**注释：**集合是无序的，因此您无法确定项目的显示顺序。

## 访问项目

您无法通过引用索引来访问 set 中的项目，因为 set 是无序的，项目没有索引。

但是您可以使用 `for` 循环遍历 set 项目，或者使用 `in` 关键字查询集合中是否存在指定值。

### 实例

遍历集合，并打印值：

```python
thisset = {"apple", "banana", "cherry"}

for x in thisset:
  print(x)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_set_loop)

### 实例

检查 set 中是否存在 “banana”：

```python
thisset = {"apple", "banana", "cherry"}

print("banana" in thisset)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_set_in)

## 更改项目

集合一旦创建，您就无法更改项目，但是您可以添加新项目。

## 添加项目

要将一个项添加到集合，请使用 `add()` 方法。

要向集合中添加多个项目，请使用 `update()` 方法。

### 实例

使用 `add()` 方法向 set 添加项目：

```python
thisset = {"apple", "banana", "cherry"}

thisset.add("orange")

print(thisset)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_set_add)

### 实例

使用 `update()` 方法将多个项添加到集合中：

```python
thisset = {"apple", "banana", "cherry"}

thisset.update(["orange", "mango", "grapes"])

print(thisset)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_set_update_1)

## 获取 Set 的长度

要确定集合中有多少项，请使用 `len()` 方法。

### 实例

获取集合中的项目数：

```python
thisset = {"apple", "banana", "cherry"}

print(len(thisset))
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_set_length)

## 删除项目

要删除集合中的项目，请使用 `remove()` 或 `discard()` 方法。

### 实例

使用 `remove()` 方法来删除 “banana”：

```python
thisset = {"apple", "banana", "cherry"}

thisset.remove("banana")

print(thisset)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_set_remove)

**注释：**如果要删除的项目不存在，则 `remove()` 将引发错误。

### 实例

使用 `discard()` 方法来删除 “banana”：

```python
thisset = {"apple", "banana", "cherry"}

thisset.discard("banana")

print(thisset)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_set_discard)

**注释：**如果要删除的项目不存在，则 `discard()` 不会引发错误。

您还可以使用 `pop()` 方法删除项目，但此方法将删除最后一项。请记住，set 是无序的，因此您不会知道被删除的是什么项目。

`pop()` 方法的返回值是被删除的项目。

### 实例

使用 `pop()` 方法删除最后一项：

```python
thisset = {"apple", "banana", "cherry"}

x = thisset.pop()

print(x)

print(thisset)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_set_pop)

**注释：**集合是无序的，因此在使用 `pop()` 方法时，您不会知道删除的是哪个项目。

### 实例

`clear()` 方法清空集合：

```python
thisset = {"apple", "banana", "cherry"}

thisset.clear()

print(thisset)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_set_clear)

### 实例

`del` 彻底删除集合：

```python
thisset = {"apple", "banana", "cherry"}

del thisset

print(thisset)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=demo_python_set_del)

## 合并两个集合

在 Python 中，有几种方法可以连接两个或多个集合。

您可以使用 union() 方法返回包含两个集合中所有项目的新集合，也可以使用 update() 方法将一个集合中的所有项目插入另一个集合中：

### 实例

union() 方法返回一个新集合，其中包含两个集合中的所有项目：

```python
set1 = {"a", "b" , "c"}
set2 = {1, 2, 3}

set3 = set1.union(set2)
print(set3)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_set_union)

### 实例

update() 方法将 set2 中的项目插入 set1 中：

```python
set1 = {"a", "b" , "c"}
set2 = {1, 2, 3}

set1.update(set2)
print(set1)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_set_update_2)

**注释：**union() 和 update() 都将排除任何重复项。

还有其他方法将两个集合连接起来，并且仅保留重复项，或者永远不保留重复项，请查看此页面底部的集合方法完整列表。

## set() 构造函数

也可以使用 `set()` 构造函数来创建集合。

### 实例

使用 `set()` 构造函数来创建集合：

```python
thisset = set(("apple", "banana", "cherry")) # 请留意这个双括号
print(thisset)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_set_constructor)

## Set 方法

Python 拥有一套能够在集合（set）上使用的内建方法。

| 方法                                                                                                        | 描述                                         |
| :---------------------------------------------------------------------------------------------------------- | :------------------------------------------- |
| [add()](https://www.w3school.com.cn/python/ref_set_add.asp)                                                 | 向集合添加元素。                             |
| [clear()](https://www.w3school.com.cn/python/ref_set_clear.asp)                                             | 删除集合中的所有元素。                       |
| [copy()](https://www.w3school.com.cn/python/ref_set_copy.asp)                                               | 返回集合的副本。                             |
| [difference()](https://www.w3school.com.cn/python/ref_set_difference.asp)                                   | 返回包含两个或更多集合之间差异的集合。       |
| [difference_update()](https://www.w3school.com.cn/python/ref_set_difference_update.asp)                     | 删除此集合中也包含在另一个指定集合中的项目。 |
| [discard()](https://www.w3school.com.cn/python/ref_set_discard.asp)                                         | 删除指定项目。                               |
| [intersection()](https://www.w3school.com.cn/python/ref_set_intersection.asp)                               | 返回为两个其他集合的交集的集合。             |
| [intersection_update()](https://www.w3school.com.cn/python/ref_set_intersection_update.asp)                 | 删除此集合中不存在于其他指定集合中的项目。   |
| [isdisjoint()](https://www.w3school.com.cn/python/ref_set_isdisjoint.asp)                                   | 返回两个集合是否有交集。                     |
| [issubset()](https://www.w3school.com.cn/python/ref_set_issubset.asp)                                       | 返回另一个集合是否包含此集合。               |
| [issuperset()](https://www.w3school.com.cn/python/ref_set_issuperset.asp)                                   | 返回此集合是否包含另一个集合。               |
| [pop()](https://www.w3school.com.cn/python/ref_set_pop.asp)                                                 | 从集合中删除一个元素。                       |
| [remove()](https://www.w3school.com.cn/python/ref_set_remove.asp)                                           | 删除指定元素。                               |
| [symmetric_difference()](https://www.w3school.com.cn/python/ref_set_symmetric_difference.asp)               | 返回具有两组集合的对称差集的集合。           |
| [symmetric_difference_update()](https://www.w3school.com.cn/python/ref_set_symmetric_difference_update.asp) | 插入此集合和另一个集合的对称差集。           |
| [union()](https://www.w3school.com.cn/python/ref_set_union.asp)                                             | 返回包含集合并集的集合。                     |
| [update()](https://www.w3school.com.cn/python/ref_set_update.asp)                                           | 用此集合和其他集合的并集来更新集合。         |

# Python 字典

- [Python 集合](https://www.w3school.com.cn/python/python_sets.asp)
- [Python If Else](https://www.w3school.com.cn/python/python_conditions.asp)

## 字典（Dictionary）

字典是一个无序、可变和有索引的集合。在 Python 中，字典用花括号编写，拥有键和值。

### 实例

创建并打印字典：

```python
thisdict =	{
  "brand": "Porsche",
  "model": "911",
  "year": 1963
}
print(thisdict)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_dictionary)

## 访问项目

您可以通过在方括号内引用其键名来访问字典的项目：

### 实例

获取 "model" 键的值：

```python
x = thisdict["model"]
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_dictionary_access)

还有一个名为 `get()` 的方法会给你相同的结果：

### 实例

获取 "model" 键的值：

```python
x = thisdict.get("model")
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_dictionary_get)

## 更改值

您可以通过引用其键名来更改特定项的值：

### 实例

把 "year" 改为 2019：

```python
thisdict =	{
  "brand": "Porsche",
  "model": "911",
  "year": 1963
}
thisdict["year"] = 2019
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_dictionary_change)

## 遍历字典

您可以使用 `for` 循环遍历字典。

循环遍历字典时，返回值是字典的键，但也有返回值的方法。

### 实例

逐个打印字典中的所有键名：

```python
for x in thisdict:
  print(x)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_dictionary_loop_1)

### 实例

逐个打印字典中的所有值：

```python
for x in thisdict:
  print(thisdict[x])
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_dictionary_loop_2)

### 实例

您还可以使用 `values()` 函数返回字典的值：

```python
for x in thisdict.values():
  print(x)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_dictionary_loop_values)

### 实例

通过使用 items() 函数遍历键和值：

```python
for x, y in thisdict.items():
  print(x, y)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_dictionary_loop_items)

## 检查键是否存在

要确定字典中是否存在指定的键，请使用 `in` 关键字：

### 实例

检查字典中是否存在 "model"：

```python
thisdict =	{
  "brand": "Porsche",
  "model": "911",
  "year": 1963
}
if "model" in thisdict:
  print("Yes, 'model' is one of the keys in the thisdict dictionary")
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_dictionary_in)

## 字典长度

要确定字典有多少项目（键值对），请使用 `len()` 方法。

### 实例

打印字典中的项目数：

```python
print(len(thisdict))
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_dictionary_length)

## 添加项目

通过使用新的索引键并为其赋值，可以将项目添加到字典中：

### 实例

```python
thisdict =	{
  "brand": "Porsche",
  "model": "911",
  "year": 1963
}
thisdict["color"] = "red"
print(thisdict)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_dictionary_add)

## 删除项目

有几种方法可以从字典中删除项目：

### 实例

pop() 方法删除具有指定键名的项：

```python
thisdict =	{
  "brand": "Porsche",
  "model": "911",
  "year": 1963
}
thisdict.pop("model")
print(thisdict)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_dictionary_pop)

### 实例

`popitem()` 方法删除最后插入的项目（在 3.7 之前的版本中，删除随机项目）：

```python
thisdict =	{
  "brand": "Porsche",
  "model": "911",
  "year": 1963
}
thisdict.popitem()
print(thisdict)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_dictionary_popitem)

### 实例

`del` 关键字删除具有指定键名的项目：

```python
thisdict =	{
  "brand": "Porsche",
  "model": "911",
  "year": 1963
}
del thisdict["model"]
print(thisdict)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_dictionary_del_1)

### 实例

`del` 关键字也可以完全删除字典：

```python
thisdict =	{
  "brand": "Porsche",
  "model": "911",
  "year": 1963
}
del thisdict

print(thisdict) #this 会导致错误，因为 "thisdict" 不再存在。
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=demo_python_dictionary_del_2)

### 实例

`clear()` 关键字清空字典：

```python
thisdict =	{
  "brand": "Porsche",
  "model": "911",
  "year": 1963
}
thisdict.clear()
print(thisdict)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_dictionary_clear)

## 复制字典

您不能通过键入 `dict2 = dict1` 来复制字典，因为：`dict2` 只是对 `dict1` 的引用，而 `dict1` 中的更改也将自动在 `dict2` 中进行。

有一些方法可以进行复制，一种方法是使用内建的字典方法 `copy()`。

### 实例

使用 `copy()` 方法来复制字典：

```python
thisdict =	{
  "brand": "Porsche",
  "model": "911",
  "year": 1963
}
mydict = thisdict.copy()
print(mydict)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_dictionary_copy_1)

制作副本的另一种方法是使用内建方法 `dict()`。

### 实例

使用 `dict()` 方法创建字典的副本：

```python
thisdict =	{
  "brand": "Porsche",
  "model": "911",
  "year": 1963
}
mydict = dict(thisdict)
print(mydict)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_dictionary_copy_2)

## 嵌套字典

词典也可以包含许多词典，这被称为嵌套词典。

### 实例

创建包含三个字典的字典：

```python
myfamily = {
  "child1" : {
    "name" : "Phoebe Adele",
    "year" : 2002
  },
  "child2" : {
    "name" : "Jennifer Katharine",
    "year" : 1996
  },
  "child3" : {
    "name" : "Rory John",
    "year" : 1999
  }
}
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_dictionary_nested_1)

或者，如果您想嵌套三个已经作为字典存在的字典：

### 实例

创建三个字典，然后创建一个包含其他三个字典的字典：

```python
child1 = {
  "name" : "Phoebe Adele",
  "year" : 2002
}
child2 = {
  "name" : "Jennifer Katharine",
  "year" : 1996
}
child3 = {
  "name" : "Rory John",
  "year" : 1999
}

myfamily = {
  "child1" : child1,
  "child2" : child2,
  "child3" : child3
}
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_dictionary_nested_2)

## dict() 构造函数

也可以使用 `dict()` 构造函数创建新的字典：

### 实例

```python
thisdict = dict(brand="Porsche", model="911", year=1963)
# 请注意，关键字不是字符串字面量
# 请注意，使用了等号而不是冒号来赋值
print(thisdict)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_dictionary_dict)

## 字典方法

Python 提供一组可以在字典上使用的内建方法。

| 方法                                                                             | 描述                                                   |
| :------------------------------------------------------------------------------- | :----------------------------------------------------- |
| [clear()](https://www.w3school.com.cn/python/ref_dictionary_clear.asp)           | 删除字典中的所有元素                                   |
| [copy()](https://www.w3school.com.cn/python/ref_dictionary_copy.asp)             | 返回字典的副本                                         |
| [fromkeys()](https://www.w3school.com.cn/python/ref_dictionary_fromkeys.asp)     | 返回拥有指定键和值的字典                               |
| [get()](https://www.w3school.com.cn/python/ref_dictionary_get.asp)               | 返回指定键的值                                         |
| [items()](https://www.w3school.com.cn/python/ref_dictionary_items.asp)           | 返回包含每个键值对的元组的列表                         |
| [keys()](https://www.w3school.com.cn/python/ref_dictionary_keys.asp)             | 返回包含字典键的列表                                   |
| [pop()](https://www.w3school.com.cn/python/ref_dictionary_pop.asp)               | 删除拥有指定键的元素                                   |
| [popitem()](https://www.w3school.com.cn/python/ref_dictionary_popitem.asp)       | 删除最后插入的键值对                                   |
| [setdefault()](https://www.w3school.com.cn/python/ref_dictionary_setdefault.asp) | 返回指定键的值。如果该键不存在，则插入具有指定值的键。 |
| [update()](https://www.w3school.com.cn/python/ref_dictionary_update.asp)         | 使用指定的键值对字典进行更新                           |
| [values()](https://www.w3school.com.cn/python/ref_dictionary_values.asp)         | 返回字典中所有值的列表                                 |

# Python If ... Else

- [Python 字典](https://www.w3school.com.cn/python/python_dictionaries.asp)
- [Python While 循环](https://www.w3school.com.cn/python/python_while_loops.asp)

## Python 条件和 If 语句

Python 支持来自数学的常用逻辑条件：

- 等于：`a == b`
- 不等于：`a != b`
- 小于：`a < b`
- 小于等于：`a <= b`
- 大于：`a > b`
- 大于等于：`a >= b`

这些条件能够以多种方式使用，最常见的是“if 语句”和循环。

if 语句使用 `if` 关键词来写。

### 实例

If 语句：

```python
a = 66
b = 200
if b > a:
  print("b is greater than a")
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_if)

在这个例子中，我们使用了两个变量，`a` 和 `b`，作为 if 语句的一部分，它们用于测试 b 是否大于 a。因为 a 是 66，而 b 是 200，我们知道 200 大于 66，所以我们将“b大于a”打印到屏幕。

## 缩进

Python 依赖缩进，使用空格来定义代码中的范围。其他编程语言通常使用花括号来实现此目的。

### 实例

没有缩进的 If 语句（会引发错误）：

```python
a = 66
b = 200
if b > a:
print("b is greater than a") # 会报错
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_if_error)

## Elif

`elif` 关键字是 python 对“如果之前的条件不正确，那么试试这个条件”的表达方式。

### 实例

```python
a = 66
b = 66
if b > a:
  print("b is greater than a")
elif a == b:
  print("a and b are equal")
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_if_elif)

在这个例子中，`a` 等于 `b`，所以第一个条件不成立，但 `elif` 条件为 true，所以我们打印屏幕“a 和 b 相等”。

## Else

else 关键字捕获未被之前的条件捕获的任何内容。

### 实例

```python
a = 200
b = 66
if b > a:
  print("b is greater than a")
elif a == b:
  print("a and b are equal")
else:
  print("a is greater than b")
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_if_else_1)

在这个例子中，`a` 大于 `b`，所以第一个条件不成立，`elif` 条件也不成立，所以我们转到 `else` 条件并打印到屏幕“a 大于 b”。

您也可以使用没有 `elif` 的 `else`：

### 实例

```python
a = 200
b = 66
if b > a:
  print("b is greater than a")
else:
  print("b is not greater than a")
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_if_else_2)

## 简写 If

如果只有一条语句要执行，则可以将其与 if 语句放在同一行。

### 实例

单行 if 语句：

```python
a = 200
b = 66
if a > b: print("a is greater than b")
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_if_short)

## 简写 If ... Else

如果只有两条语句要执行，一条用于 if，另一条用于 else，则可以将它们全部放在同一行：

### 实例

单行 if else 语句：

```python
a = 200
b = 66
print("A") if a > b else print("B")
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_if_else_short_1)

您还可以在同一行上使用多个 else 语句：

### 实例

单行 if else 语句，有三个条件：

```python
a = 200
b = 66
print("A") if a > b else print("=") if a == b else print("B")
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_if_else_short_2)

## And

`and` 关键字是一个逻辑运算符，用于组合条件语句：

### 实例

测试 a 是否大于 b，且 c 是否大于 a：

```python
a = 200
b = 66
c = 500
if a > b and c > a:
  print("Both conditions are True")
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_if_and)

## Or

`or` 关键字也是逻辑运算符，用于组合条件语句：

### 实例

测试 a 是否大于 b，或者 a 是否大于 c：

```python
a = 200
b = 66
c = 500
if a > b or a > c:
  print("At least one of the conditions is True")
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_if_or)

## 嵌套 If

您可以在 if 语句中包含 if 语句，这称为嵌套 if 语句。

### 实例

```python
x = 52

if x > 10:
  print("Above ten,")
  if x > 20:
    print("and also above 20!")
  else:
    print("but not above 20.")
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_if_nested)

## pass 语句

if 语句不能为空，但是如果您处于某种原因写了无内容的 if 语句，请使用 pass 语句来避免错误。

### 实例

```python
a = 66
b = 200

if b > a:
  pass
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_if_pass)

# Python While 循环

- [Python If Else](https://www.w3school.com.cn/python/python_conditions.asp)
- [Python For 循环](https://www.w3school.com.cn/python/python_for_loops.asp)

## Python 循环

Python 有两个原始的循环命令：

- `while` 循环
- `for` 循环

## while 循环

如果使用 `while` 循环，只要条件为真，我们就可以执行一组语句。

### 实例

只要 i 小于 7，打印 i：

```python
i = 1
while i < 7:
  print(i)
  i += 1
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_while)

**注释：**请记得递增 `i`，否则循环会永远继续。

`while` 循环需要准备好相关的变量。在这个实例中，我们需要定义一个索引变量 `i`，我们将其设置为 1。

## break 语句

如果使用 `break` 语句，即使 while 条件为真，我们也可以停止循环：

### 实例

在 i 等于 3 时退出循环：

```python
i = 1
while i < 7:
  print(i)
  if i == 3:
    break
  i += 1
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_while_break)

## continue 语句

如果使用 `continue` 语句，我们可以停止当前的迭代，并继续下一个：

### 实例

如果 i 等于 3，则继续下一个迭代：

```python
i = 0
while i < 7:
  i += 1 
  if i == 3:
    continue
  print(i)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_while_continue)

## else 语句

通过使用 else 语句，当条件不再成立时，我们可以运行一次代码块：

### 实例

条件为假时打印一条消息：

```python
i = 1
while i < 6:
  print(i)
  i += 1
else:
  print("i is no longer less than 6")
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_while_else)

# Python For 循环

- [Python While 循环](https://www.w3school.com.cn/python/python_while_loops.asp)
- [Python 函数](https://www.w3school.com.cn/python/python_functions.asp)

## Python For 循环

`for` 循环用于迭代序列（即列表，元组，字典，集合或字符串）。

这与其他编程语言中的 `for` 关键字不太相似，而是更像其他面向对象编程语言中的迭代器方法。

通过使用 `for` 循环，我们可以为列表、元组、集合中的每个项目等执行一组语句。

### 实例

打印 fruits 列表中的每种水果：

```python
fruits = ["apple", "banana", "cherry"]
for x in fruits:
  print(x)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_for)

**提示：**`for` 循环不需要预先设置索引变量。

## 循环遍历字符串

甚至连字符串都是可迭代的对象，它们包含一系列的字符：

### 实例

循环遍历单词 "banana" 中的字母：

```python
for x in "banana":
  print(x)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_for_string)

## break 语句

通过使用 `break` 语句，我们可以在循环遍历所有项目之前停止循环：

### 实例

如果 x 是 "banana"，则退出循环：

```python
fruits = ["apple", "banana", "cherry"]
for x in fruits:
  print(x) 
  if x == "banana":
    break
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_for_break_1)

### 实例

当 x 为 "banana" 时退出循环，但这次在打印之前中断：

```python
fruits = ["apple", "banana", "cherry"]
for x in fruits:
  if x == "banana":
    break
  print(x)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_for_break_2)

## continue 语句

通过使用 `continue` 语句，我们可以停止循环的当前迭代，并继续下一个：

### 实例

不打印香蕉：

```python
fruits = ["apple", "banana", "cherry"]
for x in fruits:
  if x == "banana":
    continue
  print(x)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_for_continue)

## range() 函数

如需循环一组代码指定的次数，我们可以使用 `range()` 函数，

`range()` 函数返回一个数字序列，默认情况下从 0 开始，并递增 1（默认地），并以指定的数字结束。

### 实例

使用 `range()` 函数：

```python
for x in range(10):
  print(x)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_for_range_1)

**注意：**`range(10)` 不是 0 到 10 的值，而是值 0 到 9。

`range()` 函数默认 0 为起始值，不过可以通过添加参数来指定起始值：`range(3, 10)`，这意味着值为 3 到 10（但不包括 10）：

### 实例

使用起始参数：

```python
for x in range(3, 10):
  print(x)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_for_range_2)

`range()` 函数默认将序列递增 1，但是可以通过添加第三个参数来指定增量值：`range(2, 30, 3)`：

### 实例

使用 3 递增序列（默认值为 1）：

```python
for x in range(3, 50, 6):
  print(x)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_for_range_3)

## For 循环中的 Else

for 循环中的 `else` 关键字指定循环结束时要执行的代码块：

### 实例

打印 0 到 9 的所有数字，并在循环结束时打印一条消息：

```python
for x in range(10):
  print(x)
else:
  print("Finally finished!")
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_for_else)

## 嵌套循环

嵌套循环是循环内的循环。

“外循环”每迭代一次，“内循环”将执行一次：

### 实例

打印每个水果的每个形容词：

```python
adj = ["red", "big", "tasty"]
fruits = ["apple", "banana", "cherry"]

for x in adj:
  for y in fruits:
    print(x, y)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_for_nested)

## pass 语句

for 语句不能为空，但是如果您处于某种原因写了无内容的 for 语句，请使用 pass 语句来避免错误。

### 实例

```python
for x in [0, 1, 2]:
  pass
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_for_pass)

# Python 函数

- [Python For 循环](https://www.w3school.com.cn/python/python_for_loops.asp)
- [Python Lambda](https://www.w3school.com.cn/python/python_lambda.asp)

**函数是一种仅在调用时运行的代码块。**

**您可以将数据（称为参数）传递到函数中。**

**函数可以把数据作为结果返回。**

## 创建函数

在 Python 中，使用 `def` 关键字定义函数：

### 实例

```python
def my_function():
  print("Hello from a function")
```

## 调用函数

如需调用函数，请使用函数名称后跟括号：

### 实例

```python
def my_function():
  print("Hello from a function")

my_function()
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_function)

## 参数

信息可以作为参数传递给函数。

参数在函数名后的括号内指定。您可以根据需要添加任意数量的参数，只需用逗号分隔即可。

下面的例子有一个带参数（fname）的函数。当调用此函数时，我们传递一个名字，在函数内部使用它来打印全名：

### 实例

```python
def my_function(fname):
  print(fname + " Gates")

my_function("Bill")
my_function("Steve")
my_function("Elon")
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_function_param_1)

## 默认参数值

下面的例子展示如何使用默认参数值。

如果我们调用了不带参数的函数，则使用默认值：

### 实例

```python
def my_function(country = "China"):
  print("I am from " + country)

my_function("Sweden")
my_function("India")
my_function()
my_function("Brazil")
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_function_param_2)

## 以 List 传参

您发送到函数的参数可以是任何数据类型（字符串、数字、列表、字典等），并且在函数内其将被视为相同数据类型。

例如，如果您将 List 作为参数发送，它到达函数时仍将是 List（列表）：

### 实例

```python
def my_function(food):
  for x in food:
    print(x)

fruits = ["apple", "banana", "cherry"]

my_function(fruits)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_function_param_3)

## 返回值

如需使函数返回值，请使用 `return` 语句：

### 实例

```python
def my_function(x):
  return 5 * x

print(my_function(3))
print(my_function(5))
print(my_function(9))
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_function_return)

## 关键字参数

您还可以使用 key = value 语法发送参数。

参数的顺序无关紧要。

### 实例

```python
def my_function(child3, child2, child1):
  print("The youngest child is " + child3)

my_function(child1 = "Phoebe", child2 = "Jennifer", child3 = "Rory")
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_function_kwargs)

在 Python 文档中，“关键字参数”一词通常简称为 kwargs。

## 任意参数

如果您不知道将传递给您的函数多少个参数，请在函数定义的参数名称前添加 *。

这样，函数将接收一个参数元组，并可以相应地访问各项：

### 实例

如果参数数目未知，请在参数名称前添加 *：

```python
def my_function(*kids):
  print("The youngest child is " + kids[2])

my_function("Phoebe", "Jennifer", "Rory")
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_function_args)

## pass 语句

函数定义不能为空，但是如果您出于某种原因写了无内容的函数定义，请使用 pass 语句来避免错误。

### 实例

```python
def myfunction:
  pass
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_function_pass)

## 递归

Python 也接受函数递归，这意味着定义的函数能够调用自身。

递归是一种常见的数学和编程概念。它意味着函数调用自身。这样做的好处是可以循环访问数据以达成结果。

开发人员应该非常小心递归，因为它可以很容易地编写一个永不终止的，或者使用过量内存或处理器能力的函数。但是，在被正确编写后，递归可能是一种非常有效且数学上优雅的编程方法。

在这个例子中，`tri_recursion()` 是我们定义为调用自身 ("recurse") 的函数。我们使用 k 变量作为数据，每次递归时递减（-1）。当条件不大于 0 时（比如当它为 0 时），递归结束。

对于新的开发人员来说，可能需要一些时间来搞清楚其工作原理，最好的方法是测试并修改它。

### 实例

递归的例子：

```python
def tri_recursion(k):
  if(k>0):
    result = k+tri_recursion(k-1)
    print(result)
  else:
    result = 0
  return result

print("\n\nRecursion Example Results")
tri_recursion(6)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_function_recursion)

# Python Lambda

- [Python 函数](https://www.w3school.com.cn/python/python_functions.asp)
- [Python 数组](https://www.w3school.com.cn/python/python_arrays.asp)

**lambda 函数是一种小的匿名函数。**

**lambda 函数可接受任意数量的参数，但只能有一个表达式。**

## 语法

```
lambda arguments : expression
```

执行表达式并返回结果：

### 实例

一个 lambda 函数，它把作为参数传入的数字加 10，然后打印结果：

```python
x = lambda a : a + 10
print(x(5))
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_lambda_1)

lambda 函数可接受任意数量的参数：

### 实例

一个 lambda 函数，它把参数 a 与参数 b 相乘并打印结果：

```python
x = lambda a, b : a * b
print(x(5, 6))
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_lambda_2)

### 实例

一个 lambda 函数，它把参数 a、b 和 c 相加并打印结果：

```python
x = lambda a, b, c : a + b + c
print(x(5, 6, 2))
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_lambda_3)

## 为何使用 Lambda 函数？

当您把 lambda 用作另一个函数内的匿名函数时，会更好地展现 lambda 的强大能力。

假设您有一个带一个参数的函数定义，并且该参数将乘以未知数字：

```python
def myfunc(n):
  return lambda a : a * n
```

使用该函数定义来创建一个总是使所发送数字加倍的函数：

### 实例

```python
def myfunc(n):
  return lambda a : a * n

mydoubler = myfunc(2)

print(mydoubler(11))
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_lambda_double)

或者，使用相同的函数定义来创建一个总是使您发送的数字增加三倍的函数：

### 实例

```python
def myfunc(n):
  return lambda a : a * n

mytripler = myfunc(3)

print(mytripler(11))
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_lambda_triple)

或者，在同一程序中使用相同的函数定义来生成两个函数：

### 实例

```python
def myfunc(n):
  return lambda a : a * n

mydoubler = myfunc(2)
mytripler = myfunc(3)

print(mydoubler(11)) 
print(mytripler(11))
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_lambda_both)

如果在短时间内需要匿名函数，请使用 lambda 函数。

# Python 数组

- [Python Lambda](https://www.w3school.com.cn/python/python_lambda.asp)
- [Python 类/对象](https://www.w3school.com.cn/python/python_classes.asp)

**请注意，Python 没有内置对数组的支持，但可以使用 Python 列表代替。**

## 数组

数组用于在单个变量中存储多个值：

### 实例

创建一个包含汽车品牌的数组：

```python
cars = ["Porsche", "Volvo", "BMW"]
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_array_1)

## 什么是数组？

数组是一种特殊变量，能够一次包含多个值。

如果您有一个项目列表（例如，汽车品牌列表），将牌子存储在单个变量中可能如下所示：

```python
car1 = "Porsche"
car2 = "Volvo"
car3 = "BMW"
```

但是，如果您想遍历这些品牌并找到特定的汽车品牌怎么办？如果不是 3 辆车，而是 300 辆怎么办？

解决方案是数组！

数组可以在单个名称下保存多个值，您可以通过引用索引号来访问这些值。

## 访问数组元素

通过索引号来引用数组元素。

### 实例

获取首个数组项目的值：

```python
x = cars[0]
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_array_2)

### 实例

修改首个数组项目的值：

```python
cars[0] = "Audi"
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_array_3)

## 数组长度

使用 `len()` 方法来返回数组的长度（数组中的元素数量）。

### 实例

返回 cars 数组中的元素数量：

```python
x = len(cars)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_array_4)

**注释：**数组长度总是比最高的数组索引大一个。

## 循环数组元素

您可以使用 `for in` 循环遍历数组的所有元素。

### 实例

打印 cars 数组中的每个项目：

```python
for x in cars:
  print(x)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_array_5)

## 添加数组元素

您可以使用 `append()` 方法把元素添加到数组中。

### 实例

向 cars 数组再添加一个元素：

```python
cars.append("Audi")
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_array_6)

## 删除数组元素

您可以使用 `pop()` 方法从数组中删除元素。

### 实例

删除 cars 数组的第二个元素：

```python
cars.pop(1)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_array_7)

您也可以使用 `remove()` 方法从数组中删除元素。

### 实例

删除值为 "Volvo" 的元素：

```python
cars.remove("Volvo")
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_array_8)

**注释：**列表的 `remove()` 方法仅删除首次出现的指定值。

## 数组方法

Python 提供一组可以在列表或数组上使用的内建方法。

| 方法                                                                 | 描述                                                 |
| :------------------------------------------------------------------- | :--------------------------------------------------- |
| [append()](https://www.w3school.com.cn/python/ref_list_append.asp)   | 在列表的末尾添加一个元素                             |
| [clear()](https://www.w3school.com.cn/python/ref_list_clear.asp)     | 删除列表中的所有元素                                 |
| [copy()](https://www.w3school.com.cn/python/ref_list_copy.asp)       | 返回列表的副本                                       |
| [count()](https://www.w3school.com.cn/python/ref_list_count.asp)     | 返回具有指定值的元素数量。                           |
| [extend()](https://www.w3school.com.cn/python/ref_list_extend.asp)   | 将列表元素（或任何可迭代的元素）添加到当前列表的末尾 |
| [index()](https://www.w3school.com.cn/python/ref_list_index.asp)     | 返回具有指定值的第一个元素的索引                     |
| [insert()](https://www.w3school.com.cn/python/ref_list_insert.asp)   | 在指定位置添加元素                                   |
| [pop()](https://www.w3school.com.cn/python/ref_list_pop.asp)         | 删除指定位置的元素                                   |
| [remove()](https://www.w3school.com.cn/python/ref_list_remove.asp)   | 删除具有指定值的项目                                 |
| [reverse()](https://www.w3school.com.cn/python/ref_list_reverse.asp) | 颠倒列表的顺序                                       |
| [sort()](https://www.w3school.com.cn/python/ref_list_sort.asp)       | 对列表进行排序                                       |

**注释：**Python 没有内置对数组的的支持，但可以使用 Python 列表代替。

# Python 类和对象

- [Python 数组](https://www.w3school.com.cn/python/python_arrays.asp)
- [Python 继承](https://www.w3school.com.cn/python/python_inheritance.asp)

## Python 类/对象

Python 是一种面向对象的编程语言。

Python 中的几乎所有东西都是对象，拥有属性和方法。

类（Class）类似对象构造函数，或者是用于创建对象的“蓝图”。

## 创建类

如需创建类，请使用 `class` 关键字：

### 实例

使用名为 x 的属性，创建一个名为 MyClass 的类：

```python
class MyClass:
  x = 5
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_class_1)

## 创建对象

现在我们可以使用名为 myClass 的类来创建对象：

### 实例

创建一个名为 p1 的对象，并打印 x 的值：

```python
p1 = MyClass()
print(p1.x)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_class_2)

## __init__() 函数

上面的例子是最简单形式的类和对象，在实际应用程序中并不真正有用。

要理解类的含义，我们必须先了解内置的 `__init__()` 函数。

所有类都有一个名为 __init__() 的函数，它始终在启动类时执行。

使用 __init__() 函数将值赋给对象属性，或者在创建对象时需要执行的其他操作：

### 实例

创建名为 Person 的类，使用 __init__() 函数为 name 和 age 赋值：

```python
class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

p1 = Person("Bill", 63)

print(p1.name)
print(p1.age)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_class_3)

**注释：**每次使用类创建新对象时，都会*自动调用* __init__() 函数。

## 对象方法

对象也可以包含方法。对象中的方法是属于该对象的函数。

让我们在 Person 类中创建方法：

### 实例

插入一个打印问候语的函数，并在 p1 对象上执行它：

```python
class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def myfunc(self):
    print("Hello my name is " + self.name)

p1 = Person("Bill", 63)
p1.myfunc()
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_class_4)

**提示：**self 参数是对类的当前实例的引用，用于访问属于该类的变量。

## self 参数

`self` 参数是对类的当前实例的引用，用于访问属于该类的变量。

它不必被命名为 `self`，您可以随意调用它，但它必须是类中任意函数的*首个参数*：

### 实例

使用单词 mysillyobject 和 abc 代替 self：

```python
class Person:
  def __init__(mysillyobject, name, age):
    mysillyobject.name = name
    mysillyobject.age = age

  def myfunc(abc):
    print("Hello my name is " + abc.name)

p1 = Person("Bill", 63)
p1.myfunc()
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_class_5)

## 修改对象属性

您可以这样修改对象的属性：

### 实例

把 p1 的年龄设置为 40：

```python
p1.age = 40
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_class_6)

## 删除对象属性

您可以使用 `del` 关键字删除对象的属性：

### 实例

删除 p1 对象的 age 属性：

```python
del p1.age
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=demo_python_class_7)

## 删除对象

使用 `del` 关键字删除对象：

### 实例

删除 p1 对象：

```python
del p1
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=demo_python_class_8)

## pass 语句

类定义不能为空，但是如果您处于某种原因写了无内容的类定义语句，请使用 pass 语句来避免错误。

### 实例

```python
class Person:
  pass
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_class_pass)

# Python 继承

- [Python 类/对象](https://www.w3school.com.cn/python/python_classes.asp)
- [Python 迭代](https://www.w3school.com.cn/python/python_iterators.asp)

## Python 继承

继承允许我们定义继承另一个类的所有方法和属性的类。

*父类*是继承的类，也称为基类。

*子类*是从另一个类继承的类，也称为派生类。

## 创建父类

任何类都可以是父类，因此语法与创建任何其他类相同：

### 实例

创建一个名为 Person 的类，其中包含 firstname 和 lastname 属性以及 printname 方法：

```python
class Person:
  def __init__(self, fname, lname):
    self.firstname = fname
    self.lastname = lname

  def printname(self):
    print(self.firstname, self.lastname)

# 使用 Person 来创建对象，然后执行 printname 方法：

x = Person("Bill", "Gates")
x.printname()
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_inheritance_parent)

## 创建子类

要创建从其他类继承功能的类，请在创建子类时将父类作为参数发送：

### 实例

创建一个名为 Student 的类，它将从 Person 类继承属性和方法：

```python
class Student(Person):
  pass
```

**注释：**如果您不想向该类添加任何其他属性或方法，请使用 `pass` 关键字。

现在，Student 类拥有与 Person 类相同的属性和方法。

### 实例

使用 Student 类创建一个对象，然后执行 printname 方法：

```python
x = Student("Elon", "Musk")
x.printname()
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_inheritance_child)

## 添加 __init__() 函数

到目前为止，我们已经创建了一个子类，它继承了父类的属性和方法。

我们想要把 `__init__()` 函数添加到子类（而不是 `pass` 关键字）。

**注释：**每次使用类创建新对象时，都会自动调用 __init__() 函数。

### 实例

为 Student 类添加 __init__() 函数：

```python
class Student(Person):
  def __init__(self, fname, lname):
    # 添加属性等
```

当您添加 __init__() 函数时，子类将不再继承父的 __init__() 函数。

**注释：**子的 __init__() 函数会覆盖对父的 __init__() 函数的继承。

如需保持父的 __init__() 函数的继承，请添加对父的 __init__() 函数的调用：

### 实例

```python
class Student(Person):
  def __init__(self, fname, lname):
    Person.__init__(self, fname, lname)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_inheritance_init)

现在，我们已经成功添加了 __init__() 函数，并保留了父类的继承，我们准备好在 __init__() 函数中添加功能了。

## 使用 super() 函数

Python 还有一个 `super()` 函数，它会使子类从其父继承所有方法和属性：

### 实例

```python
class Student(Person):
  def __init__(self, fname, lname):
    super().__init__(fname, lname)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_inheritance_super)

通过使用 `super()` 函数，您不必使用父元素的名称，它将自动从其父元素继承方法和属性。

## 添加属性

### 实例

把名为 `graduationyear` 的属性添加到 `Student` 类：

```python
class Student(Person):
  def __init__(self, fname, lname):
    super().__init__(fname, lname)
    self.graduationyear = 2019
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_inheritance_add_prop_1)

在这例子中，2019 年应该是一个变量，并在创建 student 对象时传递到 Student 类。为此，请在 __init__() 函数中添加另一个参数：

### 实例

添加 `year` 参数，并在创建对象时传递正确的年份：

```python
class Student(Person):
  def __init__(self, fname, lname, year):
    super().__init__(fname, lname)
    self.graduationyear = year

x = Student("Elon", "Musk", 2019)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_inheritance_add_prop_2)

## 添加方法

### 实例

把名为 `welcome` 的方法添加到 Student 类：

```python
class Student(Person):
  def __init__(self, fname, lname, year):
    super().__init__(fname, lname)
    self.graduationyear = year

  def welcome(self):
    print("Welcome", self.firstname, self.lastname, "to the class of", self.graduationyear)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_inheritance_add_method)

**提示：**如果您在子类中添加一个与父类中的函数同名的方法，则将覆盖父方法的继承。

# Python 迭代器

- [Python 继承](https://www.w3school.com.cn/python/python_inheritance.asp)
- [Python 作用域](https://www.w3school.com.cn/python/python_scope.asp)

## Python 迭代器

迭代器是一种对象，该对象包含值的可计数数字。

迭代器是可迭代的对象，这意味着您可以遍历所有值。

从技术上讲，在 Python 中，迭代器是实现迭代器协议的对象，它包含方法 `__iter__()` 和 `__next__()`。

## 迭代器 VS 可迭代对象（Iterable）

列表、元组、字典和集合都是可迭代的对象。它们是可迭代的容器，您可以从中获取迭代器（Iterator）。

所有这些对象都有用于获取迭代器的 `iter()` 方法：

### 实例

从元组返回一个迭代器，并打印每个值：

```python
mytuple = ("apple", "banana", "cherry")
myit = iter(mytuple)

print(next(myit))
print(next(myit))
print(next(myit))
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_iterator_1)

甚至连字符串都是可迭代的对象，并且可以返回迭代器：

### 实例

字符串也是可迭代的对象，包含一系列字符：

```python
mystr = "banana"
myit = iter(mystr)

print(next(myit))
print(next(myit))
print(next(myit))
print(next(myit))
print(next(myit))
print(next(myit))
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_iterator_2)

## 遍历迭代器

我们也可以使用 for 循环遍历可迭代对象：

### 实例

迭代元组的值：

```python
mytuple = ("apple", "banana", "cherry")

for x in mytuple:
  print(x)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_iterator_loop_1)

### 实例

迭代字符串中的字符：

```python
mystr = "banana"

for x in mystr:
  print(x)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_iterator_loop_2)

**提示：**for 循环实际上创建了一个迭代器对象，并为每个循环执行 `next()` 方法。

## 创建迭代器

要把对象/类创建为迭代器，必须为对象实现 `__iter__()` 和 `__next__()` 方法。

正如您在 Python 类/对象 一章中学到的，所有类都有名为 `__init__()` 的函数，它允许您在创建对象时进行一些初始化。

`__iter__()` 方法的作用相似，您可以执行操作（初始化等），但必须始终返回迭代器对象本身。

`__next__()` 方法也允许您执行操作，并且必须返回序列中的下一个项目。

### 实例

创建一个返回数字的迭代器，从 1 开始，每个序列将增加 1（返回 1、2、3、4、5 等）：

```python
class MyNumbers:
  def __iter__(self):
    self.a = 1
    return self

  def __next__(self):
    x = self.a
    self.a += 1
    return x

myclass = MyNumbers()
myiter = iter(myclass)

print(next(myiter))
print(next(myiter))
print(next(myiter))
print(next(myiter))
print(next(myiter))
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_iterator_create_1)

## StopIteration

如果你有足够的 `next()` 语句，或者在 for 循环中使用，则上面的例子将永远进行下去。

为了防止迭代永远进行，我们可以使用 `StopIteration` 语句。

在 `__next__()` 方法中，如果迭代完成指定的次数，我们可以添加一个终止条件来引发错误：

### 实例

在 20 个迭代之后停止：

```python
class MyNumbers:
  def __iter__(self):
    self.a = 1
    return self

  def __next__(self):
    if self.a <= 20:
      x = self.a
      self.a += 1
      return x
    else:
      raise StopIteration

myclass = MyNumbers()
myiter = iter(myclass)

for x in myiter:
  print(x)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_iterator_create_2)

# Python 作用域

- [Python 迭代](https://www.w3school.com.cn/python/python_iterators.asp)
- [Python 模块](https://www.w3school.com.cn/python/python_modules.asp)

**变量仅在创建区域内可用。这称为作用域。**

## 局部作用域

在函数内部创建的变量属于该函数的局部作用域，并且只能在该函数内部使用。

### 实例

在函数内部创建的变量在该函数内部可用：

```python
def myfunc():
  x = 100
  print(x)

myfunc()
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_scope_1)

### 函数内部的函数

如上例中所示，变量 x 在函数外部不可用，但对于函数内部的任何函数均可用：

#### 实例

能够从函数内的一个函数访问局部变量：

```python
def myfunc():
  x = 100
  def myinnerfunc():
    print(x)
  myinnerfunc()

myfunc()
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_scope_2)

## 全局作用域

在 Python 代码主体中创建的变量是全局变量，属于全局作用域。

全局变量在任何范围（全局和局部）中可用。

### 实例

在函数外部创建的变量是全局变量，任何人都可以使用：

```python
x = 100

def myfunc():
  print(x)

myfunc()

print(x)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_scope_3)

### 命名变量

如果在函数内部和外部操作同名变量，Python 会将它们视为两个单独的变量，一个在全局范围内可用（在函数外部），而一个在局部范围内可用（在函数内部）：

#### 实例

该函数将打印局部变量 x，然后代码还会打印全局变量 x：

```python
x = 100

def myfunc():
  x = 200
  print(x)

myfunc()

print(x)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_scope_4)

## Global 关键字

如果您需要创建一个全局变量，但被卡在本地作用域内，则可以使用 global 关键字。

global 关键字使变量成为全局变量。

### 实例

如果使用 global 关键字，则该变量属于全局范围：

```python
def myfunc():
  global x
  x = 100

myfunc()

print(x)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_scope_5)

另外，如果要在函数内部更改全局变量，也请使用 global 关键字。

### 实例

要在函数内部更改全局变量的值，请使用 global 关键字引用该变量：

```python
x = 100

def myfunc():
  global x
  x = 200

myfunc()

print(x)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_scope_6)

# Python 模块

- [Python 作用域](https://www.w3school.com.cn/python/python_scope.asp)
- [Python 日期](https://www.w3school.com.cn/python/python_datetime.asp)

## 什么是模块？

请思考与代码库类似的模块。

模块是包含一组函数的文件，希望在应用程序中引用。

## 创建模块

如需创建模块，只需将所需代码保存在文件扩展名为 `.py` 的文件中：

### 实例

在名为 `mymodule.py` 的文件中保存代码：

```python
def greeting(name):
  print("Hello, " + name)
```

## 使用模块

现在，我们就可以用 `import` 语句来使用我们刚刚创建的模块：

### 实例

导入名为 `mymodule` 的模块，并调用 `greeting` 函数：

```python
import mymodule

mymodule.greeting("Bill")
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_module_1)

**注释：**如果使用模块中的函数时，请使用以下语法：

```
module_name.function_name
```

## 模块中的变量

模块可以包含已经描述的函数，但也可以包含各种类型的变量（数组、字典、对象等）：

### 实例

在文件 `mymodule.py` 中保存代码：

```python
person1 = {
  "name": "Bill",
  "age": 63,
  "country": "USA"
}
```

### 实例

导入名为 `mymodule` 的模块，并访问 person1 字典：

```python
import mymodule

a = mymodule.person1["age"]
print(a)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_module_2)

## 为模块命名

您可以随意对模块文件命名，但是文件扩展名必须是 `.py`。

## 重命名模块

您可以在导入模块时使用 `as` 关键字创建别名：

### 实例

为 mymodule 创建别名 mx：

```python
import mymodule as mx

a = mx.person1["age"]
print(a)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_module_3)

## 内建模块

Python 中有几个内建模块，您可以随时导入。

### 实例

导入并使用 `platform` 模块：

```python
import platform

x = platform.system()
print(x)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_module_4)

## 使用 dir() 函数

有一个内置函数可以列出模块中的所有函数名（或变量名）。`dir()` 函数：

### 实例

列出属于 platform 模块的所有已定义名称：

```python
import platform

x = dir(platform)
print(x)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_module_5)

**注释：**dir() 函数可用于所有模块，也可用于您自己创建的模块。

## 从模块导入

您可以使用 from 关键字选择仅从模块导入部件。

### 实例

名为 mymodule 的模块拥有一个函数和一个字典：

```python
def greeting(name):
  print("Hello, " + name)

person1 = {
  "name": "Bill",
  "age": 63,
  "country": "USA"
}
```

### 实例

仅从模块导入 person1 字典：

```python
from mymodule import person1

print (person1["age"])
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_module_6)

**提示：**在使用 from 关键字导入时，请勿在引用模块中的元素时使用模块名称。示例：person1["age"]，而不是 mymodule.person1["age"]。

# Python 日期

- [Python 模块](https://www.w3school.com.cn/python/python_modules.asp)
- [Python JSON](https://www.w3school.com.cn/python/python_json.asp)

## Python 日期

Python 中的日期不是其自身的数据类型，但是我们可以导入名为 `datetime` 的模块，把日期视作日期对象进行处理。

### 实例

导入 `datetime` 模块并显示当前日期：

```python
import datetime

x = datetime.datetime.now()
print(x)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_datetime_1)

## 日期输出

如果我们执行上面的代码，结果将是：

```
2019-08-14 12:52:55.817273
```

日期包含年、月、日、小时、分钟、秒和微秒。

`datetime` 模块有许多方法可以返回有关日期对象的信息。

以下是一些例子，您将在本章稍后详细学习它们：

### 实例

返回 weekday 的名称和年份：

```python
import datetime

x = datetime.datetime.now()

print(x.year)
print(x.strftime("%A"))
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_datetime_2)

## 创建日期对象

如需创建日期，我们可以使用 datetime 模块的 `datetime()` 类（构造函数）。

`datetime()` 类需要三个参数来创建日期：年、月、日。

### 实例

创建日期对象：

```python
import datetime

x = datetime.datetime(2020, 5, 17)

print(x)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_datetime_3)

`datetime()` 类还接受时间和时区（小时、分钟、秒、微秒、tzone）的参数，不过它们是可选的，默认值为 `0`，（时区默认为 `None`）。

## strftime() 方法

`datetime` 对象拥有把日期对象格式化为可读字符串的方法。

该方法称为 `strftime()`，并使用一个 `format` 参数来指定返回字符串的格式：

### 实例

显示月份的名称：

```python
import datetime

x = datetime.datetime(2019, 10, 1)

print(x.strftime("%B"))
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_datetime_strftime)

### 所有合法格式代码的参考：

| 指令 | 描述                            | 实例                     | TIY                                                                                |
| :--- | :------------------------------ | :----------------------- | :--------------------------------------------------------------------------------- |
| %a   | Weekday，短版本                 | Wed                      | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_datetime_strftime_a_1)     |
| %A   | Weekday，完整版本               | Wednesday                | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_datetime_strftime_a_2)     |
| %w   | Weekday，数字 0-6，0 为周日     | 3                        | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_datetime_strftime_w_1)     |
| %d   | 日，数字 01-31                  | 31                       | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_datetime_strftime_d)       |
| %b   | 月名称，短版本                  | Dec                      | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_datetime_strftime_b_1)     |
| %B   | 月名称，完整版本                | December                 | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_datetime_strftime_b_2)     |
| %m   | 月，数字01-12                   | 12                       | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_datetime_strftime_m_1)     |
| %y   | 年，短版本，无世纪              | 18                       | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_datetime_strftime_y_1)     |
| %Y   | 年，完整版本                    | 2018                     | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_datetime_strftime_y_2)     |
| %H   | 小时，00-23                     | 17                       | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_datetime_strftime_h)       |
| %I   | 小时，00-12                     | 05                       | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_datetime_strftime_i)       |
| %p   | AM/PM                           | PM                       | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_datetime_strftime_p)       |
| %M   | 分，00-59                       | 41                       | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_datetime_strftime_m_2)     |
| %S   | 秒，00-59                       | 08                       | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_datetime_strftime_s)       |
| %f   | 微妙，000000-999999             | 548513                   | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_datetime_strftime_f)       |
| %z   | UTC 偏移                        | +0100                    | 试一试                                                                             |
| %Z   | 时区                            | CST                      | 试一试                                                                             |
| %j   | 天数，001-366                   | 365                      | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_datetime_strftime_j)       |
| %U   | 周数，每周的第一天是周日，00-53 | 52                       | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_datetime_strftime_u)       |
| %W   | 周数，每周的第一天是周一，00-53 | 52                       | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_datetime_strftime_w_2)     |
| %c   | 日期和时间的本地版本            | Mon Dec 31 17:41:00 2018 | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_datetime_strftime_c)       |
| %x   | 日期的本地版本                  | 12/31/18                 | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_datetime_strftime_x_1)     |
| %X   | 时间的本地版本                  | 17:41:00                 | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_datetime_strftime_x_2)     |
| %%   | A % character                   | %                        | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_datetime_strftime_percent) |

# Python JSON

- [Python 日期](https://www.w3school.com.cn/python/python_datetime.asp)
- [Python RegEx](https://www.w3school.com.cn/python/python_regex.asp)

**JSON 是用于存储和交换数据的语法。**

**JSON 是用 JavaScript 对象表示法（JavaScript object notation）编写的文本。**

## Python 中的 JSON

Python 有一个名为 `json` 的内置包，可用于处理 JSON 数据。

### 实例

导入 `json` 模块：

```python
import json
```

## 解析 JSON - 把 JSON 转换为 Python

若有 JSON 字符串，则可以使用 `json.loads()` 方法对其进行解析。

结果将是 Python 字典。

### 实例

把 JSON 转换为 Python：

```python
import json

# 一些 JSON:
x =  '{ "name":"Bill", "age":63, "city":"Seatle"}'

# 解析 x:
y = json.loads(x)

# 结果是 Python 字典：
print(y["age"])
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_json)

## 把 Python 转换为 JSON

若有 Python 对象，则可以使用 `json.dumps()` 方法将其转换为 JSON 字符串。

### 实例

把 Python 转换为 JSON：

```python
import json

# Python 对象（字典）：
x = {
  "name": "Bill",
  "age": 63,
  "city": "Seatle"
}

# 转换为 JSON：
y = json.dumps(x)

# 结果是 JSON 字符串：
print(y)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_json_from_python)

您可以把以下类型的 Python 对象转换为 JSON 字符串：

- dict
- list
- tuple
- string
- int
- float
- True
- False
- None

### 实例

将 Python 对象转换为 JSON 字符串，并打印值：

```python
import json

print(json.dumps({"name": "Bill", "age": 63}))
print(json.dumps(["apple", "bananas"]))
print(json.dumps(("apple", "bananas")))
print(json.dumps("hello"))
print(json.dumps(42))
print(json.dumps(31.76))
print(json.dumps(True))
print(json.dumps(False))
print(json.dumps(None))
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_json_from_python_all)

当 Python 转换为 JSON 时，Python 对象会被转换为 JSON（JavaScript）等效项：

| Python | JSON   |
| ------ | ------ |
| dict   | Object |
| list   | Array  |
| tuple  | Array  |
| str    | String |
| int    | Number |
| float  | Number |
| True   | true   |
| False  | false  |
| None   | null   |

### 实例

转换包含所有合法数据类型的 Python 对象：

```python
import json

x = {
  "name": "Bill",
  "age": 63,
  "married": True,
  "divorced": False,
  "children": ("Jennifer","Rory","Phoebe"),
  "pets": None,
  "cars": [
    {"model": "Porsche", "mpg": 38.2},
    {"model": "BMW M5", "mpg": 26.9}
  ]
}

print(json.dumps(x))
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_json_from_python_all_in_one)

## 格式化结果

上面的实例打印一个 JSON 字符串，但它不是很容易阅读，没有缩进和换行。

`json.dumps()` 方法提供了令结果更易读的参数：

### 实例

使用 `indent` 参数定义缩进数：

```python
json.dumps(x, indent=4)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_json_from_python_indent)

您还可以定义分隔符，默认值为（", ", ": "），这意味着使用逗号和空格分隔每个对象，使用冒号和空格将键与值分开：

### 实例

使用 `separators` 参数来更改默认分隔符：

```python
json.dumps(x, indent=4, separators=(". ", " = "))
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_json_from_python_separators)

## 对结果排序

`json.dumps()` 方法提供了对结果中的键进行排序的参数：

### 实例

使用 `sort_keys` 参数来指定是否应对结果进行排序：

```python
json.dumps(x, indent=4, sort_keys=True)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_json_from_python_sort_keys)

# Python RegEx

- [Python JSON](https://www.w3school.com.cn/python/python_json.asp)
- [Python PIP](https://www.w3school.com.cn/python/python_pip.asp)

**RegEx 或正则表达式是形成搜索模式的字符序列。**

**RegEx 可用于检查字符串是否包含指定的搜索模式。**

## RegEx 模块

Python 提供名为 `re` 的内置包，可用于处理正则表达式。

导入 `re` 模块：

```python
import re
```

## Python 中的 RegEx

导入 `re` 模块后，就可以开始使用正则表达式了：

### 实例

检索字符串以查看它是否以 "China" 开头并以 "country" 结尾：

```python
import re

txt = "China is a great country"
x = re.search("^China.*country$", txt)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_regex)

## RegEx 函数

`re` 模块提供了一组函数，允许我们检索字符串以进行匹配：

| 函数    | 描述                                              |
| :------ | :------------------------------------------------ |
| findall | 返回包含所有匹配项的列表                          |
| search  | 如果字符串中的任意位置存在匹配，则返回 Match 对象 |
| split   | 返回在每次匹配时拆分字符串的列表                  |
| sub     | 用字符串替换一个或多个匹配项                      |

## 元字符

元字符是具有特殊含义的字符：

| 字符 | 描述                                 | 示例           | TIY                                                                   |
| :--- | :----------------------------------- | :------------- | :-------------------------------------------------------------------- |
| []   | 一组字符                             | "[a-m]"        | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_regex_meta_1) |
| \    | 示意特殊序列（也可用于转义特殊字符） | "\d"           | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_regex_meta_2) |
| .    | 任何字符（换行符除外）               | "he..o"        | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_regex_meta_3) |
| ^    | 起始于                               | "^hello"       | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_regex_meta_4) |
| $    | 结束于                               | "world$"       | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_regex_meta_5) |
| *    | 零次或多次出现                       | "aix*"         | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_regex_meta_6) |
| +    | 一次或多次出现                       | "aix+"         | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_regex_meta_7) |
| {}   | 确切地指定的出现次数                 | "al{2}"        | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_regex_meta_8) |
| \|   | 两者任一                             | "falls\|stays" | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_regex_meta_9) |
| ()   | 捕获和分组                           |                |                                                                       |

## 特殊序列

特殊序列指的是 `\` 后跟下表中的某个字符，拥有特殊含义：

| 字符 | 描述                                                                                             | 示例              | TIY                                                                                                                                         |
| :--- | :----------------------------------------------------------------------------------------------- | :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| \A   | 如果指定的字符位于字符串的开头，则返回匹配项                                                     | "\AThe"           | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_regex_seq_1)                                                                        |
| \b   | 返回指定字符位于单词的开头或末尾的匹配项                                                         | r"\bain" r"ain\b" | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_regex_seq_2) [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_regex_seq_2_2) |
| \B   | 返回指定字符存在的匹配项，但不在单词的开头（或结尾处）                                           | r"\Bain" r"ain\B" | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_regex_seq_3) [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_regex_seq_3_2) |
| \d   | 返回字符串包含数字的匹配项（数字 0-9）                                                           | "\d"              | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_regex_seq_4)                                                                        |
| \D   | 返回字符串不包含数字的匹配项                                                                     | "\D"              | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_regex_seq_5)                                                                        |
| \s   | 返回字符串包含空白字符的匹配项                                                                   | "\s"              | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_regex_seq_6)                                                                        |
| \S   | 返回字符串不包含空白字符的匹配项                                                                 | "\S"              | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_regex_seq_7)                                                                        |
| \w   | 返回一个匹配项，其中字符串包含任何单词字符 （从 a 到 Z 的字符，从 0 到 9 的数字和下划线 _ 字符） | "\w"              | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_regex_seq_8)                                                                        |
| \W   | 返回一个匹配项，其中字符串不包含任何单词字符                                                     | "\W"              | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_regex_seq_9)                                                                        |
| \Z   | 如果指定的字符位于字符串的末尾，则返回匹配项                                                     | "Spain\Z"         | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_regex_seq_10)                                                                       |

## 集合（Set）

集合（Set）是一对方括号 `[]` 内的一组字符，具有特殊含义：

| 集合       | 描述                                                                                          | 试一试                                                               |
| :--------- | :-------------------------------------------------------------------------------------------- | :------------------------------------------------------------------- |
| [arn]      | 返回一个匹配项，其中存在指定字符（a，r 或 n）之一                                             | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_regex_set_1) |
| [a-n]      | 返回字母顺序 a 和 n 之间的任意小写字符匹配项                                                  | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_regex_set_2) |
| [^arn]     | 返回除 a、r 和 n 之外的任意字符的匹配项                                                       | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_regex_set_3) |
| [0123]     | 返回存在任何指定数字（0、1、2 或 3）的匹配项                                                  | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_regex_set_4) |
| [0-9]      | 返回 0 与 9 之间任意数字的匹配                                                                | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_regex_set_5) |
| [0-5][0-9] | 返回介于 0 到 9 之间的任何数字的匹配项                                                        | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_regex_set_6) |
| [a-zA-Z]   | 返回字母顺序 a 和 z 之间的任何字符的匹配，小写或大写                                          | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_regex_set_7) |
| [+]        | 在集合中，+、*、.、\|、()、$、{} 没有特殊含义，因此 [+] 表示：返回字符串中任何 + 字符的匹配项 | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=python_regex_set_8) |

## findall() 函数

`findall()` 函数返回包含所有匹配项的列表。

### 实例

打印所有匹配的列表：

```python
import re

str = "China is a great country"
x = re.findall("a", str)
print(x)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_regex_findall_1)

这个列表以被找到的顺序包含匹配项。

如果未找到匹配项，则返回空列表：

### 实例

如果未找到匹配，则返回空列表：

```python
import re

str = "China is a great country"
x = re.findall("USA", str)
print(x)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_regex_findall_2)

## search() 函数

`search()` 函数搜索字符串中的匹配项，如果存在匹配则返回 Match 对象。

如果有多个匹配，则仅返回首个匹配项：

### 实例

在字符串中搜索第一个空白字符：

```python
import re

str = "China is a great country"
x = re.search("\s", str)

print("The first white-space character is located in position:", x.start())
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_regex_search_1)

如果未找到匹配，则返回值 `None`：

### 实例

进行不返回匹配的检索：

```python
import re

str = "China is a great country"
x = re.search("USA", str)
print(x)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_regex_search_2)

## split() 函数

`split()` 函数返回一个列表，其中字符串在每次匹配时被拆分：

### 实例

在每个空白字符处进行拆分：

```python
import re

str = "China is a great country"
x = re.split("\s", str)
print(x)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_regex_split_1)

您可以通过指定 `maxsplit` 参数来控制出现次数：

### 实例

仅在首次出现时拆分字符串：

```python
import re

str = "China is a great country"
x = re.split("\s", str, 1)
print(x)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_regex_split_2)

## sub() 函数

`sub()` 函数把匹配替换为您选择的文本：

### 实例

用数字 9 替换每个空白字符：

```python
import re

str = "China is a great country"
x = re.sub("\s", "9", str)
print(x)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_regex_sub_1)

您可以通过指定 `count` 参数来控制替换次数：

### 实例

替换前两次出现：

```python
import re

str = "China is a great country"
x = re.sub("\s", "9", str, 2)
print(x)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_regex_sub_2)

## Match 对象

Match 对象是包含有关搜索和结果信息的对象。

**注释：**如果没有匹配，则返回值 `None`，而不是 Match 对象。

### 实例

执行会返回 Match 对象的搜索：

```python
import re

str = "China is a great country"
x = re.search("a", str)
print(x) # 将打印一个对象
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_regex_match)

Match 对象提供了用于取回有关搜索及结果信息的属性和方法：

- `span()` 返回的元组包含了匹配的开始和结束位置
- `.string` 返回传入函数的字符串
- `group()` 返回匹配的字符串部分

### 实例

打印首个匹配出现的位置（开始和结束位置）。

正则表达式查找以大写 "C" 开头的任何单词：

```python
import re

str = "China is a great country"
x = re.search(r"\bC\w+", str)
print(x.span())
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_regex_match_span)

### 实例

打印传入函数的字符串：

```python
import re

str = "China is a great country"
x = re.search(r"\bC\w+", str)
print(x.string)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_regex_match_string)

### 实例

打印匹配的字符串部分。

正则表达式查找以大写 "C" 开头的任何单词：

```python
import re

str = "China is a great country"
x = re.search(r"\bC\w+", str)
print(x.group())
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_regex_match_group)

**注释：**如果没有匹配项，则返回值 `None`，而不是 Match 对象。

# Python PIP

- [Python RegEx](https://www.w3school.com.cn/python/python_regex.asp)
- [Python Try Except](https://www.w3school.com.cn/python/python_try_except.asp)

## 什么是 PIP？

PIP 是 Python 包或模块的包管理器。

**注释：**如果您使用的是 Python 3.4 或更高版本，则默认情况下会包含 PIP。

## 什么是包（Package）？

包中包含模块所需的所有文件。

模块是您可以包含在项目中的 Python 代码库。

## 检查是否已安装 PIP

将命令行导航到 Python 脚本目录所在的位置，然后键入以下内容：

### 实例

检查 PIP 版本：

```
C:\Users\Your Name\AppData\Local\Programs\Python\Python36-32\Scripts>pip --version
```

## 安装 PIP

如果尚未安装 PIP，可以从此页面下载并安装：https://pypi.org/project/pip/

## 下载包

下载包非常容易。

打开命令行界面并告诉 PIP 下载您需要的软件包。

将命令行导航到 Python 脚本目录的位置，然后键入以下内容：

### 实例

下载名为 "camelcase" 的包：

```
C:\Users\Your Name\AppData\Local\Programs\Python\Python36-32\Scripts>pip install camelcase
```

现在，您已经下载并安装了第一个包！

## 使用包

安装包后，即可使用。

把 "camelcase" 包导入您的项目中。

### 实例

导入并使用 "camelcase"：

```python
import camelcase

c = camelcase.CamelCase()

txt = "hello world"

print(c.hump(txt))
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_camelcase)

## 查找包

在 https://pypi.org/，您可以找到更多的包。

## 删除包

请使用 `uninstall` 命令来删除包：

### 实例

卸载名为 "camelcase" 的包：

```
C:\Users\Your Name\AppData\Local\Programs\Python\Python36-32\Scripts>pip uninstall camelcase
```

PIP 包管理器会要求您确认是否需要删除 camelcase 包：

```
Uninstalling camelcase-02.1:
  Would remove:
    c:\...\python\python36-32\lib\site-packages\camecase-0.2-py3.6.egg-info
    c:\...\python\python36-32\lib\site-packages\camecase\*
Proceed (y/n)?
```

按 `y` 键，包就会被删除。

## 列出包

请使用 `list` 命令列出系统上安装的所有软件包：

### 实例

列出已安装的包：

```
C:\Users\Your Name\AppData\Local\Programs\Python\Python36-32\Scripts>pip list
```

结果：

```
Package         Version
-----------------------
camelcase       0.2
mysql-connector 2.1.6
pip             18.1
pymongo         3.6.1
setuptools      39.0.1
```

# Python Try Except

- [Python PIP](https://www.w3school.com.cn/python/python_pip.asp)
- [Python 命令输入](https://www.w3school.com.cn/python/python_cmd_input.asp)

**`try` 块允许您测试代码块以查找错误。**

**`except` 块允许您处理错误。**

**`finally` 块允许您执行代码，无论 try 和 except 块的结果如何。**

## 异常处理

当我们调用 Python 并发生错误或异常时，通常会停止并生成错误消息。

可以使用 `try` 语句处理这些异常：

### 实例

try 块将生成异常，因为 x 未定义：

```python
try:
  print(x)
except:
  print("An exception occurred")
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_try_except_1)

由于 try 块引发错误，因此会执行 except 块。

如果没有 try 块，程序将崩溃并引发错误：

### 实例

该语句将引发错误，因为未定义 x：

```python
print(x)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_try_except_error)

## 多个异常

您可以根据需要定义任意数量的 exception 块，例如，假如您要为特殊类型的错误执行特殊代码块：

### 实例

如果 try 块引发 `NameError`，则打印一条消息，如果是其他错误则打印另一条消息：

```python
try:
  print(x)
except NameError:
  print("Variable x is not defined")
except:
  print("Something else went wrong")
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_try_except_2)

## Else

如果没有引发错误，那么您可以使用 `else` 关键字来定义要执行的代码块：

### 实例

在本例中，`try` 块不会生成任何错误：

```python
try:
  print("Hello")
except:
  print("Something went wrong")
else:
  print("Nothing went wrong")
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_try_except_3)

## Finally

如果指定了 `finally` 块，则无论 try 块是否引发错误，都会执行 finally 块。

### 实例

```python
try:
  print(x)
except:
  print("Something went wrong")
finally:
  print("The 'try except' is finished")
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_try_except_4)

这对于关闭对象并清理资源非常有用：

### 实例

试图打开并写入不可写的文件：

```python
try:
  f = open("demofile.txt")
  f.write("Lorum Ipsum")
except:
  print("Something went wrong when writing to the file")
finally:
  f.close()
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_try_except_5)

程序可以继续，而且不会打开文件对象。

## 引发异常

作为 Python 开发者，您可以选择在条件发生时抛出异常。

如需抛出（引发）异常，请使用 `raise` 关键词。

### 实例

假如 x 小于 0，则引发异常并终止程序：

```python
x = -1

if x < 0:
  raise Exception("Sorry, no numbers below zero")
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=demo_python_ref_keyword_raise_1)

`raise` 关键字用于引发异常。

您能够定义所引发异常的类型、以及打印给用户的文本。

### 实例

如果 x 不是整数，则引发 TypeError：

```python
x = "hello"

if not type(x) is int:
  raise TypeError("Only integers are allowed")
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=demo_python_ref_keyword_raise_2)

# Python 命令行输入

- [Python Try Except](https://www.w3school.com.cn/python/python_try_except.asp)
- [Python 字符串格式化](https://www.w3school.com.cn/python/python_string_formatting.asp)

## 命令行输入

Python 允许命令行输入。

这意味着我们能够要求用户输入。

Python 3.6 中的方法与 Python 2.7 略有不同。

Python 3.6 使用 `input()` 方法。

Python 2.7 使用 `raw_input()` 方法。

下面的例子会询问用户的姓名，当您输入名字时，名字将打印到屏幕上：

### Python 3.6

```python
print("Enter your name:")
x = input()
print("Hello ", x)
```

### Python 2.7

```python
print("Enter your name:")
x = raw_input()
print("Hello ", x)
```

将此文件另存为 `demo_string_input.py`，并通过命令行加载它：

```
C:\Users\Your Name>python demo_string_input.py
```

我们的程序会提示用户输入一个字符串：

```
Enter your name:
```

现在用户输入姓名：

```
Bill
```

然后，程序会打印一段消息：

```
Hello, Bill
```

# Python 字符串格式化

- [Python 命令输入](https://www.w3school.com.cn/python/python_cmd_input.asp)
- [Python 文件打开](https://www.w3school.com.cn/python/python_file_handling.asp)

**为了确保字符串按预期显示，我们可以使用 `format()` 方法对结果进行格式化。**

## 字符串 format()

`format()` 方法允许您格式化字符串的选定部分。

有时文本的一部分是你无法控制的，也许它们来自数据库或用户输入？

要控制此类值，请在文本中添加占位符（花括号 `{}`），然后通过 format() 方法运行值：

### 实例

添加要显示价格的占位符：

```python
price = 52
txt = "The price is {} dollars"
print(txt.format(price))
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_string_formatting_1)

您可以在花括号内添加参数以指定如何转换值：

### 实例

将价格格式化为带有两位小数的数字：

```python
txt = "The price is {:.2f} dollars"
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_string_formatting_2)

查看字符串 format() 参考手册中的所有格式类型。

## 多个值

如需使用更多值，只需向 format() 方法添加更多值：

```python
print(txt.format(price, itemno, count))
```

并添加更多占位符：

### 实例

```python
quantity = 3
itemno = 567
price = 52
myorder = "I want {} pieces of item number {} for {:.2f} dollars."
print(myorder.format(quantity, itemno, price))
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_string_formatting_3)

## 索引号

您可以使用索引号（花括号 `{0}` 内的数字）来确保将值放在正确的占位符中：

### 实例

```python
quantity = 3
itemno = 567
price = 52
myorder = "I want {0} pieces of item number {1} for {2:.2f} dollars."
print(myorder.format(quantity, itemno, price))
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_string_formatting_4)

此外，如果要多次引用相同的值，请使用索引号：

### 实例

```python
age = 63
name = "Bill"
txt = "His name is {1}. {1} is {0} years old."
print(txt.format(age, name))
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_string_formatting_5)

## 命名索引

您还可以通过在花括号 `{carname}` 中输入名称来使用命名索引，但是在传递参数值 txt.format(carname = "Ford") 时，必须使用名称：

### 实例

```python
myorder = "I have a {carname}, it is a {model}."
print(myorder.format(carname = "Porsche", model = "911"))
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_string_formatting_6)

# Python 文件处理

- [Python 字符串格式化](https://www.w3school.com.cn/python/python_string_formatting.asp)
- [Python 文件读取](https://www.w3school.com.cn/python/python_file_open.asp)

**文件处理是任何 Web 应用程序的重要组成部分。**

**Python 有几个用于创建、读取、更新和删除文件的函数。**

## 文件处理

在 Python 中使用文件的关键函数是 `open()` 函数。

`open()` 函数有两个参数：文件名和模式。

有四种打开文件的不同方法（模式）：

- `"r"` - 读取 - 默认值。打开文件进行读取，如果文件不存在则报错。
- `"a"` - 追加 - 打开供追加的文件，如果不存在则创建该文件。
- `"w"` - 写入 - 打开文件进行写入，如果文件不存在则创建该文件。
- `"x"` - 创建 - 创建指定的文件，如果文件存在则返回错误。

此外，您可以指定文件是应该作为二进制还是文本模式进行处理。

- `"t"` - 文本 - 默认值。文本模式。
- `"b"` - 二进制 - 二进制模式（例如图像）。

## 语法

此外，您可以指定文件是应该作为二进制还是文本模式进行处理：

```python
f = open("demofile.txt")
```

以上代码等同于：

```python
f = open("demofile.txt", "rt")
```

因为 `"r"` (读取)和 `"t"` (文本)是默认值，所以不需要指定它们。

**注释：**请确保文件存在，否则您将收到错误消息。

# Python 文件打开

- [Python 文件打开](https://www.w3school.com.cn/python/python_file_handling.asp)
- [Python 文件写入/创建](https://www.w3school.com.cn/python/python_file_write.asp)

## 在服务器上打开文件

假设我们有以下文件，位于与 Python 相同的文件夹中：

### demofile.txt

```python
Hello! Welcome to demofile.txt
This file is for testing purposes.
Good Luck!
```

如需打开文件，请使用内建的 `open()` 函数。

`open()` 函数返回文件对象，此对象有一个 `read()` 方法用于读取文件的内容：

### 实例

```python
f = open("demofile.txt", "r")
print(f.read())
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_file_open_1)

## 只读取文件的一部分

默认情况下，`read()` 方法返回整个文本，但您也可以指定要返回的字符数：

### 实例

返回文件中的前五个字符：

```python
f = open("demofile.txt", "r")
print(f.read(5))
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_file_open_2)

## 读行

您可以使用 `readline()` 方法返回一行：

### 实例

读取文件中的一行：

```python
f = open("demofile.txt", "r")
print(f.readline())
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_file_readline_1)

通过两次调用 `readline()`，您可以读取前两行：

### 实例

读取文件中的两行：

```python
f = open("demofile.txt", "r")
print(f.readline())
print(f.readline())
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_file_readline_2)

通过循环遍历文件中的行，您可以逐行读取整个文件：

### 实例

逐行遍历文件：

```python
f = open("demofile.txt", "r")
for x in f:
  print(x)
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_file_readline_3)

## 关闭文件

完成后始终关闭文件是一个好习惯。

### 实例

完成后关闭文件：

```python
f = open("demofile.txt", "r")
print(f.readline())
f.close()
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=python_file_close)

**注释：**在某些情况下，由于缓冲，您应该始终关闭文件，在关闭文件之前，对文件所做的更改可能不会显示。

# Python 文件写入

- [Python 文件读取](https://www.w3school.com.cn/python/python_file_open.asp)
- [Python 文件删除](https://www.w3school.com.cn/python/python_file_remove.asp)

## 写入已有文件

如需写入已有的文件，必须向 `open()` 函数添加参数：

- `"a"` - 追加 - 会追加到文件的末尾
- `"w"` - 写入 - 会覆盖任何已有的内容

## 实例

打开文件 "demofile2.txt" 并将内容追加到文件中：

```python
f = open("demofile2.txt", "a")
f.write("Now the file has more content!")
f.close()

# 追加后，打开并读取该文件：
f = open("demofile2.txt", "r")
print(f.read())
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=demo_python_file_append)

### 实例

打开文件 "demofile3.txt" 并覆盖内容：

```python
f = open("demofile3.txt", "w")
f.write("Woops! I have deleted the content!")
f.close()

# 写入后，打开并读取该文件：
f = open("demofile3.txt", "r")
print(f.read())
```

[运行实例](https://www.w3school.com.cn/tiy/t.asp?f=demo_python_file_write)

**注释：**"w" 方法会覆盖全部内容。

## 创建新文件

如需在 Python 中创建新文件，请使用 `open()` 方法，并使用以下参数之一：

- `"x"` - 创建 - 将创建一个文件，如果文件存在则返回错误
- `"a"` - 追加 - 如果指定的文件不存在，将创建一个文件
- `"w"` - 写入 - 如果指定的文件不存在，将创建一个文件

### 实例

创建名为 "myfile.txt" 的文件：

```python
f = open("myfile.txt", "x")
```

结果：已创建新的空文件！

### 实例

如果不存在，则创建新文件：

```python
f = open("myfile.txt", "w")
```

# Python 删除文件

- [Python 文件写入/创建](https://www.w3school.com.cn/python/python_file_write.asp)
- [NumPy 简介](https://www.w3school.com.cn/python/numpy_intro.asp)

## 删除文件

如需删除文件，必须导入 OS 模块，并运行其 `os.remove()` 函数：

### 实例

删除文件 "demofile.txt"：

```python
import os
os.remove("demofile.txt")
```

## 检查文件是否存在

为避免出现错误，您可能需要在尝试删除文件之前检查该文件是否存在：

### 实例

检查文件是否存在，然后删除它：

```python
import os
if os.path.exists("demofile.txt"):
  os.remove("demofile.txt")
else:
  print("The file does not exist")
```

## 删除文件

如需删除整个文件夹，请使用 `os.rmdir()` 方法：

### 实例

删除文件夹 "myfolder"：

```python
import os
os.rmdir("myfolder")
```

**提示：**您只能删除空文件夹。

# Python 内建函数

- [Python 参考概览](https://www.w3school.com.cn/python/python_reference.asp)
- [Python 字符串方法](https://www.w3school.com.cn/python/python_ref_string.asp)

**Python 有一组内建函数。**

| 函数                                                                       | 描述                                                     |
| :------------------------------------------------------------------------- | :------------------------------------------------------- |
| [abs()](https://www.w3school.com.cn/python/ref_func_abs.asp)               | 返回数的绝对值                                           |
| [all()](https://www.w3school.com.cn/python/ref_func_all.asp)               | 如果可迭代对象中的所有项均为 true，则返回 True。         |
| [any()](https://www.w3school.com.cn/python/ref_func_any.asp)               | 如果可迭代对象中的任何项为 true，则返回 True。           |
| [ascii()](https://www.w3school.com.cn/python/ref_func_ascii.asp)           | 返回对象的可读版本。用转义字符替换 none-ascii 字符。     |
| [bin()](https://www.w3school.com.cn/python/ref_func_bin.asp)               | 返回数的二进制版本。                                     |
| [bool()](https://www.w3school.com.cn/python/ref_func_bool.asp)             | 返回指定对象的布尔值。                                   |
| [bytearray()](https://www.w3school.com.cn/python/ref_func_bytearray.asp)   | 返回字节数组。                                           |
| [bytes()](https://www.w3school.com.cn/python/ref_func_bytes.asp)           | 返回字节对象。                                           |
| [callable()](https://www.w3school.com.cn/python/ref_func_callable.asp)     | 如果指定的对象是可调用的，则返回 True，否则返回 False。  |
| [chr()](https://www.w3school.com.cn/python/ref_func_chr.asp)               | 返回指定 Unicode 代码中的字符。                          |
| classmethod()                                                              | 把方法转换为类方法。                                     |
| [compile()](https://www.w3school.com.cn/python/ref_func_compile.asp)       | 把指定的源作为对象返回，准备执行。                       |
| [complex()](https://www.w3school.com.cn/python/ref_func_complex.asp)       | 返回复数。                                               |
| [delattr()](https://www.w3school.com.cn/python/ref_func_delattr.asp)       | 从指定的对象中删除指定的属性（属性或方法）。             |
| [dict()](https://www.w3school.com.cn/python/ref_func_dict.asp)             | 返回字典（数组）。                                       |
| [dir()](https://www.w3school.com.cn/python/ref_func_dir.asp)               | 返回指定对象的属性和方法的列表。                         |
| [divmod()](https://www.w3school.com.cn/python/ref_func_divmod.asp)         | 当参数1除以参数2时，返回商和余数。                       |
| [enumerate()](https://www.w3school.com.cn/python/ref_func_enumerate.asp)   | 获取集合（例如元组）并将其作为枚举对象返回。             |
| [eval()](https://www.w3school.com.cn/python/ref_func_eval.asp)             | 评估并执行表达式。                                       |
| [exec()](https://www.w3school.com.cn/python/ref_func_exec.asp)             | 执行指定的代码（或对象）。                               |
| [filter()](https://www.w3school.com.cn/python/ref_func_filter.asp)         | 使用过滤器函数排除可迭代对象中的项目。                   |
| [float()](https://www.w3school.com.cn/python/ref_func_float.asp)           | 返回浮点数。                                             |
| [format()](https://www.w3school.com.cn/python/ref_func_format.asp)         | 格式化指定值。                                           |
| [frozenset()](https://www.w3school.com.cn/python/ref_func_frozenset.asp)   | 返回 frozenset 对象。                                    |
| [getattr()](https://www.w3school.com.cn/python/ref_func_getattr.asp)       | 返回指定属性的值（属性或方法）。                         |
| [globals()](https://www.w3school.com.cn/python/ref_func_globals.asp)       | 以字典返回当前全局符号表。                               |
| [hasattr()](https://www.w3school.com.cn/python/ref_func_hasattr.asp)       | 如果指定的对象拥有指定的属性（属性/方法），则返回 True。 |
| hash()                                                                     | 返回指定对象的哈希值。                                   |
| help()                                                                     | 执行内建的帮助系统。                                     |
| [hex()](https://www.w3school.com.cn/python/ref_func_hex.asp)               | 把数字转换为十六进制值。                                 |
| [id()](https://www.w3school.com.cn/python/ref_func_id.asp)                 | 返回对象的 id。                                          |
| [input()](https://www.w3school.com.cn/python/ref_func_input.asp)           | 允许用户输入。                                           |
| [int()](https://www.w3school.com.cn/python/ref_func_int.asp)               | 返回整数。                                               |
| [isinstance()](https://www.w3school.com.cn/python/ref_func_isinstance.asp) | 如果指定的对象是指定对象的实例，则返回 True。            |
| [issubclass()](https://www.w3school.com.cn/python/ref_func_issubclass.asp) | 如果指定的类是指定对象的子类，则返回 True。              |
| [iter()](https://www.w3school.com.cn/python/ref_func_iter.asp)             | 返回迭代器对象。                                         |
| [len()](https://www.w3school.com.cn/python/ref_func_len.asp)               | 返回对象的长度。                                         |
| [list()](https://www.w3school.com.cn/python/ref_func_list.asp)             | 返回列表。                                               |
| [locals()](https://www.w3school.com.cn/python/ref_func_locals.asp)         | 返回当前本地符号表的更新字典。                           |
| [map()](https://www.w3school.com.cn/python/ref_func_map.asp)               | 返回指定的迭代器，其中指定的函数应用于每个项目。         |
| [max()](https://www.w3school.com.cn/python/ref_func_max.asp)               | 返回可迭代对象中的最大项目。                             |
| [memoryview()](https://www.w3school.com.cn/python/ref_func_memoryview.asp) | 返回内存视图（memory view）对象。                        |
| [min()](https://www.w3school.com.cn/python/ref_func_min.asp)               | 返回可迭代对象中的最小项目。                             |
| [next()](https://www.w3school.com.cn/python/ref_func_next.asp)             | 返回可迭代对象中的下一项。                               |
| [object()](https://www.w3school.com.cn/python/ref_func_object.asp)         | 返回新对象。                                             |
| [oct()](https://www.w3school.com.cn/python/ref_func_oct.asp)               | 把数转换为八进制。                                       |
| [open()](https://www.w3school.com.cn/python/ref_func_open.asp)             | 打开文件并返回文件对象。                                 |
| [ord()](https://www.w3school.com.cn/python/ref_func_ord.asp)               | 转换表示指定字符的 Unicode 的整数。                      |
| [pow()](https://www.w3school.com.cn/python/ref_func_pow.asp)               | 返回 x 的 y 次幂的值。                                   |
| [print()](https://www.w3school.com.cn/python/ref_func_print.asp)           | 打印标准输出设备。                                       |
| property()                                                                 | 获取、设置、删除属性。                                   |
| [range()](https://www.w3school.com.cn/python/ref_func_range.asp)           | 返回数字序列，从 0 开始且以 1 为增量（默认地）。         |
| repr()                                                                     | 返回对象的可读版本。                                     |
| [reversed()](https://www.w3school.com.cn/python/ref_func_reversed.asp)     | 返回反转的迭代器。                                       |
| [round()](https://www.w3school.com.cn/python/ref_func_round.asp)           | 对数进行舍入。                                           |
| [set()](https://www.w3school.com.cn/python/ref_func_set.asp)               | 返回新的集合对象。                                       |
| [setattr()](https://www.w3school.com.cn/python/ref_func_setattr.asp)       | 设置对象的属性（属性/方法）。                            |
| [slice()](https://www.w3school.com.cn/python/ref_func_slice.asp)           | 返回 slice 对象。                                        |
| [sorted()](https://www.w3school.com.cn/python/ref_func_sorted.asp)         | 返回排序列表。                                           |
| @staticmethod()                                                            | 把方法转换为静态方法。                                   |
| [str()](https://www.w3school.com.cn/python/ref_func_str.asp)               | 返回字符串对象。                                         |
| [sum()](https://www.w3school.com.cn/python/ref_func_sum.asp)               | 对迭代器的项目进行求和。                                 |
| [super()](https://www.w3school.com.cn/python/ref_func_super.asp)           | 返回表示父类的对象。                                     |
| [tuple()](https://www.w3school.com.cn/python/ref_func_tuple.asp)           | 返回元组。                                               |
| [type()](https://www.w3school.com.cn/python/ref_func_type.asp)             | 返回对象的类型。                                         |
| [vars()](https://www.w3school.com.cn/python/ref_func_vars.asp)             | 返回对象的 __dict__ 属性。                               |
| [zip()](https://www.w3school.com.cn/python/ref_func_zip.asp)               | 从两个或多个迭代器返回一个迭代器。                       |

# Python 字符串方法

- [Python 内建函数](https://www.w3school.com.cn/python/python_ref_functions.asp)
- [Python 列表方法](https://www.w3school.com.cn/python/python_ref_list.asp)

**Python 有一组可以在字符串上使用的内建方法。**

**注释：**所有字符串方法都返回新值。它们不会更改原始字符串。

| 方法                                                                             | 描述                                               |
| :------------------------------------------------------------------------------- | :------------------------------------------------- |
| [capitalize()](https://www.w3school.com.cn/python/ref_string_capitalize.asp)     | 把首字符转换为大写。                               |
| [casefold()](https://www.w3school.com.cn/python/ref_string_casefold.asp)         | 把字符串转换为小写。                               |
| [center()](https://www.w3school.com.cn/python/ref_string_center.asp)             | 返回居中的字符串。                                 |
| [count()](https://www.w3school.com.cn/python/ref_string_count.asp)               | 返回指定值在字符串中出现的次数。                   |
| [encode()](https://www.w3school.com.cn/python/ref_string_encode.asp)             | 返回字符串的编码版本。                             |
| [endswith()](https://www.w3school.com.cn/python/ref_string_endswith.asp)         | 如果字符串以指定值结尾，则返回 true。              |
| [expandtabs()](https://www.w3school.com.cn/python/ref_string_expandtabs.asp)     | 设置字符串的 tab 尺寸。                            |
| [find()](https://www.w3school.com.cn/python/ref_string_find.asp)                 | 在字符串中搜索指定的值并返回它被找到的位置。       |
| [format()](https://www.w3school.com.cn/python/ref_string_format.asp)             | 格式化字符串中的指定值。                           |
| format_map()                                                                     | 格式化字符串中的指定值。                           |
| [index()](https://www.w3school.com.cn/python/ref_string_index.asp)               | 在字符串中搜索指定的值并返回它被找到的位置。       |
| [isalnum()](https://www.w3school.com.cn/python/ref_string_isalnum.asp)           | 如果字符串中的所有字符都是字母数字，则返回 True。  |
| [isalpha()](https://www.w3school.com.cn/python/ref_string_isalpha.asp)           | 如果字符串中的所有字符都在字母表中，则返回 True。  |
| [isdecimal()](https://www.w3school.com.cn/python/ref_string_isdecimal.asp)       | 如果字符串中的所有字符都是小数，则返回 True。      |
| [isdigit()](https://www.w3school.com.cn/python/ref_string_isdigit.asp)           | 如果字符串中的所有字符都是数字，则返回 True。      |
| [isidentifier()](https://www.w3school.com.cn/python/ref_string_isidentifier.asp) | 如果字符串是标识符，则返回 True。                  |
| [islower()](https://www.w3school.com.cn/python/ref_string_islower.asp)           | 如果字符串中的所有字符都是小写，则返回 True。      |
| [isnumeric()](https://www.w3school.com.cn/python/ref_string_isnumeric.asp)       | 如果字符串中的所有字符都是数，则返回 True。        |
| [isprintable()](https://www.w3school.com.cn/python/ref_string_isprintable.asp)   | 如果字符串中的所有字符都是可打印的，则返回 True。  |
| [isspace()](https://www.w3school.com.cn/python/ref_string_isspace.asp)           | 如果字符串中的所有字符都是空白字符，则返回 True。  |
| [istitle()](https://www.w3school.com.cn/python/ref_string_istitle.asp)           | 如果字符串遵循标题规则，则返回 True。              |
| [isupper()](https://www.w3school.com.cn/python/ref_string_isupper.asp)           | 如果字符串中的所有字符都是大写，则返回 True。      |
| [join()](https://www.w3school.com.cn/python/ref_string_join.asp)                 | 把可迭代对象的元素连接到字符串的末尾。             |
| [ljust()](https://www.w3school.com.cn/python/ref_string_ljust.asp)               | 返回字符串的左对齐版本。                           |
| [lower()](https://www.w3school.com.cn/python/ref_string_lower.asp)               | 把字符串转换为小写。                               |
| [lstrip()](https://www.w3school.com.cn/python/ref_string_lstrip.asp)             | 返回字符串的左修剪版本。                           |
| maketrans()                                                                      | 返回在转换中使用的转换表。                         |
| [partition()](https://www.w3school.com.cn/python/ref_string_partition.asp)       | 返回元组，其中的字符串被分为三部分。               |
| [replace()](https://www.w3school.com.cn/python/ref_string_replace.asp)           | 返回字符串，其中指定的值被替换为指定的值。         |
| [rfind()](https://www.w3school.com.cn/python/ref_string_rfind.asp)               | 在字符串中搜索指定的值，并返回它被找到的最后位置。 |
| [rindex()](https://www.w3school.com.cn/python/ref_string_rindex.asp)             | 在字符串中搜索指定的值，并返回它被找到的最后位置。 |
| [rjust()](https://www.w3school.com.cn/python/ref_string_rjust.asp)               | 返回字符串的右对齐版本。                           |
| [rpartition()](https://www.w3school.com.cn/python/ref_string_rpartition.asp)     | 返回元组，其中字符串分为三部分。                   |
| [rsplit()](https://www.w3school.com.cn/python/ref_string_rsplit.asp)             | 在指定的分隔符处拆分字符串，并返回列表。           |
| [rstrip()](https://www.w3school.com.cn/python/ref_string_rstrip.asp)             | 返回字符串的右边修剪版本。                         |
| [split()](https://www.w3school.com.cn/python/ref_string_split.asp)               | 在指定的分隔符处拆分字符串，并返回列表。           |
| [splitlines()](https://www.w3school.com.cn/python/ref_string_splitlines.asp)     | 在换行符处拆分字符串并返回列表。                   |
| [startswith()](https://www.w3school.com.cn/python/ref_string_startswith.asp)     | 如果以指定值开头的字符串，则返回 true。            |
| [strip()](https://www.w3school.com.cn/python/ref_string_strip.asp)               | 返回字符串的剪裁版本。                             |
| [swapcase()](https://www.w3school.com.cn/python/ref_string_swapcase.asp)         | 切换大小写，小写成为大写，反之亦然。               |
| [title()](https://www.w3school.com.cn/python/ref_string_title.asp)               | 把每个单词的首字符转换为大写。                     |
| translate()                                                                      | 返回被转换的字符串。                               |
| [upper()](https://www.w3school.com.cn/python/ref_string_upper.asp)               | 把字符串转换为大写。                               |
| [zfill()](https://www.w3school.com.cn/python/ref_string_zfill.asp)               | 在字符串的开头填充指定数量的 0 值。                |

**注释：**所有字符串方法都返回新值。它们不会更改原始字符串。

请在 [Python 字符串教程](https://www.w3school.com.cn/python/python_strings.asp) 中学习更多有关字符串的知识。

# Python 列表/数组方法

- [Python 字符串方法](https://www.w3school.com.cn/python/python_ref_string.asp)
- [Python 字典方法](https://www.w3school.com.cn/python/python_ref_dictionary.asp)

**Python 有一组可以在列表/数组上使用的内置方法。**

| 方法                                                                 | 描述                                                 |
| :------------------------------------------------------------------- | :--------------------------------------------------- |
| [append()](https://www.w3school.com.cn/python/ref_list_append.asp)   | 在列表的末尾添加一个元素                             |
| [clear()](https://www.w3school.com.cn/python/ref_list_clear.asp)     | 删除列表中的所有元素                                 |
| [copy()](https://www.w3school.com.cn/python/ref_list_copy.asp)       | 返回列表的副本                                       |
| [count()](https://www.w3school.com.cn/python/ref_list_count.asp)     | 返回具有指定值的元素数量。                           |
| [extend()](https://www.w3school.com.cn/python/ref_list_extend.asp)   | 将列表元素（或任何可迭代的元素）添加到当前列表的末尾 |
| [index()](https://www.w3school.com.cn/python/ref_list_index.asp)     | 返回具有指定值的第一个元素的索引                     |
| [insert()](https://www.w3school.com.cn/python/ref_list_insert.asp)   | 在指定位置添加元素                                   |
| [pop()](https://www.w3school.com.cn/python/ref_list_pop.asp)         | 删除指定位置的元素                                   |
| [remove()](https://www.w3school.com.cn/python/ref_list_remove.asp)   | 删除具有指定值的项目                                 |
| [reverse()](https://www.w3school.com.cn/python/ref_list_reverse.asp) | 颠倒列表的顺序                                       |
| [sort()](https://www.w3school.com.cn/python/ref_list_sort.asp)       | 对列表进行排序                                       |

**注释：**Python 没有内置对数组的支持，但可以使用 Python 列表。

在 [Python 列表教程](https://www.w3school.com.cn/python/python_lists.asp) 中学习有关列表的更多知识。

在 [Python 数组教程](https://www.w3school.com.cn/python/python_arrays.asp) 中学习有关数组的更多知识。

# Python 字典方法

- [Python 列表方法](https://www.w3school.com.cn/python/python_ref_list.asp)
- [Python 元组方法](https://www.w3school.com.cn/python/python_ref_tuple.asp)

**Python 有一组可以在字典上使用的内建方法。**

| 方法                                                                             | 描述                                                   |
| :------------------------------------------------------------------------------- | :----------------------------------------------------- |
| [clear()](https://www.w3school.com.cn/python/ref_dictionary_clear.asp)           | 删除字典中的所有元素                                   |
| [copy()](https://www.w3school.com.cn/python/ref_dictionary_copy.asp)             | 返回字典的副本                                         |
| [fromkeys()](https://www.w3school.com.cn/python/ref_dictionary_fromkeys.asp)     | 返回拥有指定键和值的字典                               |
| [get()](https://www.w3school.com.cn/python/ref_dictionary_get.asp)               | 返回指定键的值                                         |
| [items()](https://www.w3school.com.cn/python/ref_dictionary_items.asp)           | 返回包含每个键值对的元组的列表                         |
| [keys()](https://www.w3school.com.cn/python/ref_dictionary_keys.asp)             | 返回包含字典键的列表                                   |
| [pop()](https://www.w3school.com.cn/python/ref_dictionary_pop.asp)               | 删除拥有指定键的元素                                   |
| [popitem()](https://www.w3school.com.cn/python/ref_dictionary_popitem.asp)       | 删除最后插入的键值对                                   |
| [setdefault()](https://www.w3school.com.cn/python/ref_dictionary_setdefault.asp) | 返回指定键的值。如果该键不存在，则插入具有指定值的键。 |
| [update()](https://www.w3school.com.cn/python/ref_dictionary_update.asp)         | 使用指定的键值对字典进行更新                           |
| [values()](https://www.w3school.com.cn/python/ref_dictionary_values.asp)         | 返回字典中所有值的列表                                 |

在我们的 [Python 字典教程](https://www.w3school.com.cn/python/python_dictionaries.asp) 中学习更多有关字典的知识。

# Python 元组方法

- [Python 字典方法](https://www.w3school.com.cn/python/python_ref_dictionary.asp)
- [Python 集合方法](https://www.w3school.com.cn/python/python_ref_set.asp)

**Python 有两个可以在元组上使用的内建方法。**

| 方法                                                              | 描述                                       |
| :---------------------------------------------------------------- | :----------------------------------------- |
| [count()](https://www.w3school.com.cn/python/ref_tuple_count.asp) | 返回元组中指定值出现的次数。               |
| [index()](https://www.w3school.com.cn/python/ref_tuple_index.asp) | 在元组中搜索指定的值并返回它被找到的位置。 |

在我们的 [Python 元组教程](https://www.w3school.com.cn/python/python_tuples.asp) 中学习更多有关元组的知识。

# Python 集合方法

- [Python 元组方法](https://www.w3school.com.cn/python/python_ref_tuple.asp)
- [Python 文件方法](https://www.w3school.com.cn/python/python_ref_file.asp)

**Python 有一组可以在集合上使用的内建方法。**

| 方法                                                                                                        | 描述                                         |
| :---------------------------------------------------------------------------------------------------------- | :------------------------------------------- |
| [add()](https://www.w3school.com.cn/python/ref_set_add.asp)                                                 | 向集合添加元素。                             |
| [clear()](https://www.w3school.com.cn/python/ref_set_clear.asp)                                             | 删除集合中的所有元素。                       |
| [copy()](https://www.w3school.com.cn/python/ref_set_copy.asp)                                               | 返回集合的副本。                             |
| [difference()](https://www.w3school.com.cn/python/ref_set_difference.asp)                                   | 返回包含两个或更多集合之间差异的集合。       |
| [difference_update()](https://www.w3school.com.cn/python/ref_set_difference_update.asp)                     | 删除此集合中也包含在另一个指定集合中的项目。 |
| [discard()](https://www.w3school.com.cn/python/ref_set_discard.asp)                                         | 删除指定项目。                               |
| [intersection()](https://www.w3school.com.cn/python/ref_set_intersection.asp)                               | 返回为两个其他集合的交集的集合。             |
| [intersection_update()](https://www.w3school.com.cn/python/ref_set_intersection_update.asp)                 | 删除此集合中不存在于其他指定集合中的项目。   |
| [isdisjoint()](https://www.w3school.com.cn/python/ref_set_isdisjoint.asp)                                   | 返回两个集合是否有交集。                     |
| [issubset()](https://www.w3school.com.cn/python/ref_set_issubset.asp)                                       | 返回另一个集合是否包含此集合。               |
| [issuperset()](https://www.w3school.com.cn/python/ref_set_issuperset.asp)                                   | 返回此集合是否包含另一个集合。               |
| [pop()](https://www.w3school.com.cn/python/ref_set_pop.asp)                                                 | 从集合中删除一个元素。                       |
| [remove()](https://www.w3school.com.cn/python/ref_set_remove.asp)                                           | 删除指定元素。                               |
| [symmetric_difference()](https://www.w3school.com.cn/python/ref_set_symmetric_difference.asp)               | 返回具有两组集合的对称差集的集合。           |
| [symmetric_difference_update()](https://www.w3school.com.cn/python/ref_set_symmetric_difference_update.asp) | 插入此集合和另一个集合的对称差集。           |
| [union()](https://www.w3school.com.cn/python/ref_set_union.asp)                                             | 返回包含集合并集的集合。                     |
| [update()](https://www.w3school.com.cn/python/ref_set_update.asp)                                           | 用此集合和其他集合的并集来更新集合。         |

在我们的 [Python 集合教程](https://www.w3school.com.cn/python/python_sets.asp) 中学习更多有关集合的知识。

# Python 文件方法

- [Python 集合方法](https://www.w3school.com.cn/python/python_ref_set.asp)
- [Python 关键字](https://www.w3school.com.cn/python/python_ref_keywords.asp)

**Python 有一组可用于文件对象的方法。**

| 方法                                                                       | 描述                                     |
| :------------------------------------------------------------------------- | :--------------------------------------- |
| [close()](https://www.w3school.com.cn/python/ref_file_close.asp)           | 关闭文件。                               |
| detach()                                                                   | 从缓冲区返回分离的原始流（raw stream）。 |
| [fileno()](https://www.w3school.com.cn/python/ref_file_fileno.asp)         | 从操作系统的角度返回表示流的数字。       |
| [flush()](https://www.w3school.com.cn/python/ref_file_flush.asp)           | 刷新内部缓冲区。                         |
| [isatty()](https://www.w3school.com.cn/python/ref_file_isatty.asp)         | 返回文件流是否是交互式的。               |
| [read()](https://www.w3school.com.cn/python/ref_file_read.asp)             | 返回文件内容。                           |
| [readable()](https://www.w3school.com.cn/python/ref_file_readable.asp)     | 返回是否能够读取文件流。                 |
| [readline()](https://www.w3school.com.cn/python/ref_file_readline.asp)     | 返回文件中的一行。                       |
| [readlines()](https://www.w3school.com.cn/python/ref_file_readlines.asp)   | 返回文件中的行列表。                     |
| [seek()](https://www.w3school.com.cn/python/ref_file_seek.asp)             | 更改文件位置。                           |
| [seekable()](https://www.w3school.com.cn/python/ref_file_seekable.asp)     | 返回文件是否允许我们更改文件位置。       |
| [tell()](https://www.w3school.com.cn/python/ref_file_tell.asp)             | 返回当前的文件位置。                     |
| [truncate()](https://www.w3school.com.cn/python/ref_file_truncate.asp)     | 把文件调整为指定的大小。                 |
| [writeable()](https://www.w3school.com.cn/python/ref_file_writeable.asp)   | 返回是否能够写入文件。                   |
| [write()](https://www.w3school.com.cn/python/ref_file_write.asp)           | 把指定的字符串写入文件。                 |
| [writelines()](https://www.w3school.com.cn/python/ref_file_writelines.asp) | 把字符串列表写入文件。                   |

请在我们的 [Python 文件处理教程](https://www.w3school.com.cn/python/python_file_handling.asp) 学习更多有关文件对象的知识。

# Python 关键字

- [Python 文件方法](https://www.w3school.com.cn/python/python_ref_file.asp)
- [随机模块](https://www.w3school.com.cn/python/python_module_random.asp)

**Python 有一组关键字，这些关键字是保留字，不能用作变量名、函数名或任何其他标识符：**

| 关键字                                                                  | 描述                                           |
| :---------------------------------------------------------------------- | :--------------------------------------------- |
| [and](https://www.w3school.com.cn/python/ref_keyword_and.asp)           | 逻辑运算符。                                   |
| [as](https://www.w3school.com.cn/python/ref_keyword_as.asp)             | 创建别名。                                     |
| [assert](https://www.w3school.com.cn/python/ref_keyword_assert.asp)     | 用于调试。                                     |
| [break](https://www.w3school.com.cn/python/ref_keyword_break.asp)       | 跳出循环。                                     |
| [class](https://www.w3school.com.cn/python/ref_keyword_class.asp)       | 定义类。                                       |
| [continue](https://www.w3school.com.cn/python/ref_keyword_continue.asp) | 继续循环的下一个迭代。                         |
| [def](https://www.w3school.com.cn/python/ref_keyword_def.asp)           | 定义函数。                                     |
| [del](https://www.w3school.com.cn/python/ref_keyword_del.asp)           | 删除对象。                                     |
| [elif](https://www.w3school.com.cn/python/ref_keyword_elif.asp)         | 在条件语句中使用，等同于 else if。             |
| [else](https://www.w3school.com.cn/python/ref_keyword_else.asp)         | 用于条件语句。                                 |
| [except](https://www.w3school.com.cn/python/ref_keyword_except.asp)     | 处理异常，发生异常时如何执行。                 |
| [False](https://www.w3school.com.cn/python/ref_keyword_false.asp)       | 布尔值，比较运算的结果。                       |
| [finally](https://www.w3school.com.cn/python/ref_keyword_finally.asp)   | 处理异常，无论是否存在异常，都将执行一段代码。 |
| [for](https://www.w3school.com.cn/python/ref_keyword_for.asp)           | 创建 for 循环。                                |
| [from](https://www.w3school.com.cn/python/ref_keyword_from.asp)         | 导入模块的特定部分。                           |
| [global](https://www.w3school.com.cn/python/ref_keyword_global.asp)     | 声明全局变量。                                 |
| [if](https://www.w3school.com.cn/python/ref_keyword_if.asp)             | 写一个条件语句。                               |
| [import](https://www.w3school.com.cn/python/ref_keyword_import.asp)     | 导入模块。                                     |
| [in](https://www.w3school.com.cn/python/ref_keyword_in.asp)             | 检查列表、元组等集合中是否存在某个值。         |
| [is](https://www.w3school.com.cn/python/ref_keyword_is.asp)             | 测试两个变量是否相等。                         |
| [lambda](https://www.w3school.com.cn/python/ref_keyword_lambda.asp)     | 创建匿名函数。                                 |
| [None](https://www.w3school.com.cn/python/ref_keyword_none.asp)         | 表示 null 值。                                 |
| [nonlocal](https://www.w3school.com.cn/python/ref_keyword_nonlocal.asp) | 声明非局部变量。                               |
| [not](https://www.w3school.com.cn/python/ref_keyword_not.asp)           | 逻辑运算符。                                   |
| [or](https://www.w3school.com.cn/python/ref_keyword_or.asp)             | 逻辑运算符。                                   |
| [pass](https://www.w3school.com.cn/python/ref_keyword_pass.asp)         | null 语句，一条什么都不做的语句。              |
| [raise](https://www.w3school.com.cn/python/ref_keyword_raise.asp)       | 产生异常。                                     |
| [return](https://www.w3school.com.cn/python/ref_keyword_return.asp)     | 退出函数并返回值。                             |
| [True](https://www.w3school.com.cn/python/ref_keyword_true.asp)         | 布尔值，比较运算的结果。                       |
| [try](https://www.w3school.com.cn/python/ref_keyword_try.asp)           | 编写 try...except 语句。                       |
| [while](https://www.w3school.com.cn/python/ref_keyword_while.asp)       | 创建 while 循环。                              |
| with                                                                    | 用于简化异常处理。                             |
| yield                                                                   | 结束函数，返回生成器。                         |