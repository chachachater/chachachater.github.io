# JS note
紀錄Udemy course [The Web Developer Bootcamp 2021]的學習筆記，筆記內容主要著重在我自己比較容易混淆或是需要花時間理解的概念，作為複習使用。
目前進度464/682

## 待釐清觀念
- [ ] #codingExercise41 : str 是一個string，為什麼可以使用.splice() method (mdn寫說用在array上)?
- [ ] #codingExercise42 : 
```javascript
let sumArray = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}
//let sum = 0 放在function外面為什麼報錯?
```
- [ ] #影片230 : arrow和this的差別?

## 紀錄一些我覺得不錯用的 patterns
![https://raw.githubusercontent.com/chachachater/chachachater.github.io/master/The%20Web%20Developer%20Bootcamp%202021/214.png](https://raw.githubusercontent.com/chachachater/chachachater.github.io/master/The%20Web%20Developer%20Bootcamp%202021/214.png)
用 `&&` 來檢查 function 被使用的時候是否有給變數 `doNext`，因為如果有給變數 `doNext` value，則為 true，沒有則為 false。 
如果是 false，則 `&&` 後面的 condition 根本不會執行（`&&`本身的特性就是如果前面的 condition 為 0，則不執行後面）

## `console.log()` 和 `return`
是一體兩面的東西，一個單純print，另一個則是save。

**nested的時候需要注意有沒有忘記return...**

## Scope
The place where a variable defined will decide where that variable can exist(access).

(variable被定義的地方決定了它的生存空間)
#### Function scope
* variable重複出現在function內和外的情況 : 
 * variable被定義在function外 但是在function又給value的情況
 * 相同variable被重複定義在function外 & function的情況
 * 影片210

#### Block scope
有 `{ }`的syntax (except `functnion( ){ }`)
* 出現用 `var` 定義變數的情況 : 
 * variable will be scoped to **function** but not being scoped to **block**
 * bad bad, 少用這種東西
 * 影片211
 
#### Lexical scope
Lexical在這邊的意思我理解為 syntax，基本上就是在說明nested function的情況之下，variable的accessibility.

結論 : 
* function 裡面又有 function 的話需要 double run both functnion
* 影片212

## Higher order function
functions that operate on/with other functions.

就是指function發生下面這兩種情況的互動情形 :
1. 把function1作為arguments傳給另一個function2
1. return a function

第一種情況，需要注意的重點有:
* function2裡面的argument需要加上 arg `( )`來表示它是一個function
* function1傳入的時候，`( )` 的存在與否有很大的差別
* 影片214

第二種情況的用途和需要注意的重點有:

(function2 nested in function1為例子)
* `function1(arg) { }`除了在arg可以輸入使用者想要的值之外，還可以在function2的arg來客製化使用者想要的值。
* 影片215
```js
function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
        }
}
```

## 'This' Key word
* use the keword `this` to access otehr properties(value) on the same object.
* the value of  `this` depends on the invocation context of the function it is used in .
* 影片 260 的 event listener 也有使用到
## Method vs Function
首先要有個大觀念就是javascript的一切都是由Object所組成，內建的function都是建立在某些Object之下，**window{ } is the top level object**，而method就是可以被加進上層Object{ }的function。  所以三者的集合就是 : Object > function > method。

* Object裡面的method有shorthand定義方法
* 影片216


## Try/Catch statement
可以定位發生error的code的位置
```
try {
 badCode(){}
} catch {
 console.log('error')
 //如果 `try` 發生error 則會執行 `catch`，如果沒錯則不會執行`catch`
}
```
## the forEach method
`arr.foreach(function(ele) { } )`，根據array的每一個element進行function，**1 element do 1 function**。
* 影片221

## the map method
creat a new array with the results of calling on every element in that (same) array.

(在不創造新的array的情況下，以element為單位，更新現有的array)
* 影片222

## arrow function
用`=>` 取代 `function`，例如 :
```
let greet = (name) => {return `Hey ${name}!`}
```
#### nested function/method的情況，要記得再放一次 `=>`

#### arrow function impicit
只有arrow function可以做 : 
* 省略 parameter `()`
* 省略 curly braces `{ }`
* 省略 `return1` (但還是會return)
* 影片224

![224.png](./note/224.png)

## call back
> A callback function is a **function passed** into another function as an argument, which is **then invoked inside (not immediately)** the outer function to complete some kind of routine or action. BY [MDN](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)

#### `setTimeout` and `setInterval`
* `setTimeout` 等一定的時間過後才執行code
* `setInterval()` 以一定間格的時間循環執行code，要停止的話要 `clearInterval( )`

## the filter method
creates a new array with all elements that can pass the test which is implemented by the provided function.
* 常常跟map()一起用

## some and every method
兩個都是booleans, return boolean
1. The `some()` method tests whether at least one element in the array passes the test implemented by the provided function.
1. `every()`則是要全部element都true才會回傳true

## reduce method
![229.png](./img/229.png)
* 跟下面code做的事一樣?
```
for(let i = 0; i < 10; i++){
    sum += i ;
}
```

## Newer JavaScript Features
對應 Section23

### Default Params

1. Default parameter, the old way : 直接在 curly braces 裡面做判斷
2. parentheses 裡面給予 default value，注意先後順序會影響 default value。

### `...` Spread in Function Calls
就是 expand 的概念，例如 spread array into argument one by one，[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) 的英文說明其實蠻長的，換成中文之後意外的很簡短→
> 陣列或字串展開成 0 到多個參數(如果是function的話)或是０到多個元素(如果是array或字組的話)，或如果是物件的話則展開成０到多個key-value pair。
* Multiple array/object combine to one
 * 相同的，multiple key/value會受先後順序影響而覆蓋

### Rest Params
使用上跟 spread 幾乎一模一樣，都是 `...`，但意思完全不同。要理解這個東西（？），首先要知道：

Arguments object : 
* 就是 function 裡面的 `()`
* 它是一個 **array-like** object.（可以用 `.length`，但不能用 `pop`, `push`）
* **Not available inside of arrow function**

因為最後一點，才有了 rest params。
> accept an indefinite number of arguments as an array

比較 rest 和 spread 在實作上的差異，以MDN Web Docs的範例來說明 :
1. [Spread](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
1.[Rest](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
Spread傳的是 object, array, string，都是複數個，Rest 則是 1至無限多個 value

### Destructuring (not yet)

## DOM的概念
對應 Section24
### DOM (Document Object Model) 是由許多Javascript的objects所組的網頁結構樹。
> 疑惑:所以我們寫的javascript code是從DOM的層面去運作的?

* `console.dir(document)`，可以看到document
> document is the entry point of DOM
* HTML、CSS 都是經由 Js 以 Object 的形式導入 document

### 用 document method 從 DOM 取出 Object
1.  `document.getElementById('banner')` 跟 `console.dir(banner) //不用“ “` 是一樣的意思，但前者會回傳HTML tag，後者回傳Object的形式。
 * 如果有複數個相同 Id 的 Object，則會回傳 `HTMLCollection`——一個看起來像array但不是array的東西，它可以用一些但不是全部的 array syntax 做處理，裡面的每個value(?)叫做 Element。
1. `querySelector` & `querySelectorAll`
 * 跟 `.getElementById()` 是相同的作用，但它是 all-in one kit，透過 `.`, `#`, `h a`, `[  ]` 等CSS syntax 來作 filter。
 * **`query`** 而不是 qury
 * `querySelectorAll` 而不是 querySelectorALL
 
#### 比較 `.getAttribute()` 跟 `.querySelector()`
前者是從 HTML tag 取出，後者是從 Javascript DOM object 取出。

前者要修改 tag 的話要用 `setAttribute`，後者要修改的話要選擇 object key。

### 修改 HTML 的 content
1. `.innerText`
 * return content 
 > Represents the "rendered" text content of a node and its descendants. [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText)
 * 只能修改tag內容，不能修改tag本身
1. `.textContent`
 * return everything, 會有很多 space
 * 只能修改tag內容，不能修改tag本身
1. `innerHTML`
 * 能修改tag本身


### 對CSS attributes做修改的方法

#### 方法 1 : `.style` 和 `window.getComputedStyle()`
1. The `style` read-only property returns the **inline** style of an element. 它是直接從 HTML tag 去做取出的動作。
1. `Window.getComputedStyle()`是從DOM object 去做修改

#### 方法 2 : `setAttribute()`
跟上面一樣是從 HTML inline 去做修改，使用 `.getAttribute()` 和 `.setAttribute`

#### 方法 3 : `.classList`
跟上面一樣是從 HTML inline 去做修改，推薦使用

### Traversing Parent/Child/Sibling
1. `.parentElement`、`.children` ，向parent或children element移動。parent只有一個但children可以有很多個，所有在 console 可以看到 children 是一個 HTMLCollection.
1. `.nextSibling`、`.previouSibling`，回傳的是 Node (有很多[ space ])
1. `.nextElementSibling`、`.previouElementSibling`，回傳的是 Element

### Append & AppendChild
有很多種方法，建議不要背而是會去查就好
1. `.appendChild( )`
要先做出一個完整的 element (`.creatElement()`) 才可以丟給 AppendChild，而且只能一個一個加，加在末端。
1. `.append( )`
跟上者差不多，可以一次 Append 很多個
1. `.perpend`
1. `insertAdjacentElement( )`，用 json?

### removeChild & remove
1. `removeChild` 要先找出 parent 才可以使用
1. `remove` 可以直接 remove


## DOM events
對應 Section25
### 3 way of adding events to HTML
1. inline event : 直接寫在 HTML，例如
`<h1 onclick="console.log('boo')">Inline Events Suck...</h1>`
1. use the onclick property in js，**要放在function裡面，免得 execute right away**
 * 同個 element 不能同時有兩種 onclick
1. `.addEventListener` →　better one!
 1. 同個 element 可以同時有兩種 onclick
 1. 可以再對 onclick 進行微調
 
### Keyboard Events & Event Objects
1. [Event Objects](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_objects)，在影片中被用來回傳 event object，可以知道當觸發一個 event 的時候所產生的 object 長怎樣。
1. Keyboard Events 跟 Event Objects 一起使用就可以**避免使用者輸入的內容跟鍵盤按鍵不一致的問題**，例如按鍵 Q 被設置成 shift

### Form Events & PreventDefault
Form Events 例如網頁需要輸入帳號密碼，並且按下 submit button 的時候，因為按下 submit 的瞬間就會被導向其他頁面，所以如果用 js 對 submit 設置 event 的話，當按下 submit 之後的流程會是 : js > 跳轉到其他頁面，如果不想要跳走頁面的話，就可以使用`.preventDefault( )`

### Input Events & Change Events
1. Change Events only happens when you **blur** the input. (點 INPUT 以外的地方)
1. Input Events

### Event Delegation
> Event object 根據所選的 property 不同，可以做很多變化！
> `e.target.nodeName === 'LI' && e.target.remove();`，boolean `&&` 左邊是 F，則右邊永遠不會運行（？）
## Async JavaScript
對應 Section27
### The Call Stack
Javascripts 執行程式碼的實際地方，一次執行一行，FILO的結構
Tools to view STACK
1. Devtools - sources :  breakpoints 是跳過那一行的意思
1. [Loupe](http://latentflip.com/loupe/?code=ZnVuY3Rpb24gbXVsdGlwbHkoeCx5KSB7CiAgICByZXR1cm4geCAqIHk7Cn0KCmZ1bmN0aW9uIHNxdWFyZSh4KSB7CiAgICByZXR1cm4gbXVsdGlwbHkoeCx4KTsKfQoKZnVuY3Rpb24gaXNSaWdodFRyaWFuZ2xlKGEsYixjKXsKICAgIHJldHVybiBzcXVhcmUoYSkgKyBzcXVhcmUoYikgPT09IHNxdWFyZShjKTsKfQoKaXNSaWdodFRyaWFuZ2xlKDMsNCw1KQ%3D%3D!!!)

### WebAPIs & Single Threaded
JS 是單工的程式語言，一次只能執行一行( Single Threaded )，但可以透過 Web APIs (簡單來說就是一堆 method )來分擔需要質性的 code，也就是讓 browser 來幫忙的意思。
> 從 stack 的觀點來看就是 :當 call stack 發現到要執行 Web APIs 時，會把這些處理不來的 method 傳給 browser 去執行，browser 執行完會再回傳給 call stack.

### Callback Hell
長得跟被波動拳打過一樣的 code (?)，因為 nested function 而產生（根據不同行為而有不同 call back）。

### Promises
> The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

A Promise is has 3 kind of states:
1. pending: 等待結果中
1. fulfilled: meaning that the operation was completed successfully.
1. rejected: meaning that the operation failed.

js的 code會一行一行連續執行而不會等待，用 Promise 可以知道 js 是否執行完某一段 code ，執行的結果是 solve 還是 reject，以及根據結果（solve / reject）做出不同行動。

* 常用到的 syntax : `.then()`, `.catch()`, `return`

* 不錯的 pattern :
(success promise)
![277.jpg]()
![277-2.jpg]()

### The Async / Await Keyword 1/2
`async function (){}`
，加個`sync` will automatically return a promise object，也就是說不用再做 return (當然你也可以 return)。
* if the function is true => resolved promise
* if the function is throws an err => rejected promise

一些 patterns :
`then`、`throw`、
![278.png]()
![278-2.png]()

### The Async / Await Keyword 2/2
> The await operator is used to wait for a Promise. It can **only** be used inside an async function within regular JavaScript code; however it can be used on its own with JavaScript modules.

一些 patterns :
`try`、`catch`
![279.png](省略掉 `.then()`，增加可讀性、flatter)
![280.png](省略掉 `.then()`，增加可讀性、flatter)

## DOM events
對應 Section28
### AJAX
asynchronous javascript and xml (AJAX)
在網葉上用 js 做request 並取得 response 的行為（但不離開原本的網頁）。 response 只需要 data 就好， HTML, CSS, js 這些都不需要。

### API
application programing interface，例如：
**WEB API**－用http來提供特定資訊的 end point.
（直接向 server 做 request 的話得到的 response 會很雜亂，從HTML, CSS, js都可能會在一起然後丟出來，不能只單獨拿到特定資訊）
request => API => response

### JSON
java script object notation，跟 API 做溝通使用的格式通常是 XML(past) 或 JSON(now, most)，so...雖然常常聽到藥用 AJAX 做 request，但實際上普遍都是用 AJAJ(JASON) 在做 request.

JSON => API(parse to code) => return JSON

* 一些 syntax :
`JSON.parse()`、`JSON.stringigy()`

### Query Strings & Headers
* query string : ?q=`something`, 
a way to provide addtional information to a request.(給 API會得到乾淨的資訊，給普通 url 會得到一大串資料)
* 每個 API 接受的格式都不一樣，要先去確認 documents，例如有些惠要求 headers

### 3 different of making requeat via js 
#### XHR
XMLHttpRequest : an old, bad way to do a reuqest. 大概長這樣：![287.png]()

* do not support promise

#### Fetch API
* support promise

`detch( )` return a response as soon as it receive a header. SO...不會得到完整的 promise object(?). 使用 `.json()`可以解決這個問題。
> The `json()` method of the Body mixin takes a Response stream and reads it to completion.

* 一些 pattern :

![288-1.png]()
![288-2.png]()

#### AXIOS
是一個 [library](https://github.com/axios/axios)，解決了 fetch 回傳 header、不會直接 parse的困擾。
* specify headers

## Prototypes, Classes, & OOP
對應 Section29

### prototypes
object 本身預設帶有的 methods. (當然，prototype也是一個 object )

新增 prototype 的 method (也可以修改或刪除?):
`String.prototype.grumpus = ()=> alert("go away")`

#### prototype vs _proto_ ?
prototype 是實際的 object，_proto_ 是一個 reference (to prototype).

### factory function (old)
`this` 在 function 裡面，而 function 裡面又沒有空  object，則 `this` 是指 window.
如果 function 裡面有空 object，則 `this` 是指該 object.

### Constructor Functions
根據一個已存在的模板 function 來複製出新的 object，使用 `new`來進行複製，使用 `this` 來同步 value.

#### new keyword

### class
* class name 通常用大寫開頭
* 裡面一定會有 `constructor (){}`，`construstor` 在 `new` 的時候會馬上執行
* 使用 `this` 會指向 `new` 出來的 object (=instance)
* 放在 class 裡面 ( constructor 外面)的 metho d會作為 prototype.
* pattern : \The Web Developer Bootcamp 2021\OOP_Code\05_Classes

## Exploring Modules & The NPM Universe
對應 Section31, 32

A js runtime that run js outside the browser. (browser, Node是兩個獨立的東西)

[Node.js Process Doc](https://nodejs.org/docs/latest-v12.x/api/process.html)
* `process.release`
* `process.cwd()` : returns the current working directory of the Node.js process.
* `process.argv` : returns an array containing the **command-line arguments** passed (直接跟在 js 檔後面) when the Node.js process was launched. 第一個 cmd argument 固定會是 Node.js 檔案的位置，第二個 cmd argument 固定會是 js 檔案的位置

`nvm` : node version management

### Modules
有兩個 js 檔( js1.js, js2.js )，在 js2 中引進 js1 的方法：
* `const 123 = require('./js1')` //空 object
* `module.exports` 預設是一個 **object**，在 js1 裡面設定有哪些 code 可以被出口到別的檔案(?) 
* 或是也可以直接引進 directory

### [NPM](https://docs.npmjs.com/)
* `npm` : node package management
* npm 是一個 packages library
* 安裝某個 package : `npm install give-me-a-joke`
 => node_modules, package-lock.json 資料夾 (要先安裝才可以使用)

#### package 的安裝路徑選擇：local? global?
通常會安裝在 local，因為或許會需要用到不同版本的 packages. Global 預設安裝路徑是 `/usr/lobal/lib/node_modules`

### Package.json
#### 新建/自動安裝 package 的方法
`npm init` => package.json // 裡面紀錄其中一項是 packages 的 dependency，可以從這裡知道 project 會用到那些 packages 以及版本。
* 透過分享 package.json，其他使用者就可以知道他們該安裝那些 packages 才可以執行 project. (因為使用別人的js，不會預設安裝package)
* `npm install` 會根據package.json自動安裝需要的packages
 **這邊的先後順序很重要，先 init 再 install packages**

##  Creating Servers With Express
對應 Section33

### 用 express 處理 request / response
* `.get()` : 回傳 response
* `.use()` : 當收到request時
* `.listen()` : 監聽特定 port
```
app.get('/', (req, res) => {
  res.send('Hello World!')
})
// res argument 還可以再有 method

### Express Routing Basics
Routing : 把 request 轉到和對應的 code.
* `.use`, `.get` 都可以處理 request
 * `.get` 只能回應 get request.
 * `.post` 處理 post request

* `res.send` 只能傳送一次response,  不能傳送多次response
 * request argument 是一個 object
 * response 也是一個 object

* `*` argument 表示 every request. 層級優先其他request, 所以要放在其他 menthod下面才壁面覆蓋。

###  Express Path Parameters
path 可以用變數(?)來表示，例如：
```
app.get('/r/:subreddit', (req, res) => {
const {subreddit} = req.params;
})
```
* req.param 可以取出 url 網址


### Query Strings
`req.rquery`

query 是 url 的一部分，在問號後面

### Nodemon
npm 自動 restart js file (terminal)

## 
對應 Section33
templating : 處理有固定規律的文字（網址），使用 templing 的方法：EJS( embeddd.java script).

### Creating Dynamic HTML With Templating
#### 使用 EJS 的pattern

`require express => app.set('view engine', 'ejs');`， .set() 會自動 require EJS 所以不用 require EJS.
**要在 project資料夾下再建立一個預設資料夾 views 放置 EJS file**


`res.render('EJS file')`，render 會從預設資料夾找ejs，ejs會把HTML, js 傳給client.

#### Setting The Views Directory
* 執行 ejs 的時候只會從.project 資料夾開始找，所以如果路徑有變更就會報錯，解決方法：影片304.
* ejf file 基本上用的語法跟HTML差不多，只是有一些 tag 可以用來 embeded js syntax.
* 不是通過HTNL render 網頁，而是透過 ejs file.

#### EJS Interpolation Syntax
* EJS tag, 放在HTML，用來指向EJS，tag 裡面可以直接放 js syntax.
* 使用前記得在 VScode 安裝 EJS extension
#### Passing Data from JS To Templates(HTML)
* ejs 和 js 之間可以用 varible 的形式傳 value 給HTML, 例如：
```
const cats = ['blue', 'rocket', 'monty', 'winston']
res.render('cats', {allCats: cats})
```
#### Serving Static Assets In Express
```
app.user(express.static('public'))
// public 是 projetc 資料夾下的一個資料夾，裡面放 HTML, CSS...

#### EJS partials
partials : 
ejs file 會有很多重複出現的 pattern, 例如`<stylesheet>`, `<script>`......`<haed>`，把這些重複的 pattern 取出放到一個 public 資料夾，再用 ejs `<%= include('partials/head')%)>` 放進每個 ejs file.

* directory path:
![349.png]()
* 透過 partials 可以把不同 pattern 取出，然後重複放到其他 ejs file.

partial including

## Defining RESTful Routes
對應Section35

### Get Vs. Post Requests
HTML tag 用 `<method = post>` 來 request
#### Get
* Used to retrieve information
* Data is sent via **query string**
* Information is plainly visible in the **URL** (URL只能新增auery, 不能改變)
* Limited amount of data can be sent

#### Post
* Used to post data to the server
* Used to write/create/update
* Data is sent via **request body**,not a query string (URL可以整個改變)
* Can send any sort of data (JSON!)

###  Parsing The Request Body
`res.body` 可以被 parsing, 要記得對 express 標記 parsing 對象的不同。
```
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded, ex post res
```

### REST
[repressentational state transfer, REST](https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm) :一個用來規定 server / client之間的溝通的準則。(例如：具有 CRUD(creat, read, update, delete) 功能的API?)
* **rest** 類似 protocal, **restful** 類似它的實作
* gists : a file that anybody can share on GitHub. 它有自己的 API
read

new
post request
push
.redirect//完成response 之後，client 如果再進行重新整理，client 會再一次傳 value 給 server，造成問題
//make a second (default) get request, status code 302

重新整理頁面和再次輸入 url 的不同?後者會重新開啟Server, comments會 default輸入 url 的不同?後者會重新開啟Server, comments會 default.
把.render() comment 掉會如何? 永遠都在等response


show (detail)
get
[uuid](https://www.npmjs.com/package/uuid)

### put vs patch request
* put:payload (=body)完全改變
* patch:部分改變

### HTML 只能傳送 get/post request 的困擾
npm i method-overide
對改變request


## MongoDB
對應Section36

### SQL DB vi no-SQL DB
1. SQL DB:使用 SQL structure query language, 有固定的form pattern.
2. No-SQL DB: 使用 SQL 以外的多種語言

### 新增環境變數（Windows10）
Edit the system environment > Advanced > Environment Variable > System variables > PATH > Edit > New
* 環境變數新增的是資料夾路徑，新增該路徑之後會自動去資料夾尋找檔案
* 假設每個資料夾都是一個點，那麼環境變數就會依據存放的點來查詢是否有該檔案，也就是說這是一個點對點的查詢方式，因此當檔案的位置改變到其他點裡面（環境變數以外的點），那麼就會發生找不到的情況，或是相同名稱的檔案有複數個並且分別在不同點之中，那麼環境變數會依據點的先後順序來尋找檔案。

### the mongo shell
用來建 database, 可以有複數個 DB

* `use animalShelter` : 新增一個 DB
* `show databases` : 查詢現有的 DB
* `db` : 查詢現在默認的 DB

* collections: 類似 container 的概念， collection 不存在則會自動新增。 1個 collection 由很多 {}組成。每個 { 都會自動附帶一個 _id}
* 使用`.updateOne()`去更新不存在的 key 時，會自動新增該 key/value.
* `.updateMany()`會更新 container 內的所有 {}. (不是單一 {} 更新複數個 value)
* `.delete()` 如果是 `({})`會刪除全部
* [other operator](https://docs.mongodb.com/manual/reference/operator/query/)

#### 一些學習中遇到的問題：
1. Mongo connection Problem

![connection denied](https://img-a.udemycdn.com/redactor/raw/q_and_a/2021-03-05_14-14-03-9704ee879acb999fa0ae9f30d57a17a8.jpg?gckbSxUDKvsDnuHPhLoAvaL4Y-3sKptZsk9XUblHiwmD2Srcm5K8g0k_LfdWK0naGvbmm113TCT_nEinYhElLriESvTEI7GUTUD0sp956qakS-zoBr184Qj2nRKV_K2WdV7iJfIMz9BQtLVrblryS58O1a3TdtChJB7MMiPgkjKrAKFSuZm2lpnN0Lk)

[Solution](https://www.udemy.com/course/the-web-developer-bootcamp/learn/lecture/22086118#questions/14271464)

In order to start the mongo shell, you need to start the MongoDB database first. So, user powershell `mongod`, then open the mongo shell.


## Connect Mongoose to Mongo
對應Section38

### ODM
Mongo <==> Mongoose <==> Javascript, 

[Mongose](https://mongoosejs.com/) maps doucuments coming from a database (like Mongo) into usable JavaScript. (雙向)

ODM, object data mapper or object document mapper, Mongoose 是一種 ODM.
 
* shema?class?
* 先有schema, 再有 class, 再有 instance
* 
 1. js 裡面有 instance, mongo 不會直接寫入該 insatance, 需要透過`.save()//簡單達成Promise`才會更新到 DB.
 1. 或是用`instance.insertMany()`,不用 .save()
 
* 普通的 .`update()`不會回傳結果，要用`findOndeandUpdate()`才會
* `.remove()` vs `.delete()` ?
* instance method (從scheman設定?), class, module不懂

### `.static` and `.method`
（紙本筆記中）


### virtual (property)
不存在於 DB, 但存在於 js 中的 property.(?)


### Middleware (or pre and post hooks)
`.pre` / `.post` 會在 function 之前或之後執行一段程式。
