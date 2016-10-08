import './app';

export default class Game
{
	public static init(): void 
	{
		Game.sayHello();
	}

	private static sayHello(): void 
	{
		console.log('Hi there!');
	}
}

Game.init();