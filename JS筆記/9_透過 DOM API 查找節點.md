# 透過 DOM API 查找節點
對應[重新認識 JavaScript: Day 11](https://ithelp.ithome.com.tw/articles/10191765)

## 瀏覽器載入一個網頁的大概流程
![流程圖http://taligarsiel.com/Projects/webkitflow.png](http://taligarsiel.com/Projects/webkitflow.png)

([來源 How browsers work](http://taligarsiel.com/Projects/howbrowserswork1.htm))

上面的圖是瀏覽器載入一個網頁時的流程圖，HTML 檔會被做成一棵樹，然後放上 CSS erules.

由此可知，HTML 檔裡面`<script>`的位置會影響 JS 載入 HTML 的時間，因為當 `<script> `發生時，HTML 的載入會暫停並立即執行 script (如果當下還沒載入完就...)。

## DOM 節點的類型
DOM 節點的類型常見的有下面幾種，也可以用數字代替：
```
Node.ELEMENT_NODE
Node.TEXT_NODE
Node.COMMENT_NODE
Node.DOCUMENT_NODE(又分成TYPE_NODE, Node.FRAGMENT_NODE)
```
**需要注意的是，節點不單單是 tag, HTML 檔裡面的 換行、空格、註解...等一切都是節點。**

## DOM 節點間的查找遍歷 (Traversing)
**小心s有沒有存在**

### Child 系列
`.childNodes`、`.firstChild`、`.lastChild`: 回傳的可能會有：
1. HTML 元素節點 (element nodes)
1. 文字節點 (text nodes)，包含空白// undefined ?
1. 註解節點 (comment nodes)
1. 沒有子節點則回傳 null

### Parent 系列
`.parentNode`、`.preciousSybling`、`.nextSybling`回傳的可能會有：
1. 元素節點 (Element node)
1. 根節點 (Document node)
1. DocumentFragment 節點
1. 沒有則回傳 null

## `document.getElementsBy**` 與` document.querySelector` / `document.querySelectorAll` 的差異

先說結論，三者差別在於取地的 List 不同
* 當查詢的節點是複數個（有 s 存在），那麼取得的 object 會有index 與 length 屬性，``.getElementsBy*有 s 是個複數

* `.getElementsBy*` 取得的是 HTMLCollection」只收集 HTML element 節點
* `.querySelector`取得的是「NodeList」除了 HTML element 節點，也包含文字節點、屬性節點等
* 上面兩個都可以和 array 一樣使用

* HTMLCollection / NodeList 在大部分情況下是即時更新的，但透過 `.querySelector` / `.querySelectorAll` 取得的 NodeList 是靜態的。