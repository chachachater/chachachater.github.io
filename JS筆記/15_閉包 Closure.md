# 閉包 Closure
> 對應**重新認識 JavaScript: Day 19**

## 範圍鏈 Scope Chain
```
//pseudocode
var A ='global';
funcion outer () {
    A = 'local';
    inner () { return A; }

}
```

以上面為例子，說結論，

範圍鏈 Scope Chain 產生在 outer function 裡面 又有 inner function 的時候，變數的存取會比較不一樣（全域變數都不全域了），範例中的 `return A` 回傳的是 'local' （不管有沒有加上　var），原因是 Scope Chain **是在函式被定義的當下決定的，而不是被呼叫（開始判斷全域？）之後才定義**，所以結果就是　變數的找尋方式是：由內而外找。

## 閉包 Closure
延續上的範例，inner function 回傳的時候，除了本身的程式碼之外，也可以取得「當時環境」(向外一層，也就是 outer function?)的變數值，稱為閉包。

* 好處是可以解決全域變數過多的問題 (= 延長變數的生命週期= 封裝的變數的狀態不受外面污染)
    > （像我自己常常會有用太多次　loop 把 ijklmn 都用掉的問題，但我是用 let 宣告所以似乎也沒這問題?）

* 存放道不同變數之後還可以重複使用
* 例如：

    ```
    function counter(){
    var count = 0;

    function innerCounter(){
        return ++count;
    }

    return innerCounter;
    }

    var countFunc = counter();
    var countFunc2 = counter();
    console.log( countFunc() );   // 1
    console.log( countFunc() );   // 2
    console.log( countFunc() );   // 3

    console.log( countFunc2() );   // 1
    console.log( countFunc2() );   // 2
    ```