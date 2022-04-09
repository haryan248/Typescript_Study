interface PhoneNumberDictionary {
	[phone: string]: {
	  num: number;
	};
}
  
  // 전화번호부 규격
interface Contact {
	name: string;
	address: string;
	phones: PhoneNumberDictionary;
  }
  
enum PhoneType {
	Home = 'home',
	Office = 'office',
	Studio = 'studio'
}
  
export { Contact, PhoneType };