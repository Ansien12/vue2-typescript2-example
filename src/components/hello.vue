<template>
    <div>
        <h1 @click="sayHello">
            Hello {{ naam }}
        </h1>
        <input v-model="naam">
    </div>
</template>

<script>
    import { Vue, Component } from 'av-ts'

    @Component
    export default class Hello extends Vue {
        naam = 'andries'

        sayHello() {
            alert('Hello ' + this.naam);
        }

        get fNaam(): string {
            return this.naam;
        }

        set fNaam(naam: string) {
            this.naam = naam;
        }
    }
</script>
