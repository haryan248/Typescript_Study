// 타입 추론 기본 1
var a = 'abc';
// 마우스를 올려보면 VSCODE 내에서 임의로 타입을 추론함

// 기본적으로 변수를 추론합니다.
function getB(b = 10) {
	var c = 'hi';
	return b + c;
}

// 타입 추론 기본 2
// 제네릭도 마찬가지로 타입을 추론합니다.
interface Dropdown<T> {
	value: T;
	title: string;
}

var shoppingItem: Dropdown<string> = {
	value: "abc",
	title: "hello",
}

// 타입 추론 기본 3
interface DetailedDropdown<T> extends Dropdown<T> {
	tag: T;
	description: string;
}

// 상속받았기 떄문에 Dropdown의 타입또 string으로 추론합니다.
var detailedItem: DetailedDropdown<string> = {
	title: 'abc',
	description: "ab",
	value: 'a',
	tag: 'a',
}

// 가장 적절한 타입(Best Common Type)
// union 타입으로 추론
var arr = [1, 2, true, true, 'a'];
