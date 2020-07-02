<template>
  <div class="home">
    <div>{{ car }}</div>
    <div v-if="carList[0] && type == 0">开始</div>
    <ul v-show="type == 2">
      <li v-for="item in nameList.a" :key="item + 'a'">
        {{ item }}
      </li>
    </ul>
    <ul v-show="type == 3">
      <li v-for="item in nameList.b" :key="item + 'b'">
        {{ item }}
      </li>
    </ul>

    <ul v-show="type == 4">
      <li v-for="item in nameList.c" :key="item + 'c'">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Vue from "vue";
import { Button } from "vant";

Vue.use(Button);
export default {
  name: "Home",
  components: {
    // HelloWorld
  },
  data() {
    return {
      car: "",
      carList: [],
      index: 1,
      type: 0,
      nameList: {
        a: [100, 111, 222, 333, 444, 555, 666, 777, 888, 999],
        b: ["123", "234", "456", "445", "554"],
        c: ["333"]
      }
    };
  },
  created() {
    document.onkeydown = () => {
      //按下回车提交
      let key = window.event.keyCode;
      //事件中keycode=13为回车事件
      if (key == 13) {
        this.play();
        this.type++;
        if (this.type > 4) {
          this.type = 4;
        }
        console.log(this.type, "type");
      }
    };
  },
  mounted() {
    setTimeout(() => {
      this.init();
      this.nameList = {
        a: [100, 111, 222, 333, 444, 555, 666, 777, 888, 999],
        b: ["123", "234", "456", "445", "554"],
        c: ["333"]
      };
      console.log("nameList", this.nameList.a);
    }, 3000);
  },
  methods: {
    init() {
      let tmp = 11111111111;
      for (let i = 0; i < 5000; i++) {
        this.carList.push(tmp);
        tmp++;
      }
      this.car = this.carList[0];
    },
    play() {
      if (this.index <= 4999) {
        setTimeout(() => {
          this.car = this.carList[this.index];
          this.index++;
          this.play();
        }, 10);
      } else {
        this.index = 0;
        this.play();
      }
    }
  }
};
</script>
