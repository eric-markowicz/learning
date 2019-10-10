<template>
  <div>
    Battery status is: <strong>{{ batteryStatus }}</strong>
    <br>
    <q-btn color='blue' @click='takePhoto'>Take a Picture</q-btn>
  </div>
</template>

<script>
export default {
  data () {
    return {
      batteryStatus: 'determining...'
    }
  },
  methods: {
    updateBatteryStatus (status) {
      this.batteryStatus = `Level: ${status.level}, plugged: ${status.isPlugged}`
    },

    takePhoto () {
      let opts = {
        quality: 80,
        destinationType: navigator.camera.DestinationType.FILE_URI,
        sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,
        mediaType: navigator.camera.MediaType.PICTURE,
        encodingType: navigator.camera.EncodingType.JPEG,
        cameraDirection: navigator.camera.Direction.BACK,
        targetWidth: 300,
        targetHeight: 400,
        allowEdit: true,
        saveToPhotoAlbum: true
      }
      navigator.camera.getPicture(this.ftw, this.wtf, opts)
    },
    ftw: function (imgURI) {
      console.log('Success')
      document.getElementById('msg').textContent = imgURI
      document.getElementById('photo').src = imgURI
    },
    wtf: function (msg) {
      document.getElementById('msg').textContent = msg
      console.log('Error')
    }
  },
  created () {
    // we register the event like on plugin's doc page
    window.addEventListener('batterystatus', this.updateBatteryStatus, false)
  },
  beforeDestroy () {
    // we do some cleanup;
    // we need to remove the event listener
    window.removeEventListener('batterystatus', this.updateBatteryStatus, false)
  }
}
</script>
