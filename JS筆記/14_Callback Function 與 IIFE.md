# Callback Function 與 IIFE
> 對應**重新認識 JavaScript: Day 18**

## 一級函式 (First class functions)
任何你對其他類型可以做的事，你都可以對「函式」做。

## Callback Function
在函式內執行另一個函式A(B)，跟我之前寫在 medium 的筆記是同個意思，用途：控制函式的執行時間，`window.setTimeout()`

## 立即被呼叫的函式 (Immediately Invoked Function Expression, IIFE)
先說結論，
JS 中的 loop 的執行方式是一次執行完，並不會有**等待**的現象，如果有等待的現象出現例如:`window.setTimeout()`，就會在最後一次迴圈執行完之後一次執行（大爆發XD）callback，解決方法：
1. callback
1. `(functionName)(arg)` 的方式來執行等待，或是直接放個匿名函式也OK
    > 立即被呼叫的函式就是指這個
1.  ES6 以後新增了 let 與 const，且改以 { } 作為它的 Scope，使用 let 取代 var 也有同樣效果
    > Es5 的最小切分單位是函式

可以避免汙染？

```
經典範例
透過迴圈 + setTimeout 來做到，在五秒鐘之內，每秒鐘依序透過 console.log 印出： 0 1 2 3 4
```
```
//我的解法
function ctlTime(num, time){setTimeout(()=> {console.log(num)}, time * 1000 );}

for(var i = 0; i < 5; i++){
    ctlTime(i,i);
}
```
```
//其他解法
for( var i = 0; i < 5; i++ ) {

  (function(x){
    window.setTimeout(function() {
      console.log(x);
    }, 1000 * x);
  })(i);

}
```
```
// ES6 的解法
for( let i = 0; i < 5; i++ ) {
  window.setTimeout(function() {
    console.log(i);
  }, 1000);
}
```