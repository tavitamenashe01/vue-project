<template>
  <router-link :to="link" :card="card" :setActive="setActive">
    <img :src="card.img" />
    <h2>{{card.title}}</h2>
    <p>{{card.desc}}</p>
  </router-link>
</template>

<script>
export default {
  props: {
    card: {
      type: Object
    },
    setActive: {
      type: Function
    }
  },
  computed: {
    link() {
      return {
        name: "cardDetails",
        params: {
          // card: this.card,
          id: this.card.id,
          setActive: this.setActive
        }
      };
    }
  }
};
</script>



