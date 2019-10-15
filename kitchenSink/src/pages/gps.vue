<template>
  <q-page padding>
    <q-card class="my-card bg-blue text-white">
      <q-card-section class="text-h6 text-weight-bold text-center">
        {{ msg }}
      </q-card-section>
      <q-separator dark ></q-separator>
      <q-card-actions>
        <q-btn class="full-width" color="blue" @click="getLocation">Get location</q-btn>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Click button to see GPS coordinates'
    }
  },
  // API_MAP_KEY='AIzaSyBgt1gpk9WBxNjjD22___q7z_KJ1f1ZGBw'
  methods: {
    onSuccess (position) {
      var Latitude = position.coords.latitude
      var Longitude = position.coords.longitude
      this.msg = 'Latitude: ' + Latitude + ' ' + 'Longitude: ' + Longitude
    },
    onError (error) {
      console.log('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n')
    },
    getLocation () {
      navigator.geolocation.getCurrentPosition(this.onSuccess, this.onError, { enableHighAccuracy: false })
    }
  }
}
</script>
