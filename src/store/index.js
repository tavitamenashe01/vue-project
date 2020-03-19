import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import posts from './posts'
import users from './users'
export default new Vuex.Store({
  state: {
    cards: [
      {
        title: "Керемет Банк",
        desc: "POS-терминалы ОАО «Керемет Банк», Информация о платежах…",
        img: require("../assets/img/icons/bank.svg"),
        id: "bank",
        active: true
      },
      {
        title: "Транспорт и вождение",
        desc: "Car Check, Информация о налогах на технические средства…",
        img: require("../assets/img/icons/auto.svg"),
        id: "auto",
        active: false
      },
      {
        title: "Паспорта и удостоверения",
        desc:
          "Наличие документа в бюро находок, Проверка готовности паспорт…",
        img: require("../assets/img/icons/certification.svg"),
        id: "certification",
        active: false
      },
      {
        title: "Работа, пенсия, налоги",
        desc: "Справка по безработице, Проверка налоговой задолженности…",
        img: require("../assets/img/icons/taxes.svg"),
        id: "taxes",
        active: false
      },
      {
        title: "Медицина и страхование",
        desc: "Загрузка данных по полисам ОМС, Проверка задолженности по…",
        img: require("../assets/img/icons/medicine.svg"),
        id: "medicine",
        active: false
      },
      {
        title: "Недвижимое имущество",
        desc: "История прав на недвижимое имущество, Выписка из гос…",
        img: require("../assets/img/icons/property.svg"),
        id: "property",
        active: false
      },
      {
        title: "Образование",
        desc: "Проверка диплома о высшем образовании, Проверка аттест…",
        img: require("../assets/img/icons/education.svg"),
        id: "education",
        active: false
      },
      {
        title: "Семья и дети",
        desc: "Сведения о семейном статусе, Проверка статуса заявления…",
        img: require("../assets/img/icons/family.svg"),
        id: "family",
        active: false
      }
    ],
    visited: [],
    posts: [],
    lists: [],
  },
  mutations: {
    saveLink(state, id) {
      // WE CAN DO THIS:
      // const newArr = state.cards
      // newArr[state.cards.findIndex(el => el.id === id)].active = true
      // state.cards = newArr

      // OR WE CAN DO LIKE THIS:
      // Vue.set(state.cards.find(el => el.id === id), "active",  true)

      // OR:
      state.cards[state.cards.findIndex(el => el.id === id)].active = true
    },
    SET_POSTS(state, posts) {
      state.posts = posts
    },
    saveTask(state, task) {
      task.id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)
      state.lists.push(task)
    },
    deleteTask(state, id) {
      state.lists = state.lists.filter(el => el.id !== id);
    },
    saveNewTask(state, obj) {
      let index = state.lists.findIndex(el => el.id === obj.id);
      state.lists[index].title = obj.title
      state.lists[index].desc = obj.desc
    }
  },
  actions: {
    setVisited(ctx, id) {
      ctx.commit('saveLink', id)
    },
    fetchList(ctx, count = 2) {
      const url = "https://jsonplaceholder.typicode.com/posts?_limit=" + count;
      console.log(url);
      fetch(url)
        .then(response => response.json())
        .then(json => ctx.commit('SET_POSTS', json))
        .catch(error => console.log(error));
    },
    addTask(ctx, task) {
      ctx.commit('saveTask', task)
    },
    removeTask(ctx, id) {
      ctx.commit('deleteTask', id)
    },
    onTyping(ctx, obj) {
      ctx.commit('saveNewTask', obj)
    }
  },
  getters: {
    specificService: state => id => {
      return state.cards.find((el) => el.id === id)
    }
    // state.cards = [
    //   ...state.cards,
    //   {...state.cards.find(el => el.id === id), active: true}
  },
  modules: {
    posts,
    users
  }
})

