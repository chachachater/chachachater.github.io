# JS 內建的資料型別(data type)
> 對應[重新認識 JavaScript: Day 03 變數與資料型別](https://ithelp.ithome.com.tw/articles/10190873)
以 ES5 為說明，JS 的內建型別分為兩大類：
（ES6 之後多了新的型別：Symbol）

|  A            | B             |
| --------|:-------------:|
| 基本型別|(primitive type)      |
|        |string                |
|        |number                |
|        |boolean               |
|        |unidentified          |
|        |null                  |
|物件型別 |(object)              |
|        |上述之外的一切          |
|        |有一些例外?             |

## String type
* JS 裡面沒有 char 的概念 (?)
* 用 slash ` \ `來跳脫 string 裡面的特殊字元，或是在 terminal 換行

## Number type
### 有三種比較特別的 Number :

1. `infinity `, 正數 / 0 會得到 infinity
1. `- infinity `, 負數 / 0 會得到 infinity
1. `NaN //not a number`, NaN 與 number type 作數學運算，結果都是 NaN. 
1. 延伸 
    * 0 / 0
    * Infinity / Infinity
    * -Infinity / -Infinity
    * //以上三個都會得到 NaN
    * ` NaN === NaN;    // false`， Nan 連自己都不相等 => 透過` isNaN() `來 check 是否為 NaN.是否為 NaN.

### 浮點數
JS 的 number 是通過 IEEE754 這個標準來實作，根據規定的 bits 大小，可能會造成數學運算出現誤差。

解決方法：
1. Math.floor()
1. [number-presicion](https://github.com/nefe/number-precision) 這個 npm package
1. 跟型別的管理有關嗎?

## Null / undefined type
* 這兩個 type 都只有一種值 value.
* ` null ` , 它的值就是沒有值
> 跟「我說不知道就是不知道」有異曲同工之妙
* ` undefined `, 尚未給值
```
//轉換成 boolean type
Boolean(null); //false, 現在不存在，但不能確定之前或之後是否存在
Boolean(undefined); //false, 就是還沒有給值，所以不存在
```
```
轉換成 number type
Number(null); //0
Number(undefined); //NaN
```
* 在非全域作用範圍下， undefined 允許被當成變數名稱，而且變數的值是可以被修改的（最好不要做這種事）