<template>
  <div id="app" class="container">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.2.0/dist/leaflet.css">
    <div class="row">
      <div class="col-md-9">
        <div id="map" class="map">
            <l-map :zoom="zoom" :center="pos">
              <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
              <l-marker :lat-lng="pin"></l-marker>
            </l-map>
        </div>
      </div>
      <div class="col-md-3">
      <q-card class="my-card bg-blue text-white">
        <q-card-section class="text-h6 text-weight-bold text-center">
          {{ msg }}
        </q-card-section>
        <q-separator dark ></q-separator>
        <q-card-actions>
          <q-btn class="full-width" color="blue" @click="getLocation">Get location</q-btn>
        </q-card-actions>
    </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import L from 'leaflet'
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'

// Bug in the marker icon loading. Need to reset the path to ensure it loads
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})
export default {
  // name: 'PageName',
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data () {
    return {
      msg: 'Click button to see GPS coordinates',
      lat: 38.63,
      lng: -90.23,
      zoom: 13,
      center: L.latLng(47.413220, -1.219482),
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(47.413220, -1.219482)
    }
  },
  computed: {
    pos () {
      return this.center
    },
    pin () {
      return this.marker
    }
  },
  methods: {
    onSuccess (position) {
      this.lat = position.coords.latitude
      this.lng = position.coords.longitude
      this.msg = 'Latitude: ' + this.lat + ' ' + 'Longitude: ' + this.lng + ' Radius of accuracy: ' + position.coords.accuracy + 'm'
      this.center = L.latLng(this.lat, this.lng)
      this.marker = L.latLng(this.lat, this.lng)
    },
    onError (error) {
      console.log('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n')
    },
    getLocation () {
      navigator.geolocation.getCurrentPosition(this.onSuccess, this.onError, { enableHighAccuracy: true })
    }
  }
}
</script>

<style>
  .map { height: 800px; }
</style>
