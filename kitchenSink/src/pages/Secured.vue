<template>
  <div>
    <h1>This page is protected by auth</h1>
    <q-btn @click='logout'>Logout</q-btn>
  </div>
</template>

<script>
export default {
  name: 'Secured',

  methods: {
    logout: function () {
      this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
        })
    }
  }
}
</script>

<style>
</style>
