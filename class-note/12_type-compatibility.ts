// 인터페이스
interface Developer {
	name: string;
	skill: string;
}

interface Person {
	name: string;
}

var developer: Developer;
var person: Person;

// 오른쪽에 있는 타입이 더 많아야 호환이 가능
developer = person;
person = developer;

class PersonC {
	name: string;
}

// 함수가 호환되지 않음
developer = new PersonC();


// sum의 함수 구조가 add 함수구조보다 크다.
var add = function (a: number) {
	// ...
}

var sum = function (a: number, b: number) {
	// ... 
}

add = sum; // (x) 호환이 불가능
sum = add; // (o) 호환이 가능

// 제네릭
interface Empty<T> {
	// ...
}
var empty1: Empty<string>;
var empty2: Empty<string>;

empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T>{
	data: T;
}

var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;

// data가 string, number 서로 다르기 때문에 호환이 되지 않는다.
notempty1 = notempty2;
notempty2 = notempty1;