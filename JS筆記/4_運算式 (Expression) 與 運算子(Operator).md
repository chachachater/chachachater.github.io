# 運算式 (Expression) 與 運算子(Operator)
對應[重新認識 JavaScript: Day 06和07]()
## JS 的 syntax 可以分成兩大類：
1. 運算式 (Expression)：
單純的動作，例如：assignment, if, loop

1. 運算子(Operator)：
會產生一個「值」，這邊介紹加減乘除(不只這些)的 算術運算子 (Arithmetic Operator) 和比較運算子 (Comparison Operators)

## 加號　`+`
* 遇到特殊的 Number type 做運算時, 例如：
        
    * infinity, - infinity => 都會得到 無限 的結果
    * 只要出現 NaN => 都會得到 NaN 
* 當 ~~number 遇到不同型別時~~出現 string 時，會進行「自動轉型」(我都理解成 concatenate串接)，根據型別會有不同的轉型方法：

    * number, boolean, object => `.toString()`
    * null, undefined => `String()`
    * 由左到右，先乘除後加減， ( )優先 的運算原則

## 減號　`-`
當 number 遇到不同型別時，會進行「自動轉型」，根據型別會有不同的轉型方法：
* primitive type 用 `Number( )`
* object 
    
    * 有 `valueof()`的話會先判斷型別，再轉型
        > `valueof()` 取回該物件對應的原始型別的值
    * 沒有的話，先用 `.toString()`再用 `Number( )`

## 乘號　`*`
單純用 `Number( )` 轉型
* `infinity * 0 //NaN`

## 除號　`/`
單純用 `Number( )` 轉型
* `任何數字 / 0 //+-infinity 或 NaN`

## 取餘數　`%`
* `infinity % 口 //NaN`
* `口 % infinity //NaN 或 口`
* `口 是任何數字`

# uniary operator
也屬於算術運算子，只需要單個數值就可以完成運算

## 正負號　`+`　`-`
* 會先用 `Number( )` 轉換之後再根據   `+`、`-`判斷值。

* `+`　`-`　**也可以用來做轉型**，`var a = 'abc';  console.log(+a) //NaN`，因為 變數 a 前面有個`+`，所以'abc' 會先做 `Numver()` 得到 NaN.

## 遞增 `++`　和遞減　`--`
* 　`++`　和　`--`，要注意　`a++`　是先加，　`++a`　是後加

# 比較運算子 (Comparison Operators)
objcet 在這邊比較簡單，需要 reference 到相同 instance 才會是 true.
## 等於等於　`==`
它會自動轉型，容易出現奇妙的結果，`!==`也是一樣會自動轉型
* 當 boolean / string / number 三者做組合時，都會轉換成 `Number()`
* NaN 仍然不會等於自己
## 等於等於等於　`===`

## 大於　`>`　和小於　`<`
* 字串相比:比unicode的順序
* 基本上會轉成數字
* object 的話跟 減號 的轉型情況一樣