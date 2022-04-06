// interface Person {
// 	name: string;
// 	age: number;
// }

type Person = {
	name: string;
	age: number;
}

var seho: Person = {
	name: '세호',
	age: 30,
}

// 원하는 이름으로 별칭 생성 가능
type Mystring = string;
var str: Mystring = 'hello';

type Todo = { id: string; title: string; done: boolean }
function getTodo(todo: Todo) {
	
}

// 타입 별칭의 특징
// 타입 별칭은 확장이 불가능하여 interface로 선언하는 것이 좋습니다.