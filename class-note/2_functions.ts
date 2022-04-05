// 함수의 파라미터에 타입을 정의하는 방식
function sum1(a: number, b: number) {
    return a + b;
}

sum(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식

function add(): number {
    return 10;
}

// 함수의 타입을 정의하는 방식
function sum2(a: number, b: number): number {
    return a + b;
}

sum2(10, 20); // 30
sum2(10, 20, 30, 40); // 2개의 인자지만 4개의 인자가 들어온다는 에러 발생

// 함수의 옵셔널 파라미타
function log(a: string, b?: string) {}

// 필요에 따라 파라미터를 보내고 안보내고 선태적으로 가능
log("hellow world");
log("hello ts", "abc");
