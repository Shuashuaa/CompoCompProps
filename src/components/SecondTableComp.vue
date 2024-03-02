<template>
    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <v-card
        max-width="400"
        prepend-icon="mdi-update"
        text="Your application will relaunch automatically after the update is complete."
        title="Update in progress"
      >
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
    setup() {
        const dialog = ref(false);

        const openDialog = () => {
            dialog.value = true;
        };

        return {
            dialog,
            openDialog
        };
    }
};
</script>