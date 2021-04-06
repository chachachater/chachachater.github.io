# DOM Node 的建立、修改與刪除
對應[重新認識 JavaScript: Day 13](https://ithelp.ithome.com.tw/articles/10191867)

DOM 節點的新增需要完成「建立節點、指定節點位置(、指定屬性)」這幾個步驟，才可以在網頁上實際看到。

## DOM 節點的新增
```
document.createElement('tagName')
document.createTextNode("hello")
```
這時候也可以開始指定屬性了`newDiv.id = "myNewDiv";`

`document..createDocumentFragment()`是比較特別的新增方法，我的理解是「虛擬出一個 Document 來存放子節點」，好處是DocumentFragment 的變動並不會影響目前的網頁文件，也不會導致回流（reflow）或引起任何影響效能的情況發生。

`document.write()` 解析到 document.write() 的時候就會停下來然後執行，但甚麼情況會用到它...?

## DOM 節點的修改與刪除

`NODE.appendChild(childNode)` 加到末端

`NODE.insertBefore(newNode, refNode);`

`NODE.replaceChild(newChildNode, oldChildNode)`

`NODE.removeChild(childNode)`