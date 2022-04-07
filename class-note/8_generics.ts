// function logText(text) {
// 	console.log(text);
// 	return text;
// }

// logText(10); // 숫자 10
// logText('하이'); // 문자열 하이
// logText(true); // 진위값 true

function logText<T>(text: T): T{
	console.log(text);
	return text;
}

// 호출하는 시점에 타입을 넘겨줄 수 있습니다.
// 받는것과 리턴하는 것 모두 문자열이다.
logText<string>('하이');

// 같은 기능의 함수를 타입 때문에 여러개 만들어야 함
// 유지보수 측면, 가독성 측면에서 좋지 않음
function logString(text: string) {
	console.log(text);
	// text.split('').reverse().join('');
	return text;
}

function logNumber(num: number) {
	console.log(num);
	return num;
}

// 문제점
// string, number에 해당하는 메소드만 자동완성 됌
function logValue(text: string | number) {
	console.log(text);
	return text;
}

const a = logValue('a');
a.split(''); // 분명히 문자열이지만 split메서드에 에러가 발생


// 제네릭을 통해 문제 해결
function logGeneric<T>(text: T): T {
	console.log(text);
	return text;
}

const abc = logText<string>('abc');
abc.split(''); // 문자열을 알아 split 메서드 사용이 가능
const login = logText<boolean>(true);


// 인터페이스에 제네릭을 선언하는 방법

interface Dropdown {
	value: string;
	selected: boolean;
}

const obj: Dropdown = { value: 'abc', selected: false }

interface DropdownGeneric<T> {
	value: T;
	selected: boolean;
}

const obj2: DropdownGeneric<string> = { value: 'abc', selected: false }

// 제네릭의 타입 제한
function logTextLength<T>(text: T[]): T[] {
	// 배열로 변형해 length에 오류를 없앤다.
	console.log(text.length);
	text.forEach(function (text) {
		console.log(text);
	})
	return text;
}

logTextLength<string>(['hi', 'abc']);

// 정의된 타입 이용하기
interface LengthType {
	length: number;
}

// extends를 통해 확장
function logTextLength2<T extends LengthType>(text: T): T {
	text.length;
	return text;
}

logTextLength2("a");
logTextLength2(10); // 숫자 10에는 length를 포함하고 있지 않기 때문에 오류
logTextLength2({ length: 10 });

// 제네릭 타입 제한 3 - keyof

// 받는 속성을 제한하기 
interface ShoppingItem {
	name: string;
	price: number;
	stock: number;
}

// keyof을 통해 제네릭 범위를 줄임
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
	return itemOption
}

getShoppingItemOption(10);
getShoppingItemOption<string>('a');
getShoppingItemOption('name'); // key 값만 들어갈 수 있다.
