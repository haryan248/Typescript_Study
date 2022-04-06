// 유니온(union) 타입
// string과 number 모두 허용

var seho: string | number | boolean;

function logMessage(value: string | number) {
	// 타입 가드 : 특정 타입으로 타입의 범위를 좁혀나가는(필터링 하는) 과정
	if (typeof value === "number") {
		value.toLocaleString();
		console.log(value);
	}
	if (typeof value === "string") {
		value.toString()
	}
	throw new TypeError('value must be string or number');
}

logMessage('hello');
logMessage(10);


interface Developer {
	name: string;
	skill: string;
}

interface Person {
	name: string;
	age: number;
}

function askSomeone(someone: Developer | Person) {
	// someone.skill, someone.age (x) 둘다 사용이 불가능
	// 공통된 속성만 사용이 가능
	someone.name;
};

// 인터섹션(intersection) 타입

var seho: string | number | boolean;
var capt: string & number & boolean;

function askSomeoneElse(someone: Developer & Person) {
	// 모두 사용이 가능
	someone.name;
	someone.age;
	someone.skill;
};

// 두 타입의 차이점

askSomeone({ name: "디벨로퍼", skill: '웹 개발' });
askSomeone({ name: "캡틴", age: 100 });

// 모든 타입을 넘겨야 함
// 하나라도 넘기지 않을 경우 error 발생
askSomeoneElse({ name: "디벨로퍼", skill: '웹 개발', age: 34 });