<template lang="pug">
  header.header
    font-awesome-icon.header--icon(icon="bars", @click="toggleNav()")

    .header--title Fußball Tippspiel

    .nav(v-if="isNavVisible")
      .nav--overlay(@click="toggleNav()")
      nav.nav--body
        font-awesome-icon.nav--icon(icon="times", @click="toggleNav()")
        router-link.nav--link(to="/", @click.native="toggleNav()") Home
        router-link.nav--link(to="/about", @click.native="toggleNav()") About
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  private isNavVisible: boolean = false;

  private toggleNav() {
    this.isNavVisible = !this.isNavVisible;
  }
}
</script>

<style scoped lang="sass">
.header
  display: flex
  align-items: center
  padding: 1em
  background-color: var(--color-background-accent)

  &--icon
    margin-right: .8em
    font-size: 1.2em
    color: var(--color-text-dark)
    cursor: pointer

  &--title
    font-size: 1.5em
    color: var(--color-text-dark)

.nav
  &--overlay
    position: fixed
    top: 0
    bottom: 0
    left: 0
    right: 0
    background-color: var(--color-overlay)

  &--body
    position: fixed
    top: 0
    bottom: 0
    left: 0
    display: flex
    flex-direction: column
    width: 80%
    padding: 2em 2.5em 2em 1.5em
    background-color: var(--color-background)

  &--icon
    position: absolute
    top: .5em
    right: .5em
    font-size: 1.5em
    cursor: pointer

  &--link
    border-bottom: 1px solid var(--color-text-dark)
    padding: 1em
    color: var(--color-text-dark)
    text-decoration: none
    font-weight: bold

    &:last-child
      border-bottom: 0

    &.router-link-exact-active
      color: var(--color-accent-light)
</style>
