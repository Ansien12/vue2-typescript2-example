import Hello from "./components/hello.vue";

import { Vue } from 'av-ts'

export default class UI
{
    private static _vueRoot: Vue;

	public static init(): void 
	{
		UI._vueRoot = new Vue({
            el: '#app',
            components: { Hello }
        });
	}

	public static getChild(ref: string): any 
	{
		return UI._vueRoot.$refs[ref];
	}
}