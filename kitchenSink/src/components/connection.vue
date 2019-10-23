<template>
   <q-chip
     :color = "connectionStatus ? 'green' : 'red'"
     text-color="white"
     font-size="52px">
     <q-avatar :color = "connectionStatus ? 'green' : 'red'"
     text-color="white"
     icon="wifi"
     size="35px"></q-avatar>
   {{ connectionStatus ? 'Connected' : 'Not Connected' }}
   </q-chip>
</template>

<script>
export default {
  name: 'connection',
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
