# Middleware
最近在 Udemy 上面學到 Express 裡面的 Middleware 概念，聽的似懂非懂，所以寫一篇筆記來記錄我對它的理解。

## What is Express middleware?
> Middleware is software containing functions that execute during the request-response cycle and have access to both the request object (req) and the response object (res). Middleware is executed during the window between when a server receives a request and when it sends a response.
--[Express middleware: A complete guide](https://blog.logrocket.com/express-middleware-a-complete-guide/#what-is-express-middleware)

處理從收到 request 到送出 response 這之間所有過程的 function.  
當瀏覽器收到一個封包的時候，JS file 該怎麼處理？課程一開始(Sction40之前)介紹的概念是，通過`app.post()`、 `app.get()`、 `app.put()`、 `app.patch()`來根據url request 送到對應的 route 並回傳 respond.這樣就完成 request--respond 的過程了，但如果不想這麼快就結束這次的 request--respond 過程以便在送出 respond 之前做更多的處理的話，就需要用到 Middle 了。

有哪些處理可以用到 middleware?
官方說法是這樣的:

* Execute **any** code. 所以前後順序很重要
* Make changes to the request and the response objects.
* End the request-response cycle. Ex, `res.send()`
* Call the next middleware in the stack.
* [Exprerss]([https://expressjs.com/en/guide/writing-middleware.html)

## 簡單介紹 Moorgan 的用法
Moorgan 是一個 middleware package，可以自己去 npm 下載來用。

* app.**use** morgan : `app.use()` 會在**每一個** request 被 listen 之後，執行裡面的 parameter. 例如這邊的 morgan 會行一段 function, 然後往後去 match pattern (route) 。
* middleware 如果沒有和 `next()` 一起使用，就不會執行下一個 middlerware.
* `next()` 用來進行下一次的 pattern match (route / request match).只要有 `next()`則比對會一直進行直到出現`res.send('jlfjdso')`或是沒有 next才停止。 post/get?
> 比喻的話 next() 類似繩子和繩子之間的結?
* `app.use()`放在會後面的話，可以用來處理顯示"404 NOT FOUND"(影片418, 4:36)

```
//一個用來驗證 password 的 pattern
const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === 'chickennugget') {
        next();
    }
    res.send("YOU NEED A PASSWORD!")
}

app.get('/secret', verifyPassword, (req, res) => {
    res.send('MY SECRET IS: dghjdtjy')
})
```

# Callback function
接續上一段的內容，從 一個用來驗證 password 的 pattern 這段程式碼可以看到最後一段 code `app.get()`，Express 的官方說明是 `app.get(path, callback [, callback ...])，所以這邊順便紀錄 callback 的筆記。

## What is Callback function?
把 function 丟進其他 function parameter 的作法，所以如果變成很多層的 nested 結構的話，就會出現所謂的 Callback Hell，code 會變得跟被波動拳打過一樣。

當出現 Callback 的時候，可以用來控制 function (以及裡面的 nested function )執行的先後順序，例如可以用`setTimeout`來設定延遲時間。
>　當執行到setTimeout時，會先跳過，把執行的順序優先讓給下一個函式，所以即使是設定的延遲時間為 0，也是會被跳過的。

[這邊解釋得不錯](https://medium.com/appxtech/%E4%BB%80%E9%BA%BC%E6%98%AFcallback%E5%87%BD%E5%BC%8F-callback-function-3a0a972d5f82)


## 結論
```
app.get('/secret', verifyPassword, (req, res) => {
    res.send('MY SECRET IS: dghjdtjy')
})
所以這邊的過程是：(req, res)會作為 parameter 丟進去 verifyPassword 這個 function 執行。

```
