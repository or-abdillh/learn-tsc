//Main code here

interface UserInterface {
	getFullname():string
}

class User implements UserInterface {
	private firstName: string
	private lastName: string
	private isHuman: boolean = true
	static readonly maxAge: number = 50
	
	constructor(firstName: string, lastName: string) {
		[ this.firstName, this.lastName ] = [ firstName, lastName ]
	}

	getFullname(): string {
		return this.firstName + ' ' + this.lastName
	}
}

class Admin extends User {
	protected editor: string

	setEdiitor(editor: string): void {
		this.editor = editor
	}

	getIsHuman() {
		return this.isHuman
	}
}

const user = new User('John', 'Doe')
console.log(user.isHuman)

const admin = new Admin('Jane', 'Doe')

//Generic
const createID = <T extends object>(obj: T) => {
	let id = Math.random().toString(16)
	return {
		...obj,
		id
	}
}

//Interface with generic
interface PersonInterface<T, V> {
	name: string,
	age?: number,
	isMarried: T,
	data: V
}

const person: PersonInterface<boolean, string[]> = {
	name: 'hans',
	age: 22,
	isMarried: false,
	data: ['foo', 'bar', 'bas']
}

const result = createID(person)
