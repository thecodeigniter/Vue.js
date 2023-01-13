<template>
  <ul>
    <li v-for="item in sortedData" :key="item._id">
      <slot v-bind:item="item">
        <div>
          Name:{{ item.name }}<br />
          Age:{{ item.age }}<br />
          Gender:{{ item.gender }}<br />
          Eye Color:{{ item.eyecolor }}<br />
        </div>
        <hr />
      </slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: "List",
  props: {
    data: { type: Array, default: () => [] },
    sorting: { type: Function, default: () => 1 },
    filtering: { type: Function, default: () => true },
  },
  created() {
    this.sortedData = this.data;
  },

  watch: {
    data: function() {
      this.sortedData = this.data;
    },
  },

  computed: {
    filteredData() {
      return this.data.filter(this.filtering(25, 35));
    },
    sortedData() {
      return this.filteredData.slice().sort(this.sorting);
    },
  },
};
</script>

<style scoped lang="scss"></style>
