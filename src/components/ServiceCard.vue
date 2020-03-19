<template>
  <article class="card">
    <a href="#">
      <div class="card-icon-title">
        <picture class="thumbnail">
          <img class="card-img" :src="img" :alt="img" />
        </picture>
        <h2 class="card-title">{{title}}</h2>
      </div>
      <div class="card-content">
        <p class="card-content-text">{{desc}}</p>
        <a href="#" class="card-link-more">Еще 1</a>
      </div>
    </a>
  </article>
</template>


<script>
// require("@/assets/css/main.css");

export default {
  name: "ServiceCard",  
  props: {
    title: {
      type: String
    },
    desc: {
      type: String
    },
    img: String
  }
};
</script>


