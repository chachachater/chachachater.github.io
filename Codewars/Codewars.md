# Codewars入門
這邊主要作為我的Codewars筆記，紀錄解題心得和其他相關想法。

## Codewars 簡單介紹
[Codewars](https://www.codewars.com/) 跟有名的Leetcode一樣，本質上都是解題系統，只是Codewars更具趣味性，主打特色偏向「開放讓所有使用者自創題目，再由其他玩家協同開發各語言版本」以及社群互動的概念，[這篇文章](https://medium.com/schaoss-blog/%E5%B7%A5%E7%A8%8B%E5%B8%AB%E5%80%91%E5%88%B7%E9%A1%8C%E5%88%B7%E8%B5%B7%E4%BE%86-codewars-%E5%88%B7%E9%A1%8C%E5%BF%83%E5%BE%97%E5%88%86%E4%BA%AB-13a89e8e7736)第一段有相關介紹。

一開始需要選擇自己會的程式語言，然後通過簡單的程式測試才可以Sign up。


Sign up成功，進入頁面之後右下角會有新手上路的教學，建議要看一下才會比較好懂網站上的一些用語(?)，這邊摘要紀錄一些我網站常見的用語 :

* Kata :
> Kata are short coding exercises that are designed to test your abilities.
 * 簡單來講就是題目、關卡的意思。

* Ranks :
>We use a "kyū" system to help indicate which level you have trained to, as well as to indicate which level a kata (code challenge) belongs to. Starting at 8 kyū, you will advance all the way to 1 kyū. 
 * 網站上的玩家跟關卡的等級/難易度是用 "kyū" 來稱呼(作者說靈感來自日本的圍棋等級，網站裡面還可以看到其他日文單字例如sensei)
 * 等級最低 8 kyū，最高 1 kyū
 * 解的題目越難升等升的越快，但需要累積一定的題目數才會升等
 
* Honor :
> Honor is what we call the points that you earn when doing activities on the site.Honor reflects your experience on the site, contributions, etc. Rank more closely reflects the level of challenges that you are capable of completing.
 * 類似玩家對網站的貢獻度，包括社群參與度、解題...等。
 
 (Ranks和Honor可以在網站右上角看到例如下圖，左邊是Ranks右邊是Honor)
 
 ![介紹網站.png](https://github.com/chachachater/chachachater.github.io/blob/master/Codewars/%E4%BB%8B%E7%B4%B9%E7%B6%B2%E7%AB%99.png?raw=true)
 
## 如何使用解題系統

![如何使用解題系統.png](https://github.com/chachachater/chachachater.github.io/blob/master/Codewars/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%E8%A7%A3%E9%A1%8C%E7%B3%BB%E7%B5%B1.png?raw=true)

上面的圖示題目的解題介面，可以選擇自己要用的程式語言，連vim都可以選。

需要注意的是右下角有test跟attempt，test只是先試跑一些輸入讓玩家確認(速度快)，要正式送出答案要點attempt之後，才會出現submit，將答案上傳(速度慢)。

(記得不要點錯...像我剛開始用都只點test，然後發現等級怎麼都沒有上升......)

答案正確之後，就可以看到其他玩家的不同解法和自己的解法。


## [Kata] Even or Odd
#### 題目 : [Even or Odd](https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript)

Input integer ，判斷是奇數還是偶數
#### 思路 : 奇數被2除會餘1，偶數被2除會餘0，`%`可以取出餘數。
#### 其他心得 :

雖然解出題目了，不過下面就有Solution可以點開來看，我本來還想點開來看，不過一點開就被提醒說看解答的話，我的Rank/Honor會下降，瞬間失去點開來的慾望(真的不想被降等)，一下子就體驗到這個網站的強大了XD

![介紹網站.png](https://github.com/chachachater/chachachater.github.io/blob/master/Codewars/unlockSolution.png?raw=true)
)
 
## [Kata] Opposite number
#### 題目 : [Opposite number](https://www.codewars.com/kata/56dec885c54a926dcd001095/train/javascript)

Input number ，進行正負數轉換並回傳
#### 思路 : 數字乘以`-1`會得到其正/負數。
#### 其他心得 :
* `0*-1`還是0
* 題目看不出來number是否可能會超過記憶體可以儲存的最大值、會給哪種 type (用js就沒這問題XD)

## [Kata] Number-Star ladder
#### 題目 : [Number-Star ladder](https://www.codewars.com/kata/5631213916d70a0979000066/train/javascript)
#### 思路 : 
* 最後一行不需要 `\n` *There is no newline in the end (after the pattern ends)***
> 用if跳過
* 第一行沒有`*`
> 用if跳過
```js
if(i === 0){
      output = output + '1' + '\n';
    }
```
* `*`需要在一行內重複多次
> 用 nested for 來處理

#### 其他心得 :
* 需要考慮到n < 1 的狀況，其他還有limit、type的情況
 
 
 
 
 
 
 
 
 
 
 
 
 
 
