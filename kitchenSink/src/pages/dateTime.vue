<template>
  <q-page padding>
    <!--<q-date v-model="dateTime" today-btn  mask="YYYY/MM/DD" :events="test"></q-date> -->
    <eventForm></eventForm>
  </q-page>
</template>

<script>
import { date } from 'quasar'
import eventForm from '/Users/ericmarkowicz/Documents/quasar_files/learning/kitchenSink/src/components/eventForm.vue'
let formattedString = date.formatDate(Date.now(), 'YYYY/MM/DD')
export default {
  components: {
    eventForm
  },
  data () {
    return {
      dateTime: formattedString
    }
  }
}
</script>
