<template>
  <div class="container-lala">
    <div class="container-ex">
      <h3>{{message}}</h3>
      <v-form ref="form" @submit.prevent="validateForm">
        <v-text-field @input="typeChecking" v-model="name" label="Name" required></v-text-field>

        <v-text-field @input="typeChecking" v-model="email" label="E-mail" required></v-text-field>

        <v-btn :disabled="!active" type="submit" color="success" class="mr-4">Add item</v-btn>
      </v-form>
    </div>

    <div class="task-list">
      <todoItem v-for="list of lists" :list="list" :key="list.id"></todoItem>
    </div>
  </div>
</template>


<script>
import { mapState, mapActions } from "vuex";
import todoItem from "../components/todoItem";

export default {
  data: () => ({
    name: "",
    email: "",
    active: false,
    message: "Welcome to Todo App"
  }),
  computed: {
    ...mapState(["lists"])
  },

  components: {
    todoItem
  },
  methods: {
    ...mapActions(["addTask"]),
    typeChecking() {
      if (this.name && this.email) {
        this.active = true;
      }
    },

    validateForm() {
      if (this.active) {
        this.addTaskItem();
      }
    },
    addTaskItem() {
      console.log(this.lists);
      const task = {
        title: this.name,
        desc: this.email
      };
      this.addTask(task);
      this.name = "";
      this.email = "";
      this.active = false;
    }
  }
};
</script>
<style lang="scss">
.container-ex {
  margin: 20px 40px;
  padding: 40px 15px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
}
.task-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  &__item {
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: center;
  }
}
</style>