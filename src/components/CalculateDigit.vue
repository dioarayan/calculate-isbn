<template>
  <input type="text" v-model="inputData" placeholder="Enter ISBN here" />
  <button @click="checkDigits">Calculate</button>
  <h3>
    Result:
    <span id="result">{{ result }}</span>
  </h3>
</template>

<script>
export default {
  data() {
    return {
      inputData: "",
      result: "",
    };
  },
  methods: {
    checkDigits() {
      const digitArray = this.inputData.toString().split("");
      const realDigits = digitArray.map(Number);
      const odd = [];
      const even = [];
      for (let i = 0; i < realDigits.length; i++) {
        if (i % 2 !== 0) {
          even.push(realDigits[i]);
        } else {
          odd.push(realDigits[i]);
        }
      }
      const productEvens = even.map((x) => x * 3);
      const productOdds = odd.map((x) => x * 1);
      const sumEvens = productEvens.reduce((a, b) => a + b, 0);
      const sumOdds = productOdds.reduce((a, b) => a + b, 0);
      const totalSum = sumEvens + sumOdds;
      const mod = totalSum % 10;
      const final = 10 - mod;
      this.result = this.inputData + final;
    },
  },
};
</script>

<style scoped>
input {
  font-size: 1.5em;
  margin: 10px 0px;
  border: 2px solid rgb(108, 97, 211);
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
}

button {
  width: 100%;
  height: 2em;
  background-color: rgb(108, 97, 211);
  color: white;
  cursor: pointer;
  border-radius: 10px;
  border: 2px solid transparent;
  font-size: 1.5em;
  transition: background-color 0.25s;
}

button:hover {
  color: black;
  background-color: white;
  border-color: rgb(108, 97, 211);
}

#result {
  color: red;
}
</style>
