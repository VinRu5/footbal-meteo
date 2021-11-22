<template>
    <div>
        <input type="text" v-model="inputText">
        <button @click="testInput()">go</button>
    </div>
</template>

<script>
export default {
    name: 'Input',
    data() {
        return {
            inputText: '',
            value: null,
        }
    },

    methods: {
        testInput() {
            let flag = true;
            const textArray = this.inputText.split('');
            if(!textArray.includes('a')){
                flag = false;
            }

            this.value = flag;

        }
    }

}
</script>