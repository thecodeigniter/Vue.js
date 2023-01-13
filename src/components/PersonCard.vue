<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <div class="PersonCard" @click="$emit('personClick', person)">
    <b>Name:</b>
    {{ person.name }} <br />
    <b>Age:</b> {{ person.age }} <br />
    <b>Eye Color:</b> {{ person.eyeColor }} <br />
    <b>Gender:</b> {{ person.gender }} <br />
  </div>
</template>

<script>
export default {
  name: "PersonCard",
  props: {
    person: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.PersonCard {
  margin: 20px;
}
</style>
