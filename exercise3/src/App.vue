<template>
  <h2>Exercise 3</h2>
  <h4>Statement</h4>
  <div class="statement">
    <p>
      You'll find a VueJS page running, missing CSS styles.
    </p>
    <p>
      Without changing any HTML or Javascript, and using predefined CSS
      variables, update the style of the page, so then it matches the designs
      and situations below:
    </p>
    <ul class="examples">
      <li>
        Background layout
        <img class="preview" src="./assets/backgroundLayout.png" />
      </li>
      <li>
        Dynamic
        <img class="preview" src="./assets/dynamic.gif" />
      </li>
      <li>
        Responsive
        <img class="preview" src="./assets/responsive.gif" />
      </li>
    </ul>
  </div>
  <h4>Solution</h4>
  <div class="solution">
    <div class="input-container">
      <span>Number of items to display: </span>
      <input type="number" v-model="dataSize" min="1" :max="people.length" />
    </div>
    <div class="container">
      <div
        class="person-item"
        :style="'background-color:' + person.bgColor"
        v-for="person in items"
        :key="person.id"
      >
        <div class="name">
          <span>
            {{ person.name }}
          </span>
        </div>
        <div class="age">
          <b>Age:</b> <span>{{ person.age }}</span>
        </div>
        <div class="eye-color">
          <b class="eye">Eyes:</b>
          <img
            class="eye-image"
            src="./assets/eye.png"
            :class="[person.eyeColor, 'eye-icon']"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import people from "./assets/people.json";

export default {
  name: "App",
  data() {
    return {
      dataSize: 10,
      people: people,
      colorList: ["#537995", "#93afc5", "#547c98", "#004c6d"],
      count: 0,
    };
  },
  computed: {
    items() {
      return this.people.slice(0, this.dataSize);
    },
  },
  watch: {
    dataSize: function() {
      for (let i = 0; i < this.people.length; i++) {
        this.addColor();
      }
    },
  },
  methods: {
    addColor() {
      return this.people.forEach((item) => {
        if (this.count == 0) {
          item.bgColor = "#537995";
          this.count++;
        } else if (this.count == 1) {
          item.bgColor = "#93afc5";
          this.count++;
        } else if (this.count == 2) {
          item.bgColor = "#547c98";
          this.count++;
        } else if (this.count == 3) {
          item.bgColor = "#004c6d";
          this.count++;
        } else {
          this.count == 0;
        }
      });
    },
  },
  created() {
    this.addColor();
  },
};
</script>

<style lang="scss">
.statement,
.solution {
  border: 1px solid #dedede;
  padding: 0 0.5em;

  .code {
    color: #434343;
    background-color: #f9f9f9;
    padding: 0 5px;
  }

  .examples {
    text-align: center;
    list-style: none;

    li {
      display: inline-block;

      .preview {
        display: block;
        margin: 5px;
        height: 170px;
        border: 1px solid black;
      }
    }
  }

  .input-container {
    text-align: center;
  }
}

// TODO: Add your CSS Styling here
.solution {
  display: inline-grid;
  border-radius: 2px;
  .container {
    .person-item {
      border-radius: 5px;
      height: auto;
      max-width: 132px;
      width: 132px;
      background: #537995;
      padding: 15px;
      color: white;
      font-size: 18px;
      float: left;
      margin: 12px;
      .name {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
    .eye-image {
      width: 30px;
      height: 30px;
      margin: -10px 0;
      padding: 0 8px;
    }
  }
}
</style>
