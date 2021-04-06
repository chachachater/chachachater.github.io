# What's "THIS" in JavaScript
> 對應**重新認識 JavaScript: Day 20**
ummm, this 在 JS 裡面的意思比其他語言更複雜，可以去看看詳細版*3

## What's this?
> ECMA的說明：看不懂。
先說結論，
* `this`指的是**「function 執行時所屬的物件 (Owner Object of the function)」**，當然，有例外情況...
* this 是 function 執行時，自動生成的一個內部物件
## 當 function 本身就是物件時的情況
> `this`指的是「function 執行時所屬的物件 (Owner Object of the function)」，那如果這邊的function 本身就是物件呢？

例如下面的情況：
```
var bar = function() {
  console.log( this.a );
};

var foo = function() {
  var a = 123;
  this.bar();
};

foo(); //undefined
```
因為 兩個 `this` 指向的都是是 `window`，但`window`沒有 `.a`, `.bar()`，所以結果是 undefined. (就是全域變數/物件的概念)

## 巢狀迴圈中的 this
```
var obj = {

  func1: function(){
    console.log( this === obj ); //true

    var func2 = function(){
      // 這裡的 this 用 this 2 代替，方便稱呼
      console.log( this === obj ); // false
    };

    func2();
  }
};

obj.func1();

```
outer () { inner () {} } 的情況，當 inner function 沒有特定指明 this 的情況，因為**預設綁定 (Default Binding)**的 this 為 「全域物件」，所以 this 2 就是 window.

## 當 this 會改變時的情況

### That or This ？
結論，先用一個叫 that 的變數儲存它的參考。

例如：在某個元素上透過 addEventListener 註冊了 click 事件，在事件中的 this 指的是「觸發事件的元素」，要是我們在事件的 callback function 加入 ajax 的請求，，預設綁定 (Default Binding) 會把這個 callback function 的 this 指定給 global object，也就是 window。
```
//addEventListener( callback )
el.addEventListener("click", function(event) {

  // 透過 that 參考
  var that = this;
  console.log( this.textContent );

  $ajax('[URL]', function(res) {
    // this.textContent => undefined
    console.log(that.textContent, res);
  });

}, false);
```

### 強制指定 this 的三種方式
* `.bind()` : callback function 常用到

* `.call() `/` .apply()`
    
    * 使用在 context 較常變動的場景，依照呼叫時的需要帶入不同的物件作為該 function 的 this。 在呼叫的當下就立即執行。
    * 兩者的作用完全一樣，差別只在傳入參數的方式有所不同：前者用 , 分隔，後者用 array.

不太懂
## 箭頭函式與 this
this 變數強制綁定

## this 與前後文本 (context) 綁定的基本原則
就是把前面提到的 各種 this 指定原則分四大類：

* 預設綁定 (Default Binding) ， `window`
* 隱含式綁定 (Implicit Binding)，
* 顯式綁定 (Explicit Binding)，`.bind()` /` .call() `/` .apply()`
* 「new」關鍵字綁定

### new 在 JS 裡面的意思比其他語言更複雜
> 因為 JS 是原型的物件導向，java則是類別的物件導向

當一個 function 前面帶有 new 被呼叫時，會發生：
* 產生一個新的物件 (物件被建構出來)
* 這個新建構的物件會被設為那個 function 的 this 綁定目標
* 除非這個 function 指定回傳 (return) 了他自己的替代物件，否則這個透過 new 產生的物件會被自動回傳

