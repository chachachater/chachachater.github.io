# [GIT101] Git 超新手入門

> 共 107 min

> 這行程式碼是甚麼時候被加進去的？某個時間點我加了甚麼程式碼？

> 去哪裡看修改紀錄？ => history 或 blame

blame 跟history差不多，只是 blame 用時間序來排列

commit向下增加版本 / branch? 平行版本在往下增加版本 ，要 merge 回來(增加的版本都會放進去 main 裡面，而不是只有最終版本)

# 什麼是版本控制？

> 報告用的 PPT 到底甚麼時候會是最終版

檔案的更改變動是一個連續的過程，**每次更改檔案並產生一個新的檔案版本** => 這個過程不斷 loop 之後會累積非常多版本，造成不好管理之類的問題，所以需要透過版本控制來解決這個困擾。

* 用 hash+資料夾來區分不同版本
* 用一個檔案來存放 hash 
* 用一個檔案來存放最新版本
* 不想加入版本裡面就不要放到資料夾
    > 那為什麼要寫...? 例如放有帳密的檔案

# 常用指令
* `git init`
    初始化版本控制
* `git status`
* `git .gitignore`
    .gitignore 用來放不要加入版本控制的檔案名稱
* `git add file`, `git add .`
    加入 status stage = 加入tempory資料夾
* `git commit -am "say something"`, `git commit -m "say something"`
    加入版本控制 = 正式創造版本控制用的資料夾
    > 新檔案要先add才可以commit
    > `git commit -am` 對新檔案沒效
    
* `git checkout hash`
    切換版本 = 去到某個資料夾
* `git log`
    開始看 commit 紀錄
* `git commit --amend`
    我 commit 了但是想改 commit message 的解法
* `git reset HEAD^ --hard`, `git reset HEAD^ --soft`
    我 commit 了可是我又不想 commit 了的解法， hard 會把 commit 連同檔案都刪掉， soft 則會留著檔案但 commit 刪掉


# 為什麼需要 branch?

在同一個源頭，平行（兩條branch互不干擾）開發然後再合併。

> 新增一個和 main 資料夾一模一樣的檔案來當作 branch
![假設藍色的 commit 之間都沒有變化](https://i.imgur.com/ulonSdT.png)

## 新增移除合併 branch

* `git branch newBranchName`
    新增 branch = 新增平行資料夾
    > 記得要`commit -am`
* `git branch -d new-branchName`
    刪除 branch
* `git checkout branchName`
  * 切換到別的資料夾
  * 或者是摘下遠端的 branch
      * (和 pull, fork 的概念不一樣別搞混，這邊是有編輯權限，fork是複製一個 respository, pull是把檔案丟上repository)
* `git branch -v`
    *看看現有的branch
* `git branch -m newBranchName`
    修改 branch 名稱，阿要記得先移動到該 branch 再做

    想摘下遠端的 branch 給你
    
## 發生衝突怎辦
conflit 衝突，兩個 branch 的相同版本的相同位置同時被修改， merge 的時候會通知你手動修改

## 共享 repository `.git`

??

## Git hook
發生某事的時候通知我，去 .git 可以設定，不過他是用 bash 寫的，使用前要先了解一下

# Github

**使用的重點就是遠端和本地需要記得同步**

> Git : 版本控制程式 / Github : 圖形化的 git

> contributor 協作者

## 如何把 code 放上 GitHub

從 github 新增一個 respository ，然後用 git push 上去，要拿下來就是 `git pull`，從哪個 respository 拿下來就會放回哪個 respository

一定要注意自己目前在哪一個 respository 和哪一個 branch 免得越弄越亂

```
git remote add origin https://github.com/chachachater/test.git
git branch -M main
git push -u origin main
```

* origin 指的是
`https://github.com/chachachater/test.git`
* master 是 respository 的根
* GitHub 的 fork 指的是把別人的respository複製一份作為自己的respository
    > 因為不是所有人都有權限來 pull

## 補充資訊

* 免費的網頁空間：GitHub Pages

    可以用來展現自己的網頁作品，需要再回來看
* GitHub flow 有說明完整的fork-pull流程
`https://guides.github.com/introduction/flow/`
*   GitHub 的死對頭們：GitLab 與 Bitbucket
    GitHub 就是個放 repository 的平台，其他人也可以做