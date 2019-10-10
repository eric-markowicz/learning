<template>
  <q-page padding>
   <q-badge
     :label = "connectionStatus ? 'Connected' : 'Not Connected'"
     :color = "connectionStatus ? 'green' : 'red'">
   </q-badge>
   <q-chip
     :color = "connectionStatus ? 'green' : 'red'"
     text-color="white"
     font-size="52px">
     <q-avatar :color = "connectionStatus ? 'green' : 'red'"
     text-color="white"
     icon="wifi"
     size="50px"></q-avatar>
   {{ connectionStatus ? 'Connected' : 'Not Connected' }}
   </q-chip>
  </q-page>
</template>

<script>
export default {
  computed: {
    connectionStatus () {
      return this.$store.getters['connected']
    }
  },

  created () {
    window.addEventListener('offline', () => {
      this.$store.dispatch('setConnection', false)
    })
    window.addEventListener('online', () => {
      this.$store.dispatch('setConnection', true)
    })
  }

}
</script>
