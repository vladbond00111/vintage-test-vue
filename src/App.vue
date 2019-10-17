<template>
  <div id="app">
    <Contacts/>
    <Map/>
    <Form/>
  </div>
</template>

<script>
import Contacts from './components/Contacts.vue'
import Map from './components/Map.vue'
import Form from './components/Form.vue'


export default {
  name: 'app',
  components: {
    Contacts,
    Map,
    Form
  },
  methods: {
      init() {
        alert('1111')
      }
  }
}
</script>

<style lang="scss">
$dark: #333333;
$green: #3db565;

#app {
  background-image: url(/images/pattern.png);
  font-family: "Suisse Intl", Helvetica, Arial, sans-serif;
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $dark;
  h1 {
    font-size: 50px;
    line-height: 48px;
    font-weight: 300;
  }
  h2 {
    font-size: 34px;
    line-height: 48px;
    font-weight: 300;
  }
  p {
    margin-bottom: 0;
  }
  .block-container{
    padding: 60px 60px 100px 60px;
    @media(max-width: 800px) {
      padding: 20px;
    }
    .green-color{
      color: $green;
      text-transform: uppercase;
      a {
        color: $green;
        text-transform: uppercase;
      }
    }
  }
}
</style>
