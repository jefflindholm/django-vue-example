<template>
  <div id="app">
    <input type="text" v-model="formData.title" placeholder="Enter a title"/>
    <textarea type="text" v-model="formData.Content" placeholder="Enter content"></textarea>
    <br/>
    <button type="submit">Submit</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      formData: {
        title: '',
        content: '',
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 500px;
  margin: 0 auto;
  text-align: left;
}

h1, h2 {
  font-weight: normal;
}

input, textarea {
  width: 100%;
  display: block;
  padding: 6px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
textarea {
  margin-top: 10px;
}

button {
  background: #000;
  color: #fff;
  border-radius: 4px;
  padding: 6px 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
