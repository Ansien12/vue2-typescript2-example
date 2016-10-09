Standalone Vue 2 + TypeScript 2 example
------

#### Typescript in .vue files
```html
<template>
    <div>
        <h1 @click="sayHello">
            Hello {{ msg }}
        </h1>
        <input v-model="msg">
    </div>
</template>

<script>
    import { Vue, Component } from 'av-ts'

    @Component
    export default class Hello extends Vue {
        msg = 'Andries'

        sayHello() {
            alert('Hello ' + this.msg);
        }
    }
</script>
```

#### Clean imports
```
import Hello from "./components/hello.vue";
```

#### Hot reloading
```
app.js:91 [WDS] App updated. Recompiling...
```

#### Pretty errors
```
...\src\components\hello.vue.ts
(18,31): error TS2339: Property 'name' does not exist on type 'Hello'.
```

## Usage
    npm install
    npm run watch

## Credits
[HerringtonDarkholme](https://github.com/HerringtonDarkholme/vue-ts-example/tree/2609c7c754379c86788bb7bf515eb001989c0b6a) and [locoslab](https://github.com/locoslab/vue-typescript-component-example).

## License
[The Unlicense](http://unlicense.org)
