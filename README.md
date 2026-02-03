# auto-logger
auto-logger is a simple Visual Studio Code extension designed to help you write logs faster and improve debugging time. It provides a collection of code snippets for multiple programming languages, making it easier to add consistent and useful logs during development.

The extension is available on the Visual Studio Code Marketplace, <u><strong>with over 200 installs</strong></u>.

## php-helper

To use this features, search the commands on: ``ctrl + shift + p``
This extension, is responsable to:

### Convert php object to php array

Command:
``To php array``

### Convert php array to php object

Command:
``To php object``

## Supported Languages

- C++
- JS/JSX/TSX
- PHP/Laravel
- Python

## C++ Snippets

### Empty String Logger

```cpp
!l
std::cout << "${1:Message}" << std::endl;
```

### For Loop

```cpp
!fr
for (int ${1:i} = 0; ${1:i} < ${2:count}; ${1:i}++) {
    ${3:// code...}
}
```

### While Loop

```cpp
!wh
while (${1:condition}) {
    ${2:// code...}
}
```

### Switch Case

```cpp
!sw
switch (${1:variable}) {
    case ${2:value1}:
        ${3:// code...}
        break;
    case ${4:value2}:
        ${5:// code...}
        break;
    default:
        ${6:// code...}
}
```

### Integer function

```cpp
!ifunc
int test()
{
    //
}

```

### Void function

```cpp
!vfunc
void test()
{
    //
}
```

### String function

```cpp
!sfunc
std::string test()
{
    //
}

```

### Class

```cpp
!cls
class Test
{
    public:
        //
}
```

## JavaScript/JSX/TSX Snippets

### Basic Logger

```javascript
!lb
console.log()
```

### Variable Logger

```javascript
!lv
console.log($1)
```

### Empty String Logger

```javascript
!l
console.log('${1}')
```

### Debugger

```javascript
!d
debugger;
```

### Console Error

```javascript
!ce
console.error('${1}')
```

### Function

```javascript
!f
function test()
{
    //
}
```

### Const function

```javascript
!cf
const test = () => 
{
    //
}
```

## PHP/Laravel Snippets

### Basic Logger

```php
!lb
\Log::debug('log');
```

### Variable Logger

```php
!lv
\Log::debug($1);
```

### Empty String Logger

```php
!l
\Log::debug('${1}');
```

### Empty String Printer

```php
!p
print_r('${1}');
```

### Die

```php
!dd
die();
```

### Die with Message

```php
!ddm
die('${1}');
```

### Exit

```php
!ex
exit();
```

### Timer

```php
!t
$startTime = Carbon::now();
\Log::debug('TIMER START');
//CODE HERE
\Log::debug('TIMER END');
\Log::debug('START: ');
\Log::debug($startTime);
$endTime = Carbon::now();
\Log::debug('END: ');
\Log::debug($endTime);
\Log::debug('END-START(MS): ');
\Log::debug($endTime->diffInMilliseconds($startTime));
```

### Private function

```php
!prf
private function test()
{
    //
}
```

### Public function

```php
!puf
public function test()
{
    //
}
```

### Protected function

```php
!ptf
protected function test()
{
    //
}
```

### Class

```php
!cls
class teste
{
    public function __construct()
    {
        //,
    }
}
```

## Python Snippets

### Basic Logger

```python
!lb
print('log')
```

### Variable Logger

```python
!lv
print($1)
```

### Empty String Logger

```python
!l
print('${1}')
```

### Function

```python
!f
def teste():
    #teste
```

---

Feel free to contribute by adding more snippets or suggesting improvements. If you encounter any issues, please report them in the "Issues" section.

**License:** This project is licensed under the [MIT License](LICENSE).

## Release Notes

- Webpack vulnerability fix

**Enjoy!**
