<template>
  <div class="task-list__item">
    <div>
      <v-card class="mx-auto" max-width="344" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">Monday</div>
            <v-list-item-title class="headline mb-1">{{list.title}}</v-list-item-title>
            <v-list-item-subtitle>{{list.desc}}</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
          <v-btn text @click="removeTask(list.id)">Delete</v-btn>
          <v-btn text @click="openModal">Edit</v-btn>

          <!-- <v-btn text>Button</v-btn> -->
        </v-card-actions>
      </v-card>
    </div>
    <Modal :show="show" :onClose="onClose" :onAccept="onAccept">
      <v-text-field v-model="nameEdit" label="Name" required></v-text-field>

      <v-text-field v-model="emailEdit" label="E-mail" required></v-text-field>
    </Modal>
  </div>
</template>


<script>
import Modal from "./Modal";
import { mapActions } from "vuex";

export default {
  props: ["list"],
  data() {
    return {
      show: false,
      nameEdit: this.list.title,
      emailEdit: this.list.desc
    };
  },
  methods: {
    onClose() {
      this.show = false;
    },
    openModal() {
      this.show = true;
      //   this.nameEdit = this.;
      //   this.emailEdit = this.email;
    },
    onAccept() {
      const newTask = {
        title: this.nameEdit,
        desc: this.emailEdit,
        id: this.list.id
      };
      this.onTyping(newTask);
      this.onClose();
    },
    ...mapActions(["onTyping", "removeTask"])
    // onType() {
    //     console.log(this.nameEdit)
    // }
  },
  components: {
    Modal
  }
};
</script>