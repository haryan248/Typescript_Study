// 타입 단언(type-assertion)

// a를 중간에 수정해도 any 타입으로 추론
// DOM API 조작시 사용되는 경우가 많음

var a;
a = 'a';
var b = a as string;

// DOM API 조작
// as 를 통해 타입을 단언한다.
var div = document.querySelector('div') as HTMLDivElement; 
div.innerText;