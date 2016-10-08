<template>
    <div>
        <h1 @click="sayBye">
            Bye {{ name }}
        </h1>
        <input v-model="name">
    </div>
</template>

<script>
    import { Vue, Component } from 'av-ts'

    @Component
    export default class Bye extends Vue {
        name = 'andries'

        sayBye() {
            alert('Bye ' + this.name);
        }
    }
</script>
