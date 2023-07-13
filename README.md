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

## Requirements
None.


## Release Notes

Snippets fix.

### current version: 0.0.8


**Enjoy!**


<!--
![!l](https://user-images.githubusercontent.com/61146730/190873585-b47b1d68-65a6-44fe-b7ba-98b190051db6.gif)
-->
<!--
![!lb](https://user-images.githubusercontent.com/61146730/190873604-87259f5c-c1ba-473a-9564-b5d6b34be072.gif)
-->
<!-- 
![!lv](https://user-images.githubusercontent.com/61146730/190873744-fca610f0-4598-4aa7-8416-3e33244e56f8.gif)
-->
