// 숫자형 이넘
enum Shoes {
	Nike,
	Adidas
}

var myShoes = Shoes.Nike;
console.log(myShoes); // 0 , 숫자로 취급함

// 문자형 이넘
enum Shoes2 {
	Nike = "나이키",
	Adidas = "아디다스"
}

var myShoes = Shoes.Nike;
console.log(myShoes); // 나이키

// 예제
enum Answer {
	Yes = 'Y',
	No = 'N',
}

function askQuestion(answer: Answer) {
	if (answer === Answer.Yes) {
		console.log("정답입니다.");
	}
	if (answer === Answer.No) {
		console.log('오답입니다.');
	}
}

// 이넘에서 제공하는 데이터만 파라미터로 보낼 수 있다.
askQuestion(Answer.Yes);
// askQuestion('예스');
// askQuestion('y');
// askQuestion('yes');
