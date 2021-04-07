# 函式 Functions 的基本概念
對應[重新認識 JavaScript: Day 10](https://ithelp.ithome.com.tw/articles/10191549)


## 函式 functions  的三種定義方式

### 1. 函式宣告（Function Declaration）
`function square (number) {return number * number;}`

### 2. 函式運算式（Function Expressions）
`var square = function (number) {number * number}`
這種函式會沒有名字，但你還是可以給他一個名字，例如
`var square = function name(number) {number * number}`，但是這個名字只在自己的區塊 {  } 內存在。

### 3. 透過 `new Function` 關鍵字建立函式
`var square = new Function ('number', 'return number * number')`
* 注意 `Function` 要大寫F

* parameter 是以 string 的形式存在

從上述可知這方式其實不常用，因為，每次執行時都會進行解析「字串」(如 'return number * number' ) 的動作，運作效能較差。




## 變數的有效範圍 (Scope)

先說結論，變數有效範圍的最小單位是 "function"，也就是說存在於這小小的 {  } 之中。（不是for, if, while... 的 {  }!!）
> 有聽過這個說法：根據變數宣告的位置決定它的存在範圍。　這不一定，如果沒有給 var　呢？

> ES6 的 let, const 則可以存在在更小範圍的 { }
## 提升 (Hoisting)
先說結論，function 內的變數如果在使用之前沒有（在函數內？）宣告，但在使用之後又再次宣告，會發生**變數提升 Variables hoitsting**。
```
var x = 1;

var doSomeThing = function(y) {
  console.log(x);

  var x = 100;
  return x + y;
};
doSomeThing(50); 

/*
undefined
150
*/
//BTW， x 現在的值是 100 ，再執行一次doSomeThing(50); 會得到相同結果
```

```
// 單純放上來釐清想法用，跟 hoisting 沒關
var x = 1;

var doSomeThing = function(y) {
  console.log(x);

  return x + y;
};
doSomeThing(50); 

/*
1
51
*/
```

我的理解是：當執行到 `console.log( doSomeThing(50) )`;的時候，JS 會已經從最上方開始找到 `var x = 1`，然後再執行 `doSomeThing()`。
因為 `doSomeThing()` 裡面先用到了`console.log(x);`然後又再次宣告` x = 100`，所以發生 hoisting.這樣的情況是因為「再次宣告」才造成 hoisting.

### hoisting
雖然是在下面，但可以確認的是自己的 scope 裡面有宣告，於是就 很貼心地 「只會把宣告的語法」拉到這個 scope 的「最上面」。


所以第一份程式碼實際執行狀況相當於：
```
var x = 1;

var doSomeThing = function(y) {
  var x;
  console.log(x); 

  x = 100; //所以在這邊即使沒有加上 var 它(x)也不會自動變成全域變數
  return x + y;
};
```
> 由此可知，「沒有 var 的變數會變成「全域變數」」 這句話也不一定R

## 全域變數與區域變數
先說結論，嚴格來說JS 裡面不存在 全域變數，正確稱呼是 全域物件（或是頂層物件）

* 在 browser 裡面，指的是 `window`

* 在 node 裡面，指的是 `global`

* 全域變數在 JS 實際上是 `window`的**屬性**才對

```
var a = 10;
console.log( window.a );
//10
```