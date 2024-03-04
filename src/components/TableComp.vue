<template>
    <div style="display: flex; justify-content: center;">
        <v-btn @click="openSecondTable">Open Second Table Dialog</v-btn>
        <SecondTableComp :sampleData="tableData" ref="secondTable"></SecondTableComp>
    </div>
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

        const tableData = ref([
            { name: 'juswa1', desc: '1' },
            { name: 'juswa2', desc: '2' },
            { name: 'juswa3', desc: '3' },
        ]);

        const openSecondTable = () => {
            secondTable.value.dialog = true; //direct
            secondTable.value.dataFromTableComp = tableData; //direct
            // secondTable.value.openDialog();
        };

        return {
            openSecondTable,
            secondTable,
            tableData
        };
    }
};
</script>