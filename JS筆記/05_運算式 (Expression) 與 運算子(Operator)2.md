# 運算式 (Expression) 與 運算子(Operator)
對應[重新認識 JavaScript: Day 08](https://ithelp.ithome.com.tw/articles/10191343)

這邊就是在做各種真假判斷

## 指派運算子 (Assignment Operator)

透過　`, `　運算子可以將多組運算式看做是一個。
```
var a = 10, b = 20;

//相同於
var a = 10;
var b = 20;
```
```
var a = b = 20;

//實際上是
b = 20; //注意：不知不覺生出一個 global scope 的變數了呢
var a = b;
```


## 邏輯運算子 (Logical Operator)
> AND `&&`、 OR `||` 還有 NOT `!`

* `!!XXX` 相同於 `Boolean(XXX)`，都是型別轉換的效果
* AND `&&`、 OR `||` 還有 NOT `!`在做 T/F 判斷時，可以把值分為：

    1. 那些經過 `Boolean()` 轉換後得到 false 的值
    
    1. 以及其他的值，通常這些最後都會變成 true

### Falsy 與 Truthy: 論 `Boolean()` 的型別轉換
* 經過 `Boolean()` 轉換後得到 false 的值，稱為　falsy value
* 經過 `Boolean()` 轉換後得到 true 的值，稱為　truthy value

哪些值是 falsy / truthy 就要看  ECMAScript 的規範了：
![`Boolean()` 轉換](https://ithelp.ithome.com.tw/upload/images/20171211/200655049viDQCfe2x.png)
......falsy 比較好判斷？
## 回到AND `&&`、 OR `||` 還有 NOT `!`來判斷真假
ECMA 的說明
> The value produced by a && or || operator is not necessarily of type Boolean. The value produced will always be the value of one of the two operand expressions.

> 我的理解：AND `&&`、 OR `||`的真假判斷不單單基於 Boolean()

判斷方式是:

1. 左邊的值如果是 boolean 則進到下一步驟，如果不是則做 `Boolean()`。
1. 回傳：第一個值為 T 則回傳第一個值（**注意不是回傳 Boolean() 的 TF!!**），否則回傳第二個值

最後一段話聽不懂
 > 這也就是為什麼在 && 與 || 的結果可以用來當作 true 與 false 的判斷了。

意思是如果回傳左邊就表示左邊是T, 如果回傳右邊就表示左邊是 F ?