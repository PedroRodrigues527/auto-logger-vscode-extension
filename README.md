<!-- https://marketplace.visualstudio.com/items?itemName=PedroRodrigues.auto-logger -->

# auto-logger

It's a simple Visual Studio Code extension, to help write log, much faster, to improve debug time.
At the moment, it supports only ***javascript***, ***python*** and ***PHP(laravel)***.

## Features

###### Javascript
`!l` -> `console.log('')`

`!lb` -> `console.log('log')` 

`!lv` -> `console.log()` 

###### PHP(Laravel)
`!l` -> `\Log::debug('');`

`!lb` -> `\Log::debug('log');` 

`!lv` -> `\Log::debug();` 

`!t`: 
```
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

###### Python
`!l` -> `print('')`

`!lb` -> `print('log')` 

`!lv` -> `print()` 


## Release Notes

Change log and version fix

### current version: 1.1.4


**Enjoy!**
