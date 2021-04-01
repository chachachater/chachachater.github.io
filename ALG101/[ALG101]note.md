# JS note
紀錄[ALG101] 先別急著寫leetcode的學習筆記，筆記內容主要著重在紀錄我自己比較容易忘記的概念，作為複習使用。

## Unit3：寫程式前的最後一步：看懂題目
#### 確認輸入範圍
題目的輸入範圍會決定解題的方法，限制的形式分三種 :
1. 空間限制
 * 電腦可以用的記憶體有限，當超出記憶體的存取範圍時，資料就不能一次取出來進行資料處理。
 * 不同 type 所需要的記憶體大小不同。
 * 用e來表述10的倍數，例如 1e6 就是 100萬。
1. 時間限制 (跟bigO排序有關)
1. 型態限制
 * 不同 type 所需要的記憶體大小不同，例如JS的數字最大只能到 `NUMBER_SAFE_INTEGER`
 * 浮點數精準度問題
 
 
 #### 輸入與輸出方式
 解題系統的輸出入方法主要分為兩種 :
 1. 以函式輸入
  * 解題系統會先給函式
 1. 標準輸出入
  * 輸入會使用[space]和[enter]，要先對這部分進行處理，例如 :

處理輸入的方法：
```java
//java
Scanner input = new Scanner(System.in);
String in = input.nextLine();
String s[] = in .split(" ");
```
```javascript
//javascript
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin
});
//將input存到lines
var lines = []
rl.on('line', function(line) {
    lines.push(line)
});
//回傳結果
rl.on('close', function() {
    solution(lines)
})

function solution(lines) {
//這裡放程式碼，記得最後的輸出必須是 console.log;，而不是 return.
}
```
處理輸出到輸入的方法（也就是測試結果）
```linux
#linux
cat input.txt | java code
```

 
