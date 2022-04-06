interface User {
	age: number;
	name: string;
}

// 변수에 인터페이스 활용
var seho: User = {
	age: 33,
	name: "세호"
}

// 함수에 인터페이스 활용
function getUser(user: User) {
	console.log(user);
}
const capt = {
	age: 33,
	name: '캡틴'
}
getUser(capt);

// 함수의 스펙(구조)에 인터페이스를 활용 
// number를 반환하는 인터페이스
interface SumFunction {
	(a: number, b: number): number;
}

var sum: SumFunction;
sum = function (a: number, b: number): number {
	return a + b
}

// 인덱싱
// 인덱스 값까지 타입 지정
interface StringArray {
	[index: number]: string;
}
var arr: StringArray = ['a', 'b', 'c'];
// arr[0] = 10; // 들어가야 할 값이 string 이여야 하므로 error


// 딕셔너리 패턴
interface StringRegexDictionary {
	[key: string]: RegExp
	// 정규표현식을 리턴
}

var obj: StringRegexDictionary = {
	sth: /abc/,
	cssFile: /\.css$/,
	jsFile: /\.js$./,
}

obj['cssFile'] = 'a'; // 일반 문자열을 넣을 경우 에러가 발생

Object.keys(obj).forEach(function (value) {
	
})

// 인터페이스 확장
interface Person {
	name: string;
	age: number;
}

interface Developer extends Person {
	language: string;
}

var captain: Developer = {
	name: 'capt',
	age: 100,
	language: 'ts',
}