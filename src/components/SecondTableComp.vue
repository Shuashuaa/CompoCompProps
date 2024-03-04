<template>
    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <v-card
        max-width="400"
        prepend-icon="mdi-update"
        text="Data Below are from TableComp"
        title="Dialog from SecondTableComp"
      >
	  	<v-table>
			<thead>
				<tr>
					<th class="text-left">
					Name
					</th>
					<th class="text-left">
					Calories
					</th>
				</tr>
				</thead>
				<tbody>
				<tr
					v-for="item in dataFromTableComp"
					:key="item.name"
				>
					<td>{{ item.name }}</td>
					<td>{{ item.desc }}</td>
				</tr>
			</tbody>
		</v-table>
        <template v-slot:actions>
          <v-btn
            class="ms-auto"
            text="Ok"
            @click="dialog = false"
          ></v-btn>
        </template>
      </v-card>
    </v-dialog>
</template>

<script>
import { ref } from 'vue';

export default {
    //props: {
        // sampleData: {
        //     type: Array,
        //     default: () => []
        // },
    //},
    setup(props) {
        const dialog = ref(false); //direct called to TableComp
		const dataFromTableComp = ref([]); //direct called to TableComp
        // const openDialog = () => {
		// 	console.log(props.sampleData)
		// 	dataFromTableComp.value = props.sampleData;
        //     dialog.value = true;
        // };

        return {
			dialog,
			// openDialog,
			dataFromTableComp
        };
    }
};
</script>