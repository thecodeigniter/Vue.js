<template>
  <h2>Exercise 4</h2>
  <h4>Statement</h4>
  <div>
    <p>
      Please update <span class="code">App.vue</span> in order to display a list
      of people aged from 25 to 35 years old, from the youngest to the oldest.
    </p>
    <p>
      Use Vuex store <span class="code">store/store.js</span> to retrieve the
      list of people, use the component
      <span class="code">components/List.vue</span> to display people's age and
      name, make use of the props and slot, use the functions in
      <span class="code">helpers/helpers.js</span> to filter and sort the data.
    </p>
  </div>
  <h4>Solution</h4>
  <div class="solution">
    <List :data="peopleList" :filtering="filterByAge" :sorting="sortByAge" />
    <!-- TODO: implement template here -->
  </div>
</template>

<script>
// TODO: implement logic here
import helpers from "./helpers/helpers";
import List from "./components/List";

export default {
  name: "App",
  components: { List },
  data() {
    return {
      peopleList: [],
    };
  },
  watch: {
    "$store.getters.getPeople": function() {
      this.peopleList = this.$store.getters.getPeople;
    },
  },
  created() {
    fetch("https://run.mocky.io/v3/8aabb2ec-21c0-42c0-815c-0d748b775734")
      .then((response) => response.json())
      .then((data) => this.$store.commit("savePeople", data));
  },

  methods: {
    ...helpers,
  },
};
</script>

<style lang="scss">
.solution {
  border: 1px solid #dedede;
  padding: 0 0.5em;
  min-height: 40px;

  .code {
    color: #434343;
    background-color: #f9f9f9;
    padding: 0 5px;
  }
}
</style>
