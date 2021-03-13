//Unit1.7：Project1
//字串反轉
let str = 'hello';
let j = str.length;
for(j; j >= 0; j--){
	console.log(str[j]);
}
//為什麼output會是undefined
let str = 'hello';
let j = str.length;
let x = '';
for(j; j >= 0; j--){
	x = x + str[j];
}


//字串反轉
let arr = [1, 2, 3];
let sum = 0;
for(let i = 0; i<arr.length; i++){
sum = sum + arr[i];
}

//找最大值
let arr = [1, 2, 3];
let max = arr[0];
for(let i = 0; i <= arr.length; i++){
	if(max < arr[i]) {
	max = arr[i];
	}
}
console.log(max);
