<template>
  <div class="posts">
    <select @change="fetchList(selected)" v-model="selected">
      <option disabled value>Choose only one:</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <span>Selected: {{ selected }}</span>
    <div v-for="post in posts" :key="post.id">
      <section class="post-item" @click="modalBtn(post)">
        <h1>Post UserId: {{post.userId}}</h1>
        <h1>Post Id: {{post.id}}</h1>
        <p>Post title: {{post.title}}</p>
        <p>Post body: {{post.body}}</p>
      </section>
    </div>
    <Modal :show="show" :onClose="onClose" :onAccept="onAccept">
      <h1>Post UserId: {{postDetails && postDetails.userId}}</h1>
      <h1>Post Id: {{postDetails && postDetails.id}}</h1>
      <p>Post title: {{postDetails && postDetails.title}}</p>
      <p>Post body: {{postDetails && postDetails.body}}</p>
    </Modal>
    <v-btn depressed small>Normal</v-btn>
  </div>
</template>

<script>
import Modal from "./Modal";
import { mapState, mapActions } from "vuex";

export default {
  name: "Post",
  components: {
    Modal
  },
  data() {
    return {
      selected: "",
      // posts: [],
      show: false,
      postDetails: null
    };
  },
  computed: mapState(["posts"]),
  mounted() {
    this.fetchList(10);
  },
  methods: {
    // fetchList(count = 2) {
    //   const url = "https://jsonplaceholder.typicode.com/posts?_limit=" + count;
    //   console.log(url);
    //   fetch(url)
    //     .then(response => response.json())
    //     .then(json => (this.posts = json))
    //     .catch(error => console.log(error));
    // },
    ...mapActions(["fetchList"]),
    log(msg) {
      console.log(msg);
    },
    modalBtn(post) {
      this.postDetails = post;
      this.show = !this.show;
    },
    onClose() {
      this.show = false;
    },
    onAccept() {
      alert("Bye!");
      this.show = false;
    }
  }
};
</script>

<style scoped>
.posts {
  padding: 20px;
}
.post-item {
  margin: 20px;
  background: #eee;
}
</style>