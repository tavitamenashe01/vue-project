<template>
  <div class="container">
    <nav class="navbar">
      <!-- <div class="container"> -->
      <!-- <span class="navbar-toggle" id="js-navbar-toggle">
          <i class="fa fa-bars" style="color: #009CD8;"></i>
      </span>-->
      <a href="#menu" class="box-shadow-menu navbar-toggle" id="js-navbar-toggle"></a>
      <a href="#" class="logo">
        <img src="../assets/img/logo/logo.svg" alt="logo" />
      </a>
      <ul class="main-nav" id="js-menu">
        <li>
          <a class="nav-links" href="#">Карты</a>
        </li>
        <li>
          <a class="nav-links" href="#">Вклады</a>
        </li>
        <li>
          <a class="nav-links" href="#">Кредиты</a>
        </li>
        <li>
          <a class="nav-links" href="#">Ипотека</a>
        </li>
        <li>
          <a class="nav-links" href="#">Денежные переводы</a>
        </li>
        <li>
          <a class="nav-links" href="#">
            <b style="margin-left: 20px">Портал</b>
          </a>
        </li>
        <li>
          <button class="header-btn">Интернет Банк</button>
        </li>
      </ul>
      <!-- </div> -->
    </nav>

    <main class="main">
      <div class="main-text">
        <h1 class="main-title">Государственные услуги</h1>
        <a class="main-title-link" href="#">Все услуги →</a>
      </div>
      <div class="centered">
        <section class="cards">
          <Card
            v-for="card in cards"
            :class="{'isActive' : card.active}"
            :card="card"
            :key="card.id"
            class="card"
          />
          <!-- :setActive="setActive" -->
        </section>
      </div>
    </main>
  </div>
</template>

<script>
// import Vue from "vue";
// import serviceCard from "../components/ServiceCard";
// import cardDetails from "../components/cardDetails";
import Card from "../components/Card";
import {mapState} from 'vuex'
export default {
  name: "Services",
  data() {
    return {
      visitedServices: localStorage.getItem("visited-service")
        ? JSON.parse(localStorage.getItem("visited-service"))
        : []
    };
  },
  computed: {
    ...mapState(['cards'])
  },
  // computed: {
  //   newArr() {
  //     return this.cards.map(el => (el.active ? el : null));
  //   }
  // },
  // mounted() {
  //   console.log(this.newArr);
  // },
  // methods: {
  //   setActive(id) {
  //     let index = this.cards.findIndex(card => card.id === id);
  //     Vue.set(this.cards[index], "active", true);
  //     console.log(this.cards);
  //   }
  // },
  components: {
    Card,
  },
  mounted() {
    console.log(this.cards);
  }
};
</script>

<style>
</style>
