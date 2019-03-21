<template lang="pug">
  #app
    #nav
      router-link(to="/") Home
      router-link(to="/about") About
    router-view
</template>

<style lang="sass">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50

#nav
  padding: 30px

  a
    margin-right: .5em
    font-weight: bold
    color: #2c3e50

    &:last-child
      margin-right: 0

    &.router-link-exact-active
      color: #42b983
</style>
