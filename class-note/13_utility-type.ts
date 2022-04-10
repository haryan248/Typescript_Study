interface Product {
	id: number;
	name: string;
	price: number;
	brand: string;
	stock: number;
}

// 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product[]> {
 	// ...
}

interface ProductDetail {
	id: number;
	name: string;
	price: number;
}

// 이 가능하지만 타입이 너무 많아짐
// function displayProductDetail(shoppingItem: ProductDetail) {

// }

// 특정 상품의 상세 정보를 나타내기 위한 함수
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>
function displayProductDetail(shoppingItem: Pick<Product, 'id' | 'name' | 'price'>) {
	
}

// 추가 자료
// https://www.typescriptlang.org/docs/handbook/utility-types.html


// 3. 특정 상품 정보를 업데이트(갱신) 하는 함수
// 필요한 타입만 변형

// interface UpdateProduct {
// 	id?: number;
// 	name?: string;
// 	price?: number;
// 	brand?: string;
// 	stock?: number;
// }
// function updateProductItem(productItem: UpdateProduct) {

// }

type UpdateProduct = Partial<Product>
function updateProductItem(productItem: Partial<Product>) {

}

// 4. 유틸리티 타입 구현하기 - Partial
// 직접 구현해보기
interface UserProfile {
	username: string;
	email: string;
	profilePhotoUrl: string;
}

// interface UserProfileUpdate {
// 	username?: string;
// 	email?: string;
// 	profilePhotoUrl?: string;
// }

// 1번째 방법
type UserProfileUpdate = {
	username?: UserProfile['username'];
	email?: UserProfile['email'];
	profilePhotoUrl?: UserProfile['profilePhotoUrl'];
}

// 2번째 방법
// mapped type
type UserProfileUpdate = {
	[p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p]
}

type UserProfileKeys = keyof UserProfile

// 2번째 방법 축약
type UserProfileUpdate = {
	[p in keyof UserProfile]?: UserProfile[p]
}

// 4번째 
type Subset<T> = {
	[p in keyof T]?: T[p]
}