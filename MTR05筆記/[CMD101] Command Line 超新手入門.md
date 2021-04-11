# [CMD101] Command Line 超新手入門
> 共 35 min

## Windows 端使用 git bash 或 cmder 來操作 CLI
我自己原本是使用 cmder，不過會遇到一些奇難雜症，像是出現文字殘影、vim 在長按 [↑↓←→] 之一的時候會噴出一些字，超級困擾的而且找不到解決方法，所以使用 git bash。

### What is CLI and GUI ?
GUI,graphical user interface , 圖形化的terminal, 在 GUI看到的大部分（除非你在GUI 裡面又開了一個  terminal），即使是文字，對電腦來說都相當於"圖片"。

CLI, command line interface, 就是terminal, 純文字的介面
> 內容/格式是一回事，怎麼解讀/執行方法是一回事

> 解讀的方法很多種，例如一個 HTML檔案，可以用 browser打開，也可以用 notepad 打開或是用 VScode，不同的解讀方式看到的結果也會不同

## 常用指令
* `pwd`: print working directory
* `ls`: list
* `cd`: change directory, `~` 在我這裡代表 /c/Users/aries (桌面)
* `man`:  windows 沒有, linux 有, ios 有

    可以用 `--help`來查詢 或是用 google直接搜尋 `manual` 也可以有相似結果
* `clear`
* `touch`
* `rm`: remove
    
    `rm -rf` 資料夾裡面的東西通通刪光(-r)，不會事先詢問(-f)
* `mkdir`: make direcory
* `mv`: move

    移動檔案以及...改名! 例如: `mv text.txt hello //改成 hello 了`
* `cp`: copy 

    如果是資料夾，跟 `rm -r` 用法一樣, `cp -f directory destination`
* `cat` //連接兩個檔案用
* `grep` //抓特定字
* `wget` // get respond, Windows 沒有，不過可以自己去 GNU 下載來使用
* `curl` //送出 request
* redirection //把輸出導向其他地方( `>`全部覆蓋, `>>` 新增)，一般會輸出到CLI
* pipe `|` //把`|`左邊的輸出丟到右邊的輸入

* vim : 好用的 code 編輯器，詳細用法可以參照 [鳥哥的介紹](https://linux.vbird.org/linux_basic/centos7/0310vi.php#vi)
