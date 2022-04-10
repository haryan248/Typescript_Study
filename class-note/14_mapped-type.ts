type Heroes = 'Hulk' | 'Capt' | 'Thor'
// 새로운 타입으로 정의하는 것
type HeroAges = { [K in Heroes]: number }

const ages: HeroAges = {
	Hulk: 33,
	Capt: 100,
	Thor: 1000,
}
// for in 반복문 코드