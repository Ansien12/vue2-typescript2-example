<template>
    <div>
        <h1 @click="sayHello">
            Hello {{ name }}
        </h1>
        <input v-model="name">
    </div>
</template>

<script>
    import { Vue, Component } from 'av-ts'

    @Component
    export default class Hello extends Vue {
        name = 'andries'

        sayHello() {
            alert('Hello ' + this.name);
        }
    }
</script>
