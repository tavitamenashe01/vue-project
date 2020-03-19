<template>
  <div>
    <img :src="card.img" />
    <h1>{{card.title}}</h1>
    <p>{{card.desc}}</p>
    <Post />
    <button @click="backtoPage()">Back</button>
    <button @click="modalBtn()">Modal</button>
    <Modal :show="show" :onClose="onClose" :onAccept="onAccept">
      <header>
        <picture>
          <img src="../assets/img/logo/logo.svg" />
        </picture>
      </header>
      <h2>Добро пожаловать на портал электронных услуг ОАО "Керемет Банк"</h2>
      <p>Что бы продолжить, пожалуйста пройдите регистрацию</p>
      <input type="text" placeholder="ИНН пользователя" />
      <button>Далее</button>
    </Modal>
  </div>
</template>

<script>
import Modal from "./Modal";
import Post from "./Post";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "cardDetails",
  components: {
    Modal,
    Post
  },
  data() {
    return {
      visitedServices: localStorage.getItem("visited-service")
        ? JSON.parse(localStorage.getItem("visited-service"))
        : [],
      show: false,
      card: {}
    };
  },
  methods: {
    ...mapGetters(["specificService"]),
    ...mapActions(["setVisited"]),
    getCard(id) {
      this.card = this.specificService()(id);
    },
    backtoPage() {
      this.$router.push("/services");
      console.log(this);
    },
    modalBtn() {
      this.show = !this.show;
    },
    onClose() {
      this.show = false;
    },
    onAccept() {
      alert("Bye!");
      this.show = false;
    }
  },

  mounted() {
    // console.log(this.$route.params);
    // if (this.visitedServices) {
    //   console.log(typeof this.visitedServices);
    //   if (!this.visitedServices.includes(this.card.id)) {
    //     this.visitedServices.push(this.card.id);
    //     localStorage.setItem(
    //       "visited-service",
    //       JSON.stringify(this.visitedServices)
    //     );
    //   }
    // } else {
    //   this.visitedServices.push(this.card.id);
    //   localStorage.setItem("visited-service", [this.card.id]);
    // };
    this.getCard(this.$route.params.id);
    this.setVisited(this.$route.params.id);
  }
};
</script>

