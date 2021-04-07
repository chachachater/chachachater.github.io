# 瀏覽器裡的 JavaScript
對應[重新認識 JavaScript: Day 11](https://ithelp.ithome.com.tw/articles/10191666)
## 瀏覽器是 JS 的執行平台
* 前端開發者透過瀏覽器這個平台來執行 JS
* 廣泛來說， browser 由這三部分組成：

    1. BOM
    1. DOM
    1. JS 核心
* node 則是只有 JS

## What is BOM
* BOM, browser object model, 瀏覽器物件模型

* 瀏覽器的核心，和 網頁無關
* > 早期各家瀏覽器都按照自己的標準來實作 instance，直到最近幾年， W3C 把各家瀏覽器都有實作的部分，以及確定已經(或未來會) 加入的功能，統一集合起來納入了 HTML5 的標準中，這也就是我們現在看到的 BOM API 的實作。 所以也有人稱為Level 0 DOM (在DOM 之前就存在)
* 核心是 `window` 物件， `window`的主要屬性有：
        
    * frames
    * history
    * navigator
    * location
    * screen
    * DOM 的 document
* `window` 是 ECMAScript 的全域物件，具有特殊性質：
**注意：全域物件　和　全域作用範圍　是不一樣的概念～～～！！**


    * 「全域作用範圍」內宣告的變數、物件、函式等，都會自動變成「全域物件」的屬性，通常這樣的變數，我們會稱它們叫做「全域變數」，可以透過 `window.xxx`的方式取得它們。

    * 在「全域作用範圍」宣告的全域變數不能 `delete a`,

    * 若是直接透過指定 window 物件的屬性則可以 `delete a`

    ```
    var a = 10;
    console.log( window.a );    // 10
    delete window.a;            // false
    ```
    ```
    window.a = 10;
    console.log( window.a );    // 10

    delete a;            // true
    ```

* `window` 還是 JavaScript 用來與瀏覽器溝通的窗口

    BOM提供 API，例如：`.alert()`, `.prompt()`, `.confirm`

## What is DOM  
* DOM, document object model, 文本物件模型
* 實際上就是 HTML 的樹狀結構模型，`document`是 root
* 樹狀結構裡面的每個節點都是 tag, tag節點往下延伸出 文本節點(text nodes)和屬性節點...等
* JS 透過節點來影響網頁結構 (DOM 也是個 API)，例如：
    * `document.getElementById()`, `document.querySelector()` 抓住tag
    * `document.getElementById().textContent = xxxx` 抓住 tag 並更改內容
