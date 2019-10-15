<template>
    <div class="q-pa-md" style="max-width: 325px">
      <q-date v-model="dateTime" today-btn  mask="YYYY/MM/DD" :events="addMeeting" event-color="orange"></q-date>
        <q-input filled v-model="event.begin" placeholder="Start Date/Time">
          <template v-slot:prepend>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-date v-model="event.begin" mask="YYYY/MM/DD HH:mm" ></q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-time v-model="event.begin" mask="YYYY/MM/DD HH:mm" :minute-options="[0, 15, 30, 45]"></q-time>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <q-input filled v-model="event.stop" placeholder="End Date/Time">
          <template v-slot:prepend>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-date v-model="event.stop" mask="YYYY/MM/DD HH:mm" ></q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-time v-model="event.stop" mask="YYYY/MM/DD HH:mm" :minute-options="[0, 15, 30, 45]"></q-time>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <q-input v-model="event.subject" placeholder="Title" autogrow></q-input>
        <q-input v-model="event.description" placeholder="Description" autogrow></q-input>
        <q-input v-model="event.location" placeholder="Location" autogrow></q-input>
        <q-btn-group event>
          <q-btn event color="blue" @click="addEvent" label="Add Event"></q-btn>
          <q-btn event color="blue" @click="download" label="Download calendar"></q-btn>
        </q-btn-group>
    </div>
</template>

<script>
import Vue from 'vue'
import ICS from 'vue-ics'
import { date } from 'quasar'
Vue.use(ICS)

let formattedString = date.formatDate(Date.now(), 'YYYY/MM/DD')
export default {
  name: 'eventForm',
  computed: {
    addMeeting () {
      return this.meeting
    }
  },
  data () {
    return {
      splitterModel: 50,
      meeting: [],
      dateTime: formattedString,
      event: {
        subject: '',
        description: '',
        location: '',
        begin: '',
        stop: '',
        url: '',
        rrule: ''
      }
    }
  },
  methods: {
    addEvent () {
      this.$ics.addEvent('en-us', this.event.subject, this.event.description, this.event.location, this.event.begin, this.event.stop)
      console.log(this.$ics.calendar())
      this.meeting.push(this.event.begin.slice(0, 10))
      console.log(this.meeting)
    },
    download () {
      this.$ics.download('test')
    }
  }
}
</script>
