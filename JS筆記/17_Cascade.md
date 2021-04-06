# Cascade
> 對應**重新認識 JavaScript: Day 21**
Cascade (fluent interface), 相當於函式的 combo 技

## function constructor
function constructor 具有以下特色（我了解到的）：
* 可以預設參數
* 使用到 `this`
* 裡面會有更多 function 提供不同操作方式
* 需要 new 出實體才可以使用

例如
```
var calNum = function(num){
  this.num = num;

  this.add = function(newNum) {
    this.num += newNum;
  };

  this.sub = function(newNum) {
    this.num -= newNum;
  };

  this.multi = function(newNum) {
    this.num *= newNum;
  };

  this.division = function(newNum){
    this.num /= newNum;
  };
};
// 透過 new 新增一個 calNum 實體
var a = new calNum(100);

console.log( a.num );       // 100

a.add(100);
console.log( a.num );
```

## Casacde
上面範例的constructor還可以再進一步改良，透過 回傳 `this` 來達到連續使用 constructor 的效果，例如：
```
var calNum = function(num){
  this.num = num;

  this.add = function(newNum) {
    this.num += newNum;
    return this;
  };

  this.sub = function(newNum) {
    this.num -= newNum;
    return this;
  };

  this.multi = function(newNum) {
    this.num *= newNum;
    return this;
  };

  this.division = function(newNum){
    this.num /= newNum;
    return this;
  };
};

var a = new calNum(100);
// Cascade
a.add(100).sub(50);
console.log( a.num );   // 150
```

好處就是:
更簡潔
連續使用
容易理解

