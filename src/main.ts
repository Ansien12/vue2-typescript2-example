import UI from "./UI";

export default class Game 
{
	public static init(): void 
	{
		Game.sayHello();
	}

	private static sayHello(): void 
	{
		console.log('Hi there friend!!!');

		const helloRef = UI.getChild('hello');
		helloRef.naam = "World";
	}
}

UI.init();
Game.init();