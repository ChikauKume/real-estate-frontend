<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="400"
    >
      <v-card>
        <v-card-title class="text-xl">
          以下を削除してよろしいでしょうか？
        </v-card-title>
        <v-card-text class="text-center">{{confirmationText}}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            キャンセル
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            決　定
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>


<script>
  export default {
    props: ['confirmationText', 'dialog'],
  }
</script>
