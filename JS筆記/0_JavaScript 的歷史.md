# JavaScript 的歷史
> 對應**重新認識 JavaScript: Day 01 和 Day02**

## 紀錄一下重點
* HTML 的 <id> tag 具有唯一性、自動變成 global variable的特性。(JS是基於這個特性?)

* javascript !== jscript (後者是為微軟曾經出過的腳本語言，不過最後是 JS活下來)

* ESMA-262 這個標準是個源頭，用來  **實作（規格化）**  出各種腳本語言，但這個標準也是會與時俱進而衍生出不同版本，這些版本稱之為 ECMAScript, 目前已經到 ES6.

* browser => ESMPScript => JS，有一個統一的標準是為了讓各種 browser 可以有統一的處理方法？

## JS 的特色

* JS 1.3 開始可以使用 unicode，中文也是可以寫 code 的！

* JS 是一種 **弱型別** 的語言，需要透過 value, object （它們都可以靠著  **宣告 declare**  來存放在某個變數）來判斷型別?
    > `變數` 和 `value, object` 是不同的概念

    變數 = (reference ) 到 value, obj => 知道type
            
    
* 補充：強型別的語言的 variable type 即為 runtime 時的 type, 但是在 compile 的時候就會先偵錯。

* 所有沒有用 ` var `這個方法來宣告的變數（例如其他方法 `let`, `const`）都會自動變成全域變數。
    > 但在 7_函式 Functions 的基本概念.md 裡面似乎有個例外？
