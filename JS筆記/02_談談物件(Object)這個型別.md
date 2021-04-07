# 談談物件(Object)這個型別
對應[重新認識 JavaScript: Day 04](https://ithelp.ithome.com.tw/articles/10190962)

> 所有 primitive type 以外的型別都屬於 Object 這個型別。

## What is Object?
[ECMAScript](https://262.ecma-international.org/5.1/#sec-4.3.3) 官方解釋：
> An object is a collection of properties and has a single prototype object. The prototype may be the null value

> 翻譯：物件由 0 到 n 個屬性(properties, key: value pair)以及 prototyppe Object 組成。

## 處理 Object 裡面的 properties
### 建立 Object 的方法：
 1.  舊的方法：`var person = new Object();`
 1.  使用 Object literal : 
    ```javascript
    var person = {
        name: "James",
    }
    //新手容易忘記 ','的存在
    ```

### 存取 properties 的方法：
1. ` . ` 這個符號，例如：　`person.name; //"James"`
1. `[  ]`這個符號，例如：`person["name"]; //"James" //新手容易忘記 '" "'的存在`

    * 如果 `person[name] `是一個 function 呢？ => `person[name]();`
    
    兩種存取方法的主要差異在於： `[  ]`可以用 JS 的關鍵字 key word 或是不合法的名稱例如 007 來做為 key name.

### 刪除 properties 的方法：
` delete obj.name`

### 判斷 property 是否存在的方法：
1. `console.log(obj.name); //"James"`，但如果 value 是 unidentified 就沒辦法判斷了
1. `console.log("name" in obj); // true`，回傳 boolean.
1. `obj.hasOwnProperty("name"); // true`，回傳 boolean.

## Object(type) 裡面的奇行種, array / function() / null
這篇文章一開始有提到：
> 所有 primitive type 以外的型別都屬於 Object 這個型別。

那麼再看看這三個比較特例的例子，他們實際上都是 Object，只是因為一些 ECMA 規範和有趣的歷史而演變成這樣XD：（記得 `typeof` 這個 syntax 回傳的值是 String type）
```
let arr = [];
typeof arr; //"object "
```
```
function test(){return "hi"};
typeof test(); // "string"

typeof window.alert; // "function"
```
```
typeof null; // "object "
```

##  Array 陣列
Object 在大多時候都是以 `{key: value}` 的形式存在，array 則是長得比較奇怪的 Object.

> Array 以 `arr = ['a', 'b', 'c']` 的形式存在，並且一定會有`[  ]`。我在想如果從 `arr[0]; // 'a'`這個角度來看就可以發現到， `index 0 => 'a', index 1 => 'b' `的對應關係，看起來就蠻像`{key: value}` 的形式？

### 建立 array
1. `var arr = new Array();`
1. 用 array literal ` let arr = ['a', 'b', 'c']`

### `arr.length()`的長度可以自由調整

透過 `arr.length()` 可以覆寫 array 的大小，由小變大的話則多的 index 會自動補上 `'undefined'`，從下面的範例也可以發現 JS 的 array 其實可以存放不同型別 type, 但不建議這樣做。

```
let arr = ['a', 'b', 'c'];
arr.length = 5;
arr; //['a', 'b', 'c', undefined, undefined]
```

##  function() / null 
這邊要回答這兩個例子的原因：
```
function test(){return "hi"};
typeof test(); // "string"

typeof window.alert; // "function"
```
```
typeof null; // "object "
```

### 為什麼 function(){} 不是 object type ?
首先這是 [ECMAScript](https://262.ecma-international.org/5.1/#sec-4.3.24) 的說明：
> member of the Object type that is an instance of the standard built-in Function constructor and that may be invoked as a subroutine

我的理解是「所有自定義的 function(){} 其實都是內建的** Function ** object 所實作( instance )出來的子程序」

### 為什麼 `typeof null` 回傳的是 'object' 而不是 'null' 這個 primitive type ?

簡單來說就是一個人類眼睛沒有看清楚的 bug, 等想要修改的時候已經來不及了， JS 已經成長為廣為使用的大樹了XD. （[重新認識 JavaScript: Day 04](https://ithelp.ithome.com.tw/articles/10190962) 有解釋）

