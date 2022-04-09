interface Developer {
	name: string;
	skill: string;
}

interface Person {
	name: string;
	age: number;
}

function introduce(): Developer | Person {
	return { name: 'Tony', age: 33, skill: 'Iron Making' }
}

var tony = introduce();
// 공통된 속성만 접근할 수 있기 때문에 접근이 불가능
console.log(tony.skill);

// 타입 단언을 사용해서 뽑아올 수 있음
if ((tony as Developer).skill) {
	var skill = (tony as Developer).skill;
	console.log(skill);
} else if ((tony as Person).age) {
	var age = (tony as Person).age;
	console.log(age)
}

// 타입 가드 정의
function isDeveloper(target: Developer | Person): target is Developer {
	return (target as Developer).skill !== undefined;
}

if (isDeveloper(tony)) {
	console.log(tony.skill);
} else {
	console.log(tony.age);
}