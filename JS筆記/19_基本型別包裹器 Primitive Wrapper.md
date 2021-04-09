# 基本型別包裹器 Primitive Wrapper
> 對應**重新認識 JavaScript: Day 23**
為什麼 string type 會有如同 object 一樣的屬性以及方法？
```
var str = 'Hello';

console.log( str.length );           // 5
console.log( str.toUpperCase() );    // "HELLO"
```
## JS 的型別分為　primitive type / object
物件型別當中，又可以再細分出幾種建構器(Constructor)，它們可以把對應的 primitive type 轉型成 object：
```
String()
Number()
Boolean()
Array()
Object()
Function()
RegExp()
Date()
Error()
Symbol()
```

## 基本型別包裹器 Primitive Wrapper

在 JS當中，當我們嘗試著要去存取 String、Number 與 Boolean 這三種基本型別的屬性時，它就只會**在「那一刻」被轉型為該類別的「物件」**

基本型別包裹器 Primitive Wrapper(就是上面那些 constructor ?) 用來提供這些primitive type 自動轉型成物件，然後就可以設定屬性和方法

```
var str = 'Hello';
console.log( str.length );

//上面相當於
var str = new String("Hello");
str.length;

str = null; //回傳對應的屬性後，即刻銷毀恢復成基本型別
str = 'Hello';
```

`.length `、`.toUpperCase()`...是原本就預設的屬性/方法(?)，如果要給自定義的屬性方法則:
```
var strObj = new String('Hello');
typeof strObj;     // "object"

strObj.color = 'red';

console.log( strObj.color );      // 'red'
```

### instanceof 
`XXX instanceof primitive type` 用來確定 primitive type 種類

### .valueOf()
`XXX .valueOf()`用來取得值
