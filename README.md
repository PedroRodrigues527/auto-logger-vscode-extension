# auto-logger

It's a simple Visual Studio Code extension, to help write log, much faster, to improve debug time.
Contains a collection of code snippets for various programming languages to enhance your coding experience.

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

---

Feel free to contribute by adding more snippets or suggesting improvements. If you encounter any issues, please report them in the "Issues" section.

**License:** This project is licensed under the [MIT License](LICENSE).

## Release Notes
- New logo
- Improved README.md
- Javascript snippets also avaliable for .jsx and .tsx files.
- New c++ simple logger.

For c++:
- Added `std::cout`
- Added snippet for for and while cycles, and switch.

For php:
- Added `die();`
- Added `die('');` (with message)
- Added `exit();`

For javascript:
- Added `debugger`
- Added `console.error()`

### Current version: 2.0.0

**Enjoy!**
