<template>
    <!-- <div > -->
        <v-btn @click="openSecondTable">Open Second Table Dialog</v-btn>
        <SecondTableComp ref="secondTable"></SecondTableComp>
    <!-- </div> -->
</template>

<script>
import { ref } from 'vue';
import SecondTableComp from './SecondTableComp.vue';

export default {
    components: {
        SecondTableComp
    },
    setup() {
        const secondTable = ref(null);

        const openSecondTable = () => {
            secondTable.value.openDialog();
        };

        return {
            openSecondTable,
            secondTable
        };
    }
};
</script>