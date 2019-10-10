<template>
  <q-page padding>
    <q-date v-model="dateTime" today-btn  mask="YYYY/MM/DD"></q-date>
  </q-page>
</template>

<script>
import { date } from 'quasar'
let formattedString = date.formatDate(Date.now(), 'YYYY/MM/DD')
export default {
  data () {
    return {
      dateTime: formattedString
    }
  }
}
</script>
